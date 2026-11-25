import { connection } from "next/server";
import { HomePortal } from "@/components/home-portal";
import { ProductGrid } from "@/components/product-grid";
import { resolveLocale } from "@/i18n/dictionaries";
import { getOdooBlogPosts, getOdooProducts } from "@/lib/odoo";

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
  const [allProducts, posts] = await Promise.all([getOdooProducts(locale), getOdooBlogPosts(locale)]);
  const products = allProducts.slice(0, 4);
  const blogPosts = posts.map((post) => ({
    title: post.title,
    category: dict.home.blogCategory,
    date: post.date,
    href: post.href,
    image: post.image,
  }));

  return (
    <HomePortal
      locale={locale}
      dict={{ home: dict.home, nav: dict.nav }}
      blogPosts={blogPosts}
      store={<ProductGrid labels={dict.store} products={products} placement="home_product_grid" />}
    />
  );
}
