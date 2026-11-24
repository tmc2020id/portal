// Exports the site's policy pages for the Odoo store (erp.tmcsmart.com).
//
// The portal dictionaries are the single source of the wording. This script
// turns them into Odoo website page views, so both sites say the same thing:
//   docs/odoo-policies/odoo-policies.json  machine file used to update Odoo
//   docs/odoo-policies/preview.html        both languages side by side
//
// Run after any policy change:
//   node --experimental-strip-types --no-warnings scripts/export-odoo-policies.mjs

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { en } from "../src/i18n/dictionaries/en.ts";
import { ar } from "../src/i18n/dictionaries/ar.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "docs", "odoo-policies");

// Portal paths and their Odoo equivalents, so links stay inside the store.
const odooPath = {
  "/contact": "/contactus",
  "/faq": "/faq",
  "/products": "/shop",
  "/special-orders": "/tmc-special-orders",
  "/terms-of-use": "/terms-of-use-for-tmc",
  "/privacy-policy": "/privacy",
  "/return-policy": "/return-policy",
  "/shipping-policy": "/shipping-policy",
  "/cookie-policy": "/cookie-policy",
  "/data-deletion": "/data-deletion",
  "/legal": "/legal",
};

// Odoo pages found on 2026-11-21 (website "SHOP", id 1). view_id null = page to create.
const pages = [
  { key: "terms", url: "/terms-of-use-for-tmc", viewKey: "website.terms-of-use-for-tmc", viewId: 3755 },
  { key: "privacy", url: "/privacy", viewKey: "website.privacy", viewId: 2668 },
  { key: "returns", url: "/return-policy", viewKey: "website.return-policy", viewId: 3765 },
  { key: "shipping", url: "/shipping-policy", viewKey: "website.shipping-policy", viewId: null },
  { key: "cookies", url: "/cookie-policy", viewKey: "website.cookie_policy", viewId: 3737 },
  { key: "dataDeletion", url: "/data-deletion", viewKey: "website.data-deletion", viewId: null },
  { key: "legal", url: "/legal", viewKey: "website.legal", viewId: null },
  { key: "specialOrders", url: "/tmc-special-orders", viewKey: "website.tmc-special-orders", viewId: 3416, optional: true },
];

const esc = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// A text block in both languages. Inner HTML is escaped here once.
const t = (enText, arText) => ({ en: esc(enText), ar: esc(arText) });
const raw = (enHtml, arHtml) => ({ en: enHtml, ar: arHtml });
// Plain text in both languages (not HTML), for page fields such as the meta description.
const plain = (enText, arText) => ({ en: String(enText).trim(), ar: String(arText).trim() });
const link = (href, enLabel, arLabel, cls = "") => {
  const attrs = `${cls ? ` class="${cls}"` : ""} href="${esc(odooPath[href] ?? href)}"`;
  return raw(`<a${attrs}>${esc(enLabel)}</a>`, `<a${attrs}>${esc(arLabel)}</a>`);
};

// Page model: sections of nodes. A node is { tag, cls, text } or { tag: "ul", items }.
const node = (tag, text, cls = "") => ({ tag, text, cls });
const list = (items, cls = "") => ({ tag: "ul", items, cls });
const section = (nodes, cls = "pt48 pb48") => ({ nodes, cls });

// Some pages (returns) use `summary` for a list of cards, so only a string summary can be the lead.
const leadOf = (page) => (typeof page.summary === "string" ? page.summary : page.lead);

function heroSection(enPage, arPage, updated) {
  const nodes = [
    node("p", t(enPage.eyebrow, arPage.eyebrow), "text-muted mb-2"),
    node("h1", t(enPage.title, arPage.title), "display-5"),
    node("p", t(leadOf(enPage), leadOf(arPage)), "lead"),
  ];
  if (updated) {
    nodes.push(node("p", t(`${en.legal.updatedLabel}: ${updated.en}`, `${ar.legal.updatedLabel}: ${updated.ar}`), "text-muted small"));
  }
  return section(nodes, "pt64 pb32");
}

