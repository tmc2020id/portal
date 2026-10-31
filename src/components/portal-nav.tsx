"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { localizeHref, stripLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import styles from "./portal-nav.module.css";

const AI_PORTAL_URL = "https://ai.tmcsmart.com";

type NavProps = {
  locale: Locale;
  nav: Dictionary["nav"];
};

function BrandMark({ alt }: { alt: string }) {
  return (
    <Image
      src="/logo-transparent.png"
      alt={alt}
      className={styles.brandMark}
      width={1024}
      height={597}
      priority
    />
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.sparkIcon}>
      <path d="M12 2.5l1.82 5.18L19 9.5l-5.18 1.82L12 16.5l-1.82-5.18L5 9.5l5.18-1.82L12 2.5z" />
      <path d="M18.5 14.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z" />
      <path d="M5.5 14l.7 1.95 1.95.7-1.95.7-.7 1.95-.7-1.95-1.95-.7 1.95-.7.7-1.95z" />
    </svg>
  );
}

export function PortalNav({ locale, nav }: NavProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";
  const switchHref = localizeHref(otherLocale, stripLocale(pathname));

  return (
    <header className={styles.header}>
      <div className={styles.headerBar}>
        <Link
          className={styles.brand}
          href={localizeHref(locale, "/")}
          aria-label={nav.homeLabel}
        >
          <BrandMark alt={nav.logoAlt} />
        </Link>

        <nav className={styles.desktopNav} aria-label={nav.primaryLabel}>
          {nav.primary.map((item) => {
            const href = localizeHref(locale, item.href);
            const active = pathname === href;

            return (
              <Link
                key={item.href}
                className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                href={href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.utilityActions}>
          <a
            className={styles.aiShortcut}
            href={AI_PORTAL_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={`${nav.aiLabel} (${nav.aiBadge})`}
          >
            <SparkIcon />
            <span className={styles.aiShortcutLabel}>TMC AI</span>
            <span className={styles.aiBadge}>{nav.aiBadge}</span>
          </a>

          <a
            className={styles.localeSwitch}
            href={switchHref}
            hrefLang={otherLocale}
            lang={otherLocale}
            aria-label={nav.switchAriaLabel}
          >
            {nav.switchLabel}
          </a>

          <button
            className={styles.menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-label={nav.toggleLabel}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ""}`}
        aria-label={nav.mobileLabel}
      >
        {nav.primary.map((item) => {
          const href = localizeHref(locale, item.href);
          const active = pathname === href;

          return (
            <Link
              key={item.href}
              className={`${styles.mobileLink} ${active ? styles.mobileLinkActive : ""}`}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
        <a
          className={styles.mobileExternalLink}
          href={AI_PORTAL_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          <SparkIcon />
          <span>TMC AI</span>
          <span className={styles.aiBadge}>{nav.aiBadge}</span>
        </a>
      </nav>
    </header>
  );
}

export function PortalFooter({ locale, nav }: NavProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerPrimary}>
        {nav.primary.map((item) => (
          <Link key={item.href} href={localizeHref(locale, item.href)}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className={styles.footerSecondary}>
        {nav.footer.map((item) => (
          <Link key={item.href} href={localizeHref(locale, item.href)}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
