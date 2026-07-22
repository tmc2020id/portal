const ODOO_URL = 'https://erp.tmcsmart.com';
const ODOO_DB = 'tmc_data';
const ODOO_USER = 'sales@tmcsmart.shop';
const ODOO_PASS = 'bf1ed9972991da848709a979d3f64aa9146723ff';

export type OdooProduct = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | null;
};

async function jsonRpc(service: string, method: string, args: any[]) {
  const url = `${ODOO_URL}/jsonrpc`;
  const body = {
    jsonrpc: '2.0',
    method: 'call',
    params: { service, method, args },
    id: Math.floor(Math.random() * 1000000),
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    next: { revalidate: 3600 } // Cache for 1 hour
  });

  const result = await response.json();
  if (result.error) throw new Error(JSON.stringify(result.error));
  return result.result;
}

export async function getOdooProducts(): Promise<OdooProduct[]> {
  try {
    const uid = await jsonRpc('common', 'login', [ODOO_DB, ODOO_USER, ODOO_PASS]);
    if (!uid) return [];

    const fields = ['id', 'name', 'list_price', 'description_sale', 'image_512'];
    const domain = [['website_published', '=', true]];
    
    const products = await jsonRpc('object', 'execute_kw', [
      ODOO_DB, uid, ODOO_PASS, 'product.template', 'search_read',
      [domain],
      { fields, limit: 12, order: 'id desc' }
    ]);

    return products.map((p: any) => ({
      id: p.id,
      name: p.name,
      price: p.list_price,
      description: p.description_sale || '',
      image: p.image_512 ? `data:image/png;base64,${p.image_512}` : null,
    }));
  } catch (error) {
    console.error('Odoo Fetch Error:', error);
    return [];
  }
}
