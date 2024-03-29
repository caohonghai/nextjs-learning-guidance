import {
  NextRequest,
  NextResponse,
} from "next/server";

export async function GET(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  // /home -> pathName = /home
  const searchParams =
    request.nextUrl.searchParams;
  // /home?name=ant -> searchParams = { 'name': 'ant' }
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const data = await res.json();

  return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {
  const article = await request.json();

  return NextResponse.json(
    {
      id: Math.random().toString(36).slice(-8),
      data: article,
    },
    { status: 201 }
  );
}
