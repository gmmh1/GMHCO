import { createServerSupabase } from "@/lib/supabase-server";

const AUTH_URL = "https://www.linkedin.com/oauth/v2/authorization";
const TOKEN_URL = "https://www.linkedin.com/oauth/v2/accessToken";
const USERINFO_URL = "https://api.linkedin.com/v2/userinfo";
const POSTS_URL = "https://api.linkedin.com/rest/posts";
const LINKEDIN_API_VERSION = "202506";
const INSTALL_ID = "default";

type LinkedInTokens = { access_token: string; expires_in: number };

export function getLinkedInAuthorizeUrl(redirectUri: string, state: string) {
  const url = new URL(AUTH_URL);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("client_id", process.env.LINKEDIN_CLIENT_ID!);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("scope", "openid profile w_member_social");
  return url.toString();
}

export async function exchangeLinkedInCode(code: string, redirectUri: string): Promise<LinkedInTokens> {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      client_id: process.env.LINKEDIN_CLIENT_ID!,
      client_secret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),
  });
  if (!res.ok) throw new Error(`LinkedIn token exchange failed: ${await res.text()}`);
  return res.json();
}

async function getMemberUrn(accessToken: string): Promise<string> {
  const res = await fetch(USERINFO_URL, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) throw new Error(`LinkedIn userinfo failed: ${await res.text()}`);
  const data = await res.json();
  return `urn:li:person:${data.sub}`;
}

export async function saveLinkedInInstall(tokens: LinkedInTokens) {
  const memberUrn = await getMemberUrn(tokens.access_token);
  const db = createServerSupabase();
  await db.from("linkedin_installs").upsert({
    id: INSTALL_ID,
    access_token: tokens.access_token,
    member_urn: memberUrn,
    expires_at: new Date(Date.now() + tokens.expires_in * 1000).toISOString(),
  });
}

type PostResult = { ok: true } | { ok: false; error: string };

// LinkedIn only issues refresh tokens to approved Marketing Developer Platform
// partners, which this app isn't — so there's no auto-refresh here. The access
// token is valid ~60 days; once it expires, reconnect via the admin panel.
export async function postToLinkedIn(text: string): Promise<PostResult> {
  const db = createServerSupabase();
  const { data } = await db
    .from("linkedin_installs")
    .select("access_token, member_urn, expires_at")
    .eq("id", INSTALL_ID)
    .maybeSingle();

  if (!data) return { ok: false, error: "LinkedIn isn't connected yet — click Connect LinkedIn first." };
  if (new Date(data.expires_at).getTime() < Date.now()) {
    return { ok: false, error: "LinkedIn connection expired (tokens last ~60 days) — reconnect via Connect LinkedIn." };
  }

  const res = await fetch(POSTS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${data.access_token}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0",
      "LinkedIn-Version": LINKEDIN_API_VERSION,
    },
    body: JSON.stringify({
      author: data.member_urn,
      commentary: text,
      visibility: "PUBLIC",
      distribution: { feedDistribution: "MAIN_FEED" },
      lifecycleState: "PUBLISHED",
    }),
  });

  if (!res.ok) {
    console.error("[LinkedIn] Post failed:", await res.text());
    return { ok: false, error: "LinkedIn rejected the post — check server logs." };
  }
  return { ok: true };
}
