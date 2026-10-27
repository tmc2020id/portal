import { ContentPage } from "@/components/content-page";
import { resolveLocale } from "@/i18n/dictionaries";

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);

  return <ContentPage locale={locale} dict={dict} page={dict.pages.privacy} />;
}
