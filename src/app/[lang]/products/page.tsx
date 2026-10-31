import { ContentPage, contentPageMetadata } from "@/components/content-page";
import { ProductGrid } from "@/components/product-grid";
import { resolveLocale } from "@/i18n/dictionaries";
import { getOdooProducts } from "@/lib/odoo";

// Refresh the store section from Odoo at most once an hour.
export const revalidate = 3600;

export const generateMetadata = ({ params }: { params: Promise<{ lang: string }> }) =>
  contentPageMetadata(params, "products");

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { locale, dict } = await resolveLocale(params);
  const products = await getOdooProducts(locale);

  return (
    <ContentPage locale={locale} dict={dict} page={dict.pages.products}>
      <ProductGrid labels={dict.store} products={products} />
    </ContentPage>
  );
}
