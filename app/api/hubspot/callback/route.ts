import { NextRequest, NextResponse } from "next/server";
import { exchangeHubSpotCode, saveHubSpotTokens } from "@/lib/hubspot";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  if (!code) {
    return NextResponse.json({ error: "Missing authorization code" }, { status: 400 });
  }

  const redirectUri = new URL("/api/hubspot/callback", req.url).toString();

  try {
    const tokens = await exchangeHubSpotCode(code, redirectUri);
    await saveHubSpotTokens(tokens);
    return NextResponse.redirect(new URL("/admin?hubspot=connected", req.url));
  } catch (err) {
    console.error("[/api/hubspot/callback]", err);
    return NextResponse.redirect(new URL("/admin?hubspot=error", req.url));
  }
}
