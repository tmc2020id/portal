import { notFound } from "next/navigation";
import { ar } from "./dictionaries/ar";
import { en } from "./dictionaries/en";
import { hasLocale, type Locale } from "./config";

const dictionaries = { ar, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];

// Resolves the [lang] route param, returning a 404 for unknown locales.
export async function resolveLocale(params: Promise<{ lang: string }>) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  return { locale: lang, dict: getDictionary(lang) };
}
