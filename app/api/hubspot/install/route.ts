import { NextRequest, NextResponse } from "next/server";
import { getHubSpotAuthorizeUrl } from "@/lib/hubspot";

export async function GET(req: NextRequest) {
  if (!process.env.HUBSPOT_CLIENT_ID) {
    return NextResponse.json({ error: "HUBSPOT_CLIENT_ID is not configured" }, { status: 500 });
  }

  const redirectUri = new URL("/api/hubspot/callback", req.url).toString();
  return NextResponse.redirect(getHubSpotAuthorizeUrl(redirectUri));
}