function companySection() {
  return section(
    [
      node("p", t(en.legal.companyEyebrow, ar.legal.companyEyebrow), "text-muted mb-2"),
      node("h2", t(en.legal.companyTitle, ar.legal.companyTitle), "h4"),
      node("p", t(en.legal.companyNote, ar.legal.companyNote)),
      list(
        en.legal.company.map((item, index) => {
          const arItem = ar.legal.company[index];
          const value = (v) => (item.href ? `<a href="${esc(item.href)}">${esc(v)}</a>` : esc(v));
          return raw(
            `<strong>${esc(item.label)}:</strong> ${value(item.value)}`,
            `<strong>${esc(arItem.label)}:</strong> ${value(arItem.value)}`,
          );
        }),
        "list-unstyled",
      ),
    ],
    "pt40 pb40 o_cc o_cc2",
  );
}

function ctaSection(enPage, arPage) {
  return section(
    [
      node("h2", t(enPage.ctaTitle, arPage.ctaTitle), "h4"),
      node("p", link(enPage.ctaHref, enPage.ctaLabel, arPage.ctaLabel, "btn btn-primary btn-lg")),
    ],
    "pt40 pb64 text-center",
  );
}

// Content pages: terms, privacy, shipping, cookies, data deletion, index, special orders.
function contentPage(key) {
  const enPage = en.pages[key];
  const arPage = ar.pages[key];
  const isLegal = Boolean(enPage.updated);
  const sections = [heroSection(enPage, arPage, isLegal ? { en: enPage.updated, ar: arPage.updated } : null)];

  const intro = section([node("h2", t(enPage.introTitle, arPage.introTitle), "h3"), node("p", t(enPage.intro, arPage.intro))]);
  if (isLegal) sections.push(intro);

  if (enPage.metrics.length) {
    sections.push(
      section([
        list(
          enPage.metrics.map((m, i) =>
            raw(`<strong>${esc(m.value)}</strong> – ${esc(m.label)}`, `<strong>${esc(arPage.metrics[i].value)}</strong> – ${esc(arPage.metrics[i].label)}`),
          ),
        ),
      ], "pt16 pb16"),
    );
  }

  if (enPage.links?.length) {
    sections.push(
      section(
        enPage.links.flatMap((item, i) => [
          node("h3", link(item.href, item.title, arPage.links[i].title), "h5 mb-1"),
          node("p", t(item.body, arPage.links[i].body), "text-muted"),
        ]),
        "pt24 pb24",
      ),
    );
  }

  for (const [i, group] of (enPage.sections ?? []).entries()) {
    const arGroup = arPage.sections[i];
    sections.push(
      section(
        [
          node("h2", t(group.title, arGroup.title), "h3"),
          ...group.items.flatMap((item, j) => [
            node("h3", t(item.title, arGroup.items[j].title), "h5 mt-4"),
            node("p", t(item.body, arGroup.items[j].body)),
          ]),
        ],
        "pt32 pb32",
      ),
    );
  }

  if (!isLegal) sections.push(intro);

  if (enPage.highlights.length) {
    sections.push(
      section(
        enPage.highlights.flatMap((item, i) => [
          node("h3", t(item.title, arPage.highlights[i].title), "h5 mt-4"),
          node("p", t(item.body, arPage.highlights[i].body)),
        ]),
      ),
    );
  }

  if (enPage.spotlight) {
    const s = enPage.spotlight;
    const a = arPage.spotlight;
    sections.push(
      section([
        node("h2", t(s.title, a.title), "h3"),
        node("p", t(s.body, a.body)),
        node("h3", t(s.listTitle, a.listTitle), "h5 mt-4"),
        list(s.list.map((item, i) => t(item, a.list[i]))),
      ]),
    );
  }

  if (isLegal) sections.push(companySection());
  sections.push(ctaSection(enPage, arPage));
  // Same description as the site: contentPageMetadata uses the page summary.
  return {
    name: t(enPage.title, arPage.title),
    meta: t(enPage.metaTitle, arPage.metaTitle),
    description: plain(enPage.summary, arPage.summary),
    sections,
  };
}

