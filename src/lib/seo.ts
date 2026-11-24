import type { Metadata } from "next";
import { defaultLocale, localizeHref, locales, type Locale } from "@/i18n/config";
import type { PageKey } from "@/i18n/dictionaries/en";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tmcsmart.com";

const siteName = "TMC SMART";

const ogLocale: Record<Locale, string> = { ar: "ar_SY", en: "en_US" };

// Share image per language, 1200x630, in /public. Bump the ?v= when the
// image changes so WhatsApp and Facebook fetch the new one.
const shareImage = (locale: Locale) => `/og-${locale}.png?v=1`;

export const pagePaths: Record<PageKey, string> = {
  about: "/about-us",
  products: "/products",
  services: "/services",
  specialOrders: "/special-orders",
  contact: "/contact",
  faq: "/faq",
  terms: "/terms-of-use",
  privacy: "/privacy-policy",
  legal: "/legal",
  shipping: "/shipping-policy",
  cookies: "/cookie-policy",
  dataDeletion: "/data-deletion",
};

type PageMetadataInput = {
  locale: Locale;
  // Locale-free path, e.g. "/" or "/about-us".
  path: string;
  title: string;
  description: string;
  imageAlt: string;
};

// Title, description, canonical/hreflang links and the social share card
// (Open Graph for WhatsApp/Facebook, plus X) for one page. Next merges
// metadata shallowly, so every page sets the whole openGraph object.
export function pageMetadata({
  locale,
  path,
  title,
  description,
  imageAlt,
}: PageMetadataInput): Metadata {
  const url = localizeHref(locale, path);
  const image = { url: shareImage(locale), width: 1200, height: 630, alt: imageAlt };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localizeHref(l, path)])),
        "x-default": localizeHref(defaultLocale, path),
      },
    },
    openGraph: {
      type: "website",
      siteName,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      url,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
