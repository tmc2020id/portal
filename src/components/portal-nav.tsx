"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { footerNavigation, primaryNavigation } from "@/data/site-pages";
import styles from "./portal-nav.module.css";

const AI_PORTAL_URL = "https://ai.tmcsmart.com";

function BrandMark() {
  return (
    <Image
      src="/logo-transparent.png"
      alt="TMC SMART Logo"
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

export function PortalNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerBar}>
        <Link className={styles.brand} href="/" aria-label="TMC SMART home">
          <BrandMark />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {primaryNavigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
                href={item.href}
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
            aria-label="Open TMC AI"
          >
            <SparkIcon />
            <span className={styles.aiShortcutLabel}>TMC AI</span>
          </a>

          <button
            className={styles.menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
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
        aria-label="Mobile"
      >
        {primaryNavigation.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              className={`${styles.mobileLink} ${active ? styles.mobileLinkActive : ""}`}
              href={item.href}
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
        </a>
      </nav>
    </header>
  );
}

export function PortalFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerPrimary}>
        {primaryNavigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className={styles.footerSecondary}>
        {footerNavigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
