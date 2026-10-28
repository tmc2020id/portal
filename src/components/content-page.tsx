import type { Metadata } from "next";
import Link from "next/link";
import { localizeHref, type Locale } from "@/i18n/config";
import { resolveLocale } from "@/i18n/dictionaries";
import type { ContentPageData, Dictionary, PageKey } from "@/i18n/dictionaries/en";
import { PortalFooter, PortalNav } from "./portal-nav";
import styles from "./content-page.module.css";

type ContentPageProps = {
  locale: Locale;
  dict: Dictionary;
  page: ContentPageData;
};

export async function contentPageMetadata(
  params: Promise<{ lang: string }>,
  key: PageKey,
): Promise<Metadata> {
  const { dict } = await resolveLocale(params);
  const page: ContentPageData = dict.pages[key];

  return { title: page.metaTitle, description: page.summary };
}

export function ContentPage({ locale, dict, page }: ContentPageProps) {
  const {
    eyebrow,
    title,
    summary,
    metrics,
    introTitle,
    intro,
    highlights,
    spotlight,
    sections,
    ctaTitle,
    ctaLabel,
    ctaHref,
  } = page;
  const labels = dict.contentPage;

  return (
    <div className={styles.pageShell}>
      <PortalNav locale={locale} nav={dict.nav} />

      <main className={styles.main}>
        <section className={`${styles.hero} ${metrics.length ? "" : styles.heroCompact}`}>
          <div className={styles.heroAura} aria-hidden="true" />
          <div className={styles.heroCopy}>
            <span>{eyebrow}</span>
            <h1>{title}</h1>
            <p>{summary}</p>
          </div>
          {metrics.length ? (
            <div className={styles.metricGrid}>
              {metrics.map((metric) => (
                <article key={metric.label} className={styles.metricCard}>
                  {/* Isolated so phone numbers keep their order on RTL pages. */}
                  <strong>
                    <bdi>{metric.value}</bdi>
                  </strong>
                  <small>{metric.label}</small>
                </article>
              ))}
            </div>
          ) : null}
        </section>

        {sections?.map((section) => (
          <section key={section.title} className={styles.entrySection}>
            <h2>{section.title}</h2>
            <div className={styles.entryGrid}>
              {section.items.map((item) => (
                <article key={item.title} className={styles.entryCard}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className={styles.introSection}>
          <div className={styles.sectionCopy}>
            <span>{labels.overviewEyebrow}</span>
            <h2>{introTitle}</h2>
            <p>{intro}</p>
          </div>
        </section>

        {highlights.length ? (
          <section className={styles.highlightSection}>
            <div className={styles.highlightGrid}>
              {highlights.map((item) => (
                <article key={item.title} className={styles.highlightCard}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {spotlight ? (
          <section className={styles.spotlightSection}>
            <article className={styles.spotlightCard}>
              <div className={styles.spotlightCopy}>
                <span>{labels.focusEyebrow}</span>
                <h2>{spotlight.title}</h2>
                <p>{spotlight.body}</p>
              </div>
              <div className={styles.checklistCard}>
                <span>{spotlight.listTitle}</span>
                <ul>
                  {spotlight.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </section>
        ) : null}

        <section className={styles.ctaSection}>
          <article className={styles.ctaCard}>
            <div>
              <span>{labels.nextStepEyebrow}</span>
              <h2>{ctaTitle}</h2>
            </div>
            <Link href={localizeHref(locale, ctaHref)}>{ctaLabel}</Link>
          </article>
        </section>
      </main>

      <PortalFooter locale={locale} nav={dict.nav} />
    </div>
  );
}
