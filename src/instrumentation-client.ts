// Starts Google Analytics (consent mode) and Umami before hydration, and turns
// clicks on contact, store and language links into events. See lib/analytics.ts.
import { analyticsConfig, isTrackedEvent, readConsent, track } from "./lib/analytics";

const STORE_HOST = "erp.tmcsmart.com";
const WHATSAPP_HOSTS = ["wa.me", "api.whatsapp.com", "web.whatsapp.com", "chat.whatsapp.com"];

function loadScript(src: string, attributes: Record<string, string> = {}) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  Object.entries(attributes).forEach(([name, value]) => script.setAttribute(name, value));
  document.head.appendChild(script);
}

function startGoogleAnalytics(gaId: string) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };

  // Analytics cookies wait for the banner; advertising stays off on this site.
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: readConsent() === "granted" ? "granted" : "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", gaId);
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`);
}

// Where on the page a link sits, e.g. "header", "hero", "product_grid", "floating".
function placementOf(element: Element) {
  const marked = element.closest("[data-track-placement]");

  if (marked) {
    return marked.getAttribute("data-track-placement") ?? undefined;
  }

  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";

  return element.closest("section[id]")?.id || "main";
}

// data-track-from-lang="ar" -> { from_lang: "ar" }
function extraData(element: Element) {
  const data: Record<string, string> = {};

  for (const name of element.getAttributeNames()) {
    if (name.startsWith("data-track-") && name !== "data-track-placement") {
      data[name.slice("data-track-".length).replace(/-/g, "_")] = element.getAttribute(name) ?? "";
    }
  }

  return data;
}

const digits = (value: string) => value.replace(/\D/g, "");

// The campaign a visitor landed with. Kept in memory only (nothing is stored on
// the device) and added to store links, so Odoo can credit orders to it.
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
let landingUtm: [string, string][] = [];

function rememberLandingUtm() {
  const params = new URLSearchParams(window.location.search);
  landingUtm = UTM_KEYS.flatMap((key) => {
    const value = params.get(key);
    return value ? [[key, value] as [string, string]] : [];
  });
}

function carryUtm(link: HTMLAnchorElement, url: URL) {
  if (!landingUtm.length || UTM_KEYS.some((key) => url.searchParams.has(key))) {
    return;
  }

  landingUtm.forEach(([key, value]) => url.searchParams.set(key, value));
  link.href = url.toString();
}

function onClick(event: MouseEvent) {
  const target = event.target instanceof Element ? event.target : null;
  const element = target?.closest("a[href], [data-track]");

  if (!element) {
    return;
  }

  const placement = placementOf(element);
  const named = element.getAttribute("data-track");

  if (named && isTrackedEvent(named)) {
    track(named, { placement, ...extraData(element) });
    return;
  }

  if (!(element instanceof HTMLAnchorElement)) {
    return;
  }

  let url: URL;

  try {
    url = new URL(element.href, window.location.href);
  } catch {
    return;
  }

  if (url.protocol === "tel:") {
    track("phone_click", { placement, number: digits(url.pathname) });
  } else if (url.protocol === "mailto:") {
    track("email_click", { placement });
  } else if (url.protocol === "whatsapp:" || WHATSAPP_HOSTS.includes(url.hostname)) {
    const number = url.hostname === "wa.me" ? url.pathname : (url.searchParams.get("phone") ?? "");
    track("whatsapp_click", { placement, number: digits(number) });
  } else if (url.hostname === STORE_HOST) {
    track("store_click", { placement, link_path: url.pathname });
    carryUtm(element, url);
  }
}

function start() {
  const { gaId, umamiSrc, umamiWebsiteId, hosts } = analyticsConfig;

  if (!hosts.includes(window.location.hostname)) {
    return;
  }

  if (gaId) {
    startGoogleAnalytics(gaId);
  }

  if (umamiSrc && umamiWebsiteId) {
    loadScript(umamiSrc, {
      defer: "",
      "data-website-id": umamiWebsiteId,
      "data-domains": hosts.join(","),
      // Lets Umami split the reports by page language.
      "data-tag": document.documentElement.lang || "ar",
    });
  }

  rememberLandingUtm();
  document.addEventListener("click", onClick, true);
}

try {
  start();
} catch {}