// The return policy has its own shape on the site.
function returnsPage() {
  const e = en.returnPolicy;
  const a = ar.returnPolicy;
  const sections = [heroSection(e, a, { en: e.updated, ar: a.updated })];

  sections.push(
    section(
      e.summary.flatMap((item, i) => [
        node("h3", t(item.title, a.summary[i].title), "h5 mt-3 mb-1"),
        node("p", t(item.body, a.summary[i].body), "text-muted"),
      ]),
      "pt24 pb24 o_cc o_cc2",
    ),
  );
  sections.push(section([node("h2", t(e.statementTitle, a.statementTitle), "h3"), node("p", t(e.statementBody, a.statementBody))], "pt32 pb16"));
  sections.push(
    section([node("h2", t(e.conditionsTitle, a.conditionsTitle), "h3"), list(e.conditions.map((c, i) => t(c, a.conditions[i])))], "pt16 pb16"),
  );
  for (const [i, group] of e.sections.entries()) {
    sections.push(
      section([node("h2", t(group.title, a.sections[i].title), "h3"), list(group.items.map((item, j) => t(item, a.sections[i].items[j])))], "pt16 pb16"),
    );
  }
  sections.push(section([node("h2", t(e.noteTitle, a.noteTitle), "h3"), node("p", t(e.noteBody, a.noteBody))], "pt16 pb32"));
  sections.push(companySection());
  sections.push(
    section(
      [
        node("h2", t(e.supportTitle, a.supportTitle), "h4"),
        node("p", t(e.supportBody, a.supportBody)),
        node("p", raw('<a class="btn btn-primary btn-lg" href="mailto:sales@tmcsmart.shop">sales@tmcsmart.shop</a>', '<a class="btn btn-primary btn-lg" href="mailto:sales@tmcsmart.shop">sales@tmcsmart.shop</a>')),
        node("p", link("/contact", e.contactPage, a.contactPage)),
      ],
      "pt40 pb64 text-center",
    ),
  );
  return {
    name: t(e.title, a.title),
    meta: t(e.metaTitle, a.metaTitle),
    description: plain(e.metaDescription, a.metaDescription),
    sections,
  };
}

const cls = (value) => (value ? ` class="${value}"` : "");

function renderBody(model, lang, indent = "      ") {
  return model.sections
    .map((s) => {
      const inner = s.nodes
        .map((n) =>
          n.tag === "ul"
            ? `${indent}    <ul${cls(n.cls)}>\n${n.items.map((item) => `${indent}      <li>${item[lang]}</li>`).join("\n")}\n${indent}    </ul>`
            : `${indent}    <${n.tag}${cls(n.cls)}>${n.text[lang]}</${n.tag}>`,
        )
        .join("\n");
      return `${indent}<section class="s_text_block o_colored_level ${s.cls}" data-snippet="s_text_block" data-name="Text">\n${indent}  <div class="o_container_small">\n${inner}\n${indent}  </div>\n${indent}</section>`;
    })
    .join("\n");
}

const renderArch = (model, viewKey, lang) =>
  `<t t-name="${viewKey}">\n  <t t-call="website.layout">\n    <div id="wrap" class="oe_structure oe_empty">\n${renderBody(model, lang)}\n    </div>\n  </t>\n</t>`;

// Every translatable block as an English/Arabic pair, in page order.
function terms(model) {
  const pairs = [];
  for (const s of model.sections) {
    for (const n of s.nodes) {
      for (const block of n.tag === "ul" ? n.items : [n.text]) {
        if (block.en !== block.ar) pairs.push([block.en, block.ar]);
      }
    }
  }
  return pairs;
}

const result = pages.map((page) => {
  const model = page.key === "returns" ? returnsPage() : contentPage(page.key);
  return {
    key: page.key,
    odoo: {
      url: page.url,
      view_key: page.viewKey,
      view_id: page.viewId,
      action: page.viewId ? "update" : "create",
      optional: Boolean(page.optional),
    },
    portal: `https://tmcsmart.com${Object.keys(odooPath).find((path) => odooPath[path] === page.url)}`,
    name: model.name,
    meta_title: model.meta,
    meta_description: model.description,
    arch_en: renderArch(model, page.viewKey, "en"),
    arch_ar: renderArch(model, page.viewKey, "ar"),
    terms_ar: terms(model),
    model,
  };
});

const generated = new Date().toISOString();
const json = {
  about:
    "TMC policy pages for the Odoo store, generated from the tmcsmart.com dictionaries by scripts/export-odoo-policies.mjs. arch_en is the view source (en_US); terms_ar maps each English block to its Arabic translation (ar_001, the website's default language). arch_ar is the full Arabic page for manual pasting. meta_description is plain text for the page's website_meta_description (en_US source, ar_001 translation), the same description tmcsmart.com uses.",
  generated,
  odoo: { url: "https://erp.tmcsmart.com", website_id: 1, default_lang: "ar_001", other_langs: ["en_US"] },
  // The render model is only needed for the preview.
  pages: result.map((page) => Object.fromEntries(Object.entries(page).filter(([field]) => field !== "model"))),
};

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "odoo-policies.json"), `${JSON.stringify(json, null, 2)}\n`);

