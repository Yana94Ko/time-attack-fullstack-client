import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const accessToken = request.cookies.has("accessToken");
  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth");

  if (accessToken && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  //아무 문제가 없다면 다음 으로..
  NextResponse.next();
}
export const config = {
  matcher: ["/auth/:path*"],
};
