import { getUser } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getUser();
  console.log(session?.user);

  return NextResponse.json({});
}
