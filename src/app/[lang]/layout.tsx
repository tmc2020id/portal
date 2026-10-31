import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Outfit } from "next/font/google";
import { localeDirection, locales } from "@/i18n/config";
import { resolveLocale } from "@/i18n/dictionaries";
import "../globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Arabic pages put Plex first (see globals.css): Outfit's generated Arial
// fallback has Arabic glyphs and would otherwise shadow Plex.
const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { dict } = await resolveLocale(params);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { locale } = await resolveLocale(params);

  return (
    <html
      lang={locale}
      dir={localeDirection(locale)}
      className={`${outfit.variable} ${plexArabic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
