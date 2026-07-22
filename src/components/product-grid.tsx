import Image from 'next/image';
import styles from './product-grid.module.css';
import { OdooProduct } from '@/lib/odoo';

export function ProductGrid({ products }: { products: OdooProduct[] }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <article key={product.id} className={styles.card}>
          <div className={styles.imageWrapper}>
            {product.image ? (
              <img src={product.image} alt={product.name} className={styles.image} />
            ) : (
              <div className={styles.placeholder}>No Image</div>
            )}
          </div>
          <div className={styles.info}>
            <h3>{product.name}</h3>
            <p className={styles.price}>{product.price} USD</p>
            {product.description && (
              <p className={styles.description}>{product.description.substring(0, 100)}...</p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
