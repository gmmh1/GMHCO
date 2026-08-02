import { NextRequest } from "next/server";

export function isAdminAuthenticated(req: NextRequest): boolean {
  return req.cookies.get("admin_session")?.value === "authenticated";
}
