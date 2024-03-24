import { auth } from "@/app/auth";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await auth();

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/app", request.url));
  }

  if (!session) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}

export const config = {
  matcher: ["/", "/mypage/:path*"],
};
