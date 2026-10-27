import { HomePortal } from "@/components/home-portal";
import { resolveLocale } from "@/i18n/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);

  return <HomePortal locale={locale} dict={dict} />;
}
