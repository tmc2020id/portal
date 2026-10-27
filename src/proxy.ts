import { NextResponse, type NextRequest } from "next/server";

// Arabic is the default locale and has no URL prefix: "/faq" is served by
// app/[lang]/faq with lang = "ar", while English stays at "/en/faq".
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();

  // Keep one public URL per Arabic page.
  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  url.pathname = pathname === "/" ? "/ar" : `/ar${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals and files with an extension (images, robots.txt, sitemap.xml).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
