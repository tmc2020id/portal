import type { Locale } from "@/i18n/config";

// Server-only: these come from the runtime environment (.env or the container),
// never from the bundle. Without them the store section is simply hidden.
const ODOO_URL = process.env.ODOO_URL ?? "https://erp.tmcsmart.com";
const ODOO_DB = process.env.ODOO_DB;
const ODOO_USER = process.env.ODOO_USER;
const ODOO_API_KEY = process.env.ODOO_API_KEY;

const odooLang: Record<Locale, string> = { ar: "ar_001", en: "en_US" };

// Arabic is the shop's default language, so only English gets a prefix.
const shopPrefix: Record<Locale, string> = { ar: "", en: "/en" };

export type OdooProduct = {
  id: number;
  name: string;
  href: string;
  image: string;
};

type OdooProductRecord = {
  id: number;
  name: string;
  website_url: string;
};

async function jsonRpc<T>(service: string, method: string, args: unknown[]): Promise<T> {
  const response = await fetch(`${ODOO_URL}/jsonrpc`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", method: "call", params: { service, method, args } }),
  });
  const payload = await response.json();

  if (payload.error) {
    throw new Error(payload.error.data?.message ?? payload.error.message);
  }

  return payload.result as T;
}

// Latest published products, without prices: prices live only in the Odoo shop.
export async function getOdooProducts(locale: Locale, limit = 8): Promise<OdooProduct[]> {
  if (!ODOO_DB || !ODOO_USER || !ODOO_API_KEY) {
    return [];
  }

  try {
    const uid = await jsonRpc<number | false>("common", "login", [ODOO_DB, ODOO_USER, ODOO_API_KEY]);

    if (!uid) {
      return [];
    }

    const records = await jsonRpc<OdooProductRecord[]>("object", "execute_kw", [
      ODOO_DB,
      uid,
      ODOO_API_KEY,
      "product.template",
      "search_read",
      [[["website_published", "=", true], ["sale_ok", "=", true]]],
      { fields: ["name", "website_url"], limit, order: "id desc", context: { lang: odooLang[locale] } },
    ]);

    return records.map((record) => ({
      id: record.id,
      name: record.name.replace(/\s+/g, " ").trim(),
      href: `${ODOO_URL}${shopPrefix[locale]}${record.website_url}`,
      image: `${ODOO_URL}/web/image/product.template/${record.id}/image_512`,
    }));
  } catch (error) {
    console.error("Odoo products fetch failed:", error);
    return [];
  }
}
