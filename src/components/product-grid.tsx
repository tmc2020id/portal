import type { Dictionary } from "@/i18n/dictionaries/en";
import type { OdooProduct } from "@/lib/odoo";
import styles from "./product-grid.module.css";

type ProductGridProps = {
  labels: Dictionary["store"];
  products: OdooProduct[];
};

export function ProductGrid({ labels, products }: ProductGridProps) {
  if (!products.length) {
    return null;
  }

  return (
    <section className={styles.storeSection}>
      <div className={styles.storeHeader}>
        <div>
          <span>{labels.eyebrow}</span>
          <h2>{labels.title}</h2>
          <p>{labels.body}</p>
        </div>
        <a href={labels.href}>{labels.viewAll}</a>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <a key={product.id} href={product.href} className={styles.card}>
            <div className={styles.imageWrapper}>
              {/* Served straight from the Odoo shop, so next/image would only add a proxy hop. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.image} alt="" loading="lazy" />
            </div>
            <h3>
              <bdi>{product.name}</bdi>
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
