import { cookies } from "next/headers";
import { isAdminCookieValid } from "@/lib/funnel/security";

export const ADMIN_COOKIE = "fh_funnel_admin";

export async function isAdminSession(): Promise<boolean> {
  const jar = await cookies();
  return isAdminCookieValid(jar.get(ADMIN_COOKIE)?.value);
}
