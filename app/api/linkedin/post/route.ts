import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { postToLinkedIn } from "@/lib/linkedin";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  if (!cookieStore.get("admin_session")) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const { text } = await req.json();
  if (typeof text !== "string" || text.trim().length === 0) {
    return NextResponse.json({ error: "Post text is required" }, { status: 400 });
  }

  const result = await postToLinkedIn(text);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  return NextResponse.json({ success: true });
}
