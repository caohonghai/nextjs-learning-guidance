import {
  NextRequest,
  NextResponse,
} from "next/server";

export async function GET(request: NextRequest) {
  request.cookies.set("token", "123");
  const token = request.cookies.get("token");
  return NextResponse.json({
    token,
  });
}
