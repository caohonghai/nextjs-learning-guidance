import {
  NextRequest,
  NextResponse,
} from "next/server";

export async function GET(request: NextRequest) {
  const headersList = new Headers(
    request.headers
  );
  const UserAgent = headersList.get("User-Agent");
  const Cookie = headersList.get("Cookie");
  return NextResponse.json({
    UserAgent,
    Cookie,
  });
}
