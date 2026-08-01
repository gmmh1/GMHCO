import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { exchangeLinkedInCode, saveLinkedInInstall } from "@/lib/linkedin";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state");
  const cookieStore = await cookies();
  const expectedState = cookieStore.get("linkedin_oauth_state")?.value;

  if (!code || !state || !expectedState || state !== expectedState) {
    return NextResponse.redirect(new URL("/admin?linkedin=error", req.url));
  }

  const redirectUri = new URL("/api/linkedin/callback", req.url).toString();

  try {
    const tokens = await exchangeLinkedInCode(code, redirectUri);
    await saveLinkedInInstall(tokens);
    const res = NextResponse.redirect(new URL("/admin?linkedin=connected", req.url));
    res.cookies.delete("linkedin_oauth_state");
    return res;
  } catch (err) {
    console.error("[/api/linkedin/callback]", err);
    return NextResponse.redirect(new URL("/admin?linkedin=error", req.url));
  }
}
