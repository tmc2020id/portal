import Link from "next/link";
import { PortalFooter, PortalNav } from "./portal-nav";
import styles from "./content-page.module.css";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  intro: string;
  metrics: Array<{ value: string; label: string }>;
  highlights: Array<{ title: string; body: string }>;
  spotlightTitle: string;
  spotlightBody: string;
  checklistTitle: string;
  checklist: string[];
  ctaLabel: string;
  ctaHref: string;
};

export function ContentPage({
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
}: ContentPageProps) {
  return (
    <div className={styles.pageShell}>
      <PortalNav />

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
            <span>Overview</span>
            <h2>Built from the current ERP presence</h2>
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
              <span>Focus</span>
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
              <span>Next step</span>
              <h2>Continue deeper into the TMC SMART experience</h2>
            </div>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </article>
        </section>
      </main>

      <PortalFooter />
    </div>
  );
}
