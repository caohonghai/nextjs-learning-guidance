import {
  NextRequest,
  NextResponse,
} from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  return NextResponse.json({ id });
}
