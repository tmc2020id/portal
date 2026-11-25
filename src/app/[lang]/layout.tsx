import type { Metadata } from "next";
import { ConsentBanner } from "@/components/consent-banner";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { localeDirection, locales } from "@/i18n/config";
import { resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { outfit, plexArabic } from "../fonts";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);

  // Pages below set their own title and share card; the home page uses this.
  return {
    metadataBase: new URL(siteUrl),
    ...pageMetadata({
      locale,
      path: "/",
      title: dict.meta.title,
      description: dict.meta.description,
      imageAlt: dict.meta.imageAlt,
    }),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <html
      lang={locale}
      dir={localeDirection(locale)}
      className={`${outfit.variable} ${plexArabic.variable}`}
    >
      <body>
        {children}
        <WhatsAppButton label={dict.whatsapp.label} message={dict.whatsapp.message} />
        <ConsentBanner locale={locale} labels={dict.consent} />
      </body>
    </html>
  );
}
