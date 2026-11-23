import { connection } from "next/server";
import { HomePortal } from "@/components/home-portal";
import { ProductGrid } from "@/components/product-grid";
import { resolveLocale } from "@/i18n/dictionaries";
import { getOdooProducts } from "@/lib/odoo";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // Render on request: the Docker build has no Odoo key, so a prerendered home
  // page would have no products. Odoo's answer is cached for an hour, and the
  // home page shares the /products cache entry by asking for the same list.
  await connection();
  const { locale, dict } = await resolveLocale(params);
  const products = (await getOdooProducts(locale)).slice(0, 4);

  return (
    <HomePortal
      locale={locale}
      dict={{ home: dict.home, nav: dict.nav }}
      store={<ProductGrid labels={dict.store} products={products} placement="home_product_grid" />}
    />
  );
}
