// Visitor analytics for tmcsmart.com: Google Analytics 4 in consent mode, plus
// Umami, our self-hosted cookieless statistics on the Oracle server.
//
// The IDs are public. Override them at build time to test locally, e.g.
//   NEXT_PUBLIC_ANALYTICS_HOSTS=localhost NEXT_PUBLIC_GA_ID= \
//   NEXT_PUBLIC_UMAMI_WEBSITE_ID=<"TMC local test" website id> npm run build
// Event names and parameters are listed in docs/analytics/README.md.

const list = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

export const analyticsConfig = {
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "G-DXDM819BV0",
  umamiSrc: process.env.NEXT_PUBLIC_UMAMI_SRC ?? "https://t.tmcsmart.com/script.js",
  umamiWebsiteId:
    process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ?? "d265a602-820c-4aad-ac9c-450ccbb2953c",
  // Trackers only start on these hostnames, so local and preview builds stay out of the reports.
  hosts: list(process.env.NEXT_PUBLIC_ANALYTICS_HOSTS ?? "tmcsmart.com,www.tmcsmart.com"),
};

export const trackedEvents = [
  "whatsapp_click",
  "phone_click",
  "email_click",
  "store_click",
  "language_switch",
  "special_order_request",
] as const;

export type TrackedEvent = (typeof trackedEvents)[number];

export const isTrackedEvent = (value: string): value is TrackedEvent =>
  (trackedEvents as readonly string[]).includes(value);

type EventData = Record<string, string | number | boolean | undefined>;

type Umami = {
  track: (name: string, data?: Record<string, string | number | boolean>) => void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    umami?: Umami;
  }
}

// Sends one event to both tools. Failures never reach the page.
export function track(name: TrackedEvent, data: EventData = {}) {
  const payload = Object.fromEntries(
    Object.entries(data).filter(([, value]) => value !== undefined && value !== ""),
  ) as Record<string, string | number | boolean>;

  try {
    window.umami?.track(name, payload);
  } catch {}

  try {
    window.gtag?.("event", name, payload);
  } catch {}
}

// ---------- Consent (Google Analytics only; Umami sets no cookies) ----------

const CONSENT_KEY = "tmc-consent";

export type ConsentChoice = "granted" | "denied";
// "pending": no choice yet, "open": the visitor reopened the settings.
export type ConsentState = ConsentChoice | "pending" | "open";

const listeners = new Set<() => void>();
let settingsOpen = false;

export function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function getConsentState(): ConsentState {
  return settingsOpen ? "open" : (readConsent() ?? "pending");
}

export function subscribeConsent(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function notify() {
  listeners.forEach((listener) => listener());
}

// Removes Google Analytics cookies left from an earlier "accept".
function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, ".tmcsmart.com"];

  document.cookie.split(";").forEach((entry) => {
    const name = entry.split("=")[0]?.trim();

    if (!name || !/^_ga(_|$)|^_gid$/.test(name)) {
      return;
    }

    domains.forEach((domain) => {
      const scope = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${scope}`;
    });
  });
}

export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {}

  window.gtag?.("consent", "update", { analytics_storage: choice });

  if (choice === "denied") {
    clearAnalyticsCookies();
  }

  settingsOpen = false;
  notify();
}

export function openConsentSettings() {
  settingsOpen = true;
  notify();
}
