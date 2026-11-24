import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";
import { resolveLocale } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

type ReturnPolicyProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: ReturnPolicyProps): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);

  return pageMetadata({
    locale,
    path: "/return-policy",
    title: dict.returnPolicy.metaTitle,
    description: dict.returnPolicy.metaDescription,
    imageAlt: dict.meta.imageAlt,
  });
}

export default async function ReturnPolicyPage({ params }: ReturnPolicyProps) {
  const { locale, dict } = await resolveLocale(params);

  return <PolicyPage locale={locale} dict={dict} />;
}
