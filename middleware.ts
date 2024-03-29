import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { RedirectMiddleware } from "./app/middle-ware/redirect/_middleware";
import { HeadersMiddleware } from "./app/middle-ware/headers/_middleware";

export function middleware(request: NextRequest) {
  switch (true) {
    case request.nextUrl.pathname.startsWith(
      "/middle-ware/redirect"
    ):
      return RedirectMiddleware(request);
    case request.nextUrl.pathname.startsWith(
      "/middle-ware/headers"
    ):
      return HeadersMiddleware(request);
    default:
      return null;
  }
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/middleware/redirect/:path*",
// };
