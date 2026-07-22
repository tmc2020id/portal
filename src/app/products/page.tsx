import { ContentPage } from '@/components/content-page';
import { ProductGrid } from '@/components/product-grid';
import { pageLibrary } from '@/data/site-pages';
import { getOdooProducts } from '@/lib/odoo';

export default async function ProductsPage() {
  const products = await getOdooProducts();

  return (
    <ContentPage {...pageLibrary.products}>
      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Available Inventory</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem' }}>
          Real-time stock from our Odoo ERP system.
        </p>
        <ProductGrid products={products} />
      </div>
    </ContentPage>
  );
}
