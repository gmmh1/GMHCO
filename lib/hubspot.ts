import { createServerSupabase } from "@/lib/supabase-server";

export type HubSpotContactInput = {
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  message?: string;
  source: string;
};

const TOKEN_URL = "https://api.hubapi.com/oauth/v1/token";
const INSTALL_ID = "default";

type HubSpotTokens = { access_token: string; refresh_token: string; expires_in: number };

export function getHubSpotAuthorizeUrl(redirectUri: string) {
  const url = new URL("https://app.hubspot.com/oauth/authorize");
  url.searchParams.set("client_id", process.env.HUBSPOT_CLIENT_ID!);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("scope", "crm.objects.contacts.read crm.objects.contacts.write");
  return url.toString();
}

export async function exchangeHubSpotCode(code: string, redirectUri: string): Promise<HubSpotTokens> {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: process.env.HUBSPOT_CLIENT_ID!,
      client_secret: process.env.HUBSPOT_CLIENT_SECRET!,
      redirect_uri: redirectUri,
      code,
    }),
  });
  if (!res.ok) throw new Error(`HubSpot token exchange failed: ${await res.text()}`);
  return res.json();
}

async function refreshHubSpotTokens(refreshToken: string): Promise<HubSpotTokens> {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: process.env.HUBSPOT_CLIENT_ID!,
      client_secret: process.env.HUBSPOT_CLIENT_SECRET!,
      refresh_token: refreshToken,
    }),
  });
  if (!res.ok) throw new Error(`HubSpot token refresh failed: ${await res.text()}`);
  return res.json();
}

export async function saveHubSpotTokens(tokens: HubSpotTokens) {
  const db = createServerSupabase();
  await db.from("hubspot_installs").upsert({
    id: INSTALL_ID,
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token,
    expires_at: new Date(Date.now() + tokens.expires_in * 1000).toISOString(),
  });
}

// Prefers the connected OAuth install (refreshing it if near expiry), falling
// back to a static private-app token for accounts that haven't done the
// install flow yet.
async function getHubSpotAccessToken(): Promise<string | null> {
  try {
    const db = createServerSupabase();
    const { data } = await db
      .from("hubspot_installs")
      .select("access_token, refresh_token, expires_at")
      .eq("id", INSTALL_ID)
      .maybeSingle();

    if (data) {
      const expiresAt = new Date(data.expires_at).getTime();
      if (expiresAt - Date.now() > 60_000) return data.access_token;

      const refreshed = await refreshHubSpotTokens(data.refresh_token);
      await saveHubSpotTokens(refreshed);
      return refreshed.access_token;
    }
  } catch (err) {
    console.error("[HubSpot] Failed to load/refresh OAuth token:", err);
  }

  return process.env.HUBSPOT_ACCESS_TOKEN ?? null;
}

// Upserts by email: tries to update an existing contact first, creates one if none exists.
// Safe to call repeatedly for the same email (e.g. across a multi-turn chat conversation).
export async function upsertHubSpotContact(data: HubSpotContactInput) {
  const token = await getHubSpotAccessToken();
  if (!token) return;

  const [firstName, ...rest] = data.name?.trim().split(/\s+/).filter(Boolean) ?? [];
  const lastName = rest.join(" ");

  const properties: Record<string, string> = {
    email: data.email,
    hs_lead_status: "NEW",
    lifecyclestage: "lead",
  };
  if (firstName) properties.firstname = firstName;
  if (lastName) properties.lastname = lastName;
  if (data.phone) properties.phone = data.phone;
  if (data.company) properties.company = data.company;
  if (data.website) properties.website = data.website;
  if (data.message) properties.message = `Source: ${data.source}\n\n${data.message}`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  try {
    const patchRes = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(data.email)}?idProperty=email`,
      { method: "PATCH", headers, body: JSON.stringify({ properties }) }
    );
    if (patchRes.status === 404) {
      await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers,
        body: JSON.stringify({ properties }),
      });
    } else if (!patchRes.ok) {
      console.error("[HubSpot] Failed to update contact:", await patchRes.text());
    }
  } catch (err) {
    console.error("[HubSpot] Failed to upsert contact:", err);
  }
}
