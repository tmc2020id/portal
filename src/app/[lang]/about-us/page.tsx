import { ContentPage, contentPageMetadata } from "@/components/content-page";
import { resolveLocale } from "@/i18n/dictionaries";

export const generateMetadata = ({ params }: { params: Promise<{ lang: string }> }) =>
  contentPageMetadata(params, "about");

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);

  return <ContentPage locale={locale} dict={dict} page={dict.pages.about} />;
}
