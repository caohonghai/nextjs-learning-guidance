import {
  NextRequest,
  NextResponse,
} from "next/server";

export function RedirectMiddleware(
  request: NextRequest
) {
  return NextResponse.redirect(
    new URL("/", request.url)
  );
}
