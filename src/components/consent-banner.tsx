"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { localizeHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import {
  getConsentState,
  openConsentSettings,
  saveConsent,
  subscribeConsent,
  type ConsentState,
} from "@/lib/analytics";
import styles from "./consent-banner.module.css";

type Labels = Dictionary["consent"];

// The server never knows the choice, so the banner only appears after hydration.
const serverState = (): ConsentState => "granted";

export function ConsentBanner({ locale, labels }: { locale: Locale; labels: Labels }) {
  const state = useSyncExternalStore(subscribeConsent, getConsentState, serverState);

  if (state !== "pending" && state !== "open") {
    return null;
  }

  return (
    <aside className={styles.banner} aria-label={labels.title}>
      <p>
        {labels.body}{" "}
        <Link href={localizeHref(locale, "/cookie-policy")}>{labels.link}</Link>
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.decline} onClick={() => saveConsent("denied")}>
          {labels.decline}
        </button>
        <button type="button" className={styles.accept} onClick={() => saveConsent("granted")}>
          {labels.accept}
        </button>
      </div>
    </aside>
  );
}

// Lets visitors change their choice later, from the cookie policy page.
export function ConsentSettingsButton({ label }: { label: string }) {
  return (
    <section className={styles.settingsSection}>
      <button type="button" className={styles.settingsButton} onClick={openConsentSettings}>
        {label}
      </button>
    </section>
  );
}
