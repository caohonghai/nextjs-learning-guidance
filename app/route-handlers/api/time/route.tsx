import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams =
    request.nextUrl.searchParams;
  return Response.json({
    date: new Date().toLocaleTimeString(),
  });
}
