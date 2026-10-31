export const locales = ["ar", "en"] as const;

export type Locale = (typeof locales)[number];

// Arabic is served at the site root; other locales live under /<locale>.
export const defaultLocale: Locale = "ar";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const localeDirection = (locale: Locale) =>
  locale === "ar" ? "rtl" : "ltr";

export function localizeHref(locale: Locale, href: string) {
  if (locale === defaultLocale) {
    return href;
  }

  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

// Returns the locale-free path for a visible URL, e.g. /en/faq -> /faq.
export function stripLocale(pathname: string) {
  for (const locale of locales) {
    if (pathname === `/${locale}`) {
      return "/";
    }

    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1);
    }
  }

  return pathname;
}
