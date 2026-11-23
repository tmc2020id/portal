import { ContentPage, contentPageMetadata } from "@/components/content-page";
import { ProductGrid } from "@/components/product-grid";
import { resolveLocale } from "@/i18n/dictionaries";
import { connection } from "next/server";
import { getOdooProducts } from "@/lib/odoo";

export const generateMetadata = ({ params }: { params: Promise<{ lang: string }> }) =>
  contentPageMetadata(params, "products");

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // Render on request, not at build time: the Docker build has no Odoo key, so a
  // prerendered page would show an empty store until it was revalidated.
  // getOdooProducts still caches Odoo's answer for an hour.
  await connection();
  const { locale, dict } = await resolveLocale(params);
  const products = await getOdooProducts(locale);

  return (
    <ContentPage locale={locale} dict={dict} page={dict.pages.products}>
      <ProductGrid labels={dict.store} products={products} />
    </ContentPage>
  );
}
