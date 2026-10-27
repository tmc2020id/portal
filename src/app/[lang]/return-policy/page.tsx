import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";
import { resolveLocale } from "@/i18n/dictionaries";

export const dynamic = "force-static";

type ReturnPolicyProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: ReturnPolicyProps): Promise<Metadata> {
  const { dict } = await resolveLocale(params);

  return {
    title: dict.returnPolicy.metaTitle,
    description: dict.returnPolicy.metaDescription,
  };
}

export default async function ReturnPolicyPage({ params }: ReturnPolicyProps) {
  const { locale, dict } = await resolveLocale(params);

  return <PolicyPage locale={locale} dict={dict} />;
}
