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
  // Skip Next internals and real files (images, icons, robots.txt, sitemap.xml,
  // the manifest). Other dotted paths, like an old "/page.html" link, still go
  // through /ar so they get the site's own 404 page.
  matcher: [
    "/((?!_next|api|.*\\.(?:png|jpe?g|gif|webp|avif|svg|ico|txt|xml|webmanifest|json|js|css|map|woff2?|ttf|pdf)$).*)",
  ],
};
