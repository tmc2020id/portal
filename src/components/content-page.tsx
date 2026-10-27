import Link from "next/link";
import { localizeHref, type Locale } from "@/i18n/config";
import type { ContentPageData, Dictionary } from "@/i18n/dictionaries/en";
import { PortalFooter, PortalNav } from "./portal-nav";
import styles from "./content-page.module.css";

type ContentPageProps = {
  locale: Locale;
  dict: Dictionary;
  page: ContentPageData;
};

export function ContentPage({ locale, dict, page }: ContentPageProps) {
  const {
    eyebrow,
    title,
    summary,
    intro,
    metrics,
    highlights,
    spotlightTitle,
    spotlightBody,
    checklistTitle,
    checklist,
    ctaLabel,
    ctaHref,
  } = page;
  const labels = dict.contentPage;

  return (
    <div className={styles.pageShell}>
      <PortalNav locale={locale} nav={dict.nav} />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroAura} aria-hidden="true" />
          <div className={styles.heroCopy}>
            <span>{eyebrow}</span>
            <h1>{title}</h1>
            <p>{summary}</p>
          </div>
          <div className={styles.metricGrid}>
            {metrics.map((metric) => (
              <article key={metric.label} className={styles.metricCard}>
                <strong>{metric.value}</strong>
                <small>{metric.label}</small>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.introSection}>
          <div className={styles.sectionCopy}>
            <span>{labels.overviewEyebrow}</span>
            <h2>{labels.overviewTitle}</h2>
            <p>{intro}</p>
          </div>
        </section>

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

        <section className={styles.spotlightSection}>
          <article className={styles.spotlightCard}>
            <div className={styles.spotlightCopy}>
              <span>{labels.focusEyebrow}</span>
              <h2>{spotlightTitle}</h2>
              <p>{spotlightBody}</p>
            </div>
            <div className={styles.checklistCard}>
              <span>{checklistTitle}</span>
              <ul>
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section className={styles.ctaSection}>
          <article className={styles.ctaCard}>
            <div>
              <span>{labels.nextStepEyebrow}</span>
              <h2>{labels.nextStepTitle}</h2>
            </div>
            <Link href={localizeHref(locale, ctaHref)}>{ctaLabel}</Link>
          </article>
        </section>
      </main>

      <PortalFooter locale={locale} nav={dict.nav} />
    </div>
  );
}
