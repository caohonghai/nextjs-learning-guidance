import {
  NextRequest,
  NextResponse,
} from "next/server";

export function HeadersMiddleware(
  request: NextRequest
) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(
    request.headers
  );
  requestHeaders.set(
    "x-hello-from-middleware1",
    "hello"
  );
  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });
  // Set a new response header `x-hello-from-middleware2`
  response.headers.set(
    "x-hello-from-middleware2",
    "hello"
  );

  response.cookies.set("vercel", "fast");
  return response;
}
