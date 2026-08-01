import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getLinkedInAuthorizeUrl } from "@/lib/linkedin";

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  if (!cookieStore.get("admin_session")) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }
  if (!process.env.LINKEDIN_CLIENT_ID) {
    return NextResponse.json({ error: "LINKEDIN_CLIENT_ID is not configured" }, { status: 500 });
  }

  const state = crypto.randomUUID();
  const redirectUri = new URL("/api/linkedin/callback", req.url).toString();
  const res = NextResponse.redirect(getLinkedInAuthorizeUrl(redirectUri, state));
  res.cookies.set("linkedin_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });
  return res;
}