// Preview: the two languages side by side, with plain styling close to Odoo's.
const previewRows = result
  .map(
    (page) => `
  <article class="page" id="${page.key}">
    <header class="page-head">
      <h2>${page.name.ar} <span>· ${page.name.en}</span></h2>
      <p><code>erp.tmcsmart.com${page.odoo.url}</code> · ${page.odoo.action === "create" ? "صفحة جديدة" : "تحديث صفحة موجودة"}${page.odoo.optional ? " · اختيارية" : ""}</p>
    </header>
    <div class="cols">
      <div class="col" dir="rtl" lang="ar">${renderBody(page.model, "ar", "")}</div>
      <div class="col" dir="ltr" lang="en">${renderBody(page.model, "en", "")}</div>
    </div>
  </article>`,
  )
  .join("\n");

const toc = result
  .map((page) => `<a href="#${page.key}">${page.name.ar}</a>`)
  .join("");

const preview = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>سياسات متجر Odoo</title>
<style>
  :root { --bg: #f6f7f9; --card: #fff; --ink: #1d2433; --muted: #5d6677; --line: #e3e6ec; --brand: #0b69b2; --accent: #ff8e23; }
  @media (prefers-color-scheme: dark) { :root { --bg: #11151c; --card: #181e27; --ink: #e8ebf1; --muted: #9aa3b2; --line: #2a3240; --brand: #5aa9e6; } }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--ink); font: 16px/1.75 system-ui, "Segoe UI", Tahoma, sans-serif; }
  .top { position: sticky; top: 0; z-index: 2; background: var(--card); border-bottom: 1px solid var(--line); padding: 12px 16px; }
  .top h1 { margin: 0 0 6px; font-size: 1.15rem; }
  .top p { margin: 0 0 8px; color: var(--muted); font-size: .9rem; }
  nav { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 2px; }
  nav a { flex: none; padding: 4px 12px; border: 1px solid var(--line); border-radius: 999px; color: var(--ink); text-decoration: none; font-size: .85rem; }
  main { max-width: 1240px; margin: 0 auto; padding: 16px; }
  .page { margin: 24px 0 48px; scroll-margin-top: 120px; }
  .page-head h2 { margin: 0; font-size: 1.4rem; }
  .page-head h2 span { color: var(--muted); font-weight: 400; font-size: 1rem; }
  .page-head p { margin: 4px 0 12px; color: var(--muted); font-size: .9rem; }
  code { font-size: .85em; }
  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .col { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 8px 20px; min-width: 0; }
  section { padding: 10px 0; border-bottom: 1px dashed var(--line); }
  section:last-child { border-bottom: 0; }
  h1 { font-size: 1.7rem; line-height: 1.3; margin: 4px 0; }
  .col h2, .col .h3 { font-size: 1.2rem; margin: 8px 0 4px; }
  .h4 { font-size: 1.1rem; } .h5 { font-size: 1rem; margin: 12px 0 2px; }
  .lead { font-size: 1.05rem; } .text-muted, .small { color: var(--muted); } .small { font-size: .85rem; }
  .list-unstyled { list-style: none; padding: 0; }
  .o_cc2 { background: color-mix(in srgb, var(--brand) 7%, transparent); border-radius: 8px; padding-inline: 12px; }
  .text-center { text-align: center; }
  .btn { display: inline-block; padding: 8px 18px; border-radius: 999px; background: var(--brand); color: #fff; text-decoration: none; }
  a { color: var(--brand); overflow-wrap: anywhere; }
  p, li { overflow-wrap: anywhere; }
  @media (max-width: 860px) { .cols { grid-template-columns: 1fr; } }
</style>
</head>
<body>
  <div class="top">
    <h1>سياسات متجر Odoo – معاينة قبل التحديث</h1>
    <p>نفس نصوص tmcsmart.com، بصيغة صفحات Odoo. العربي يمين والإنجليزي يسار. تولّد بتاريخ ${generated.slice(0, 10)}.</p>
    <nav>${toc}</nav>
  </div>
  <main>${previewRows}
  </main>
</body>
</html>
`;
writeFileSync(join(outDir, "preview.html"), preview);

console.log(`Wrote ${result.length} pages to ${outDir}`);
for (const page of result) {
  console.log(`  ${page.odoo.action.padEnd(6)} ${page.odoo.url.padEnd(22)} ${page.terms_ar.length} terms`);
}
