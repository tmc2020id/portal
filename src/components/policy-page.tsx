import Link from "next/link";
import { localizeHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { PortalFooter, PortalNav } from "./portal-nav";
import styles from "./policy-page.module.css";

type PolicyPageProps = {
  locale: Locale;
  dict: Dictionary;
};

export function PolicyPage({ locale, dict }: PolicyPageProps) {
  const policy = dict.returnPolicy;

  return (
    <div className={styles.pageShell}>
      <PortalNav locale={locale} nav={dict.nav} />

      <main className={styles.main}>
        <article className={styles.article}>
          <section className={styles.hero}>
            <span className={styles.eyebrow}>{policy.eyebrow}</span>
            <h1>{policy.title}</h1>
            <p className={styles.heroLead}>{policy.lead}</p>

            <div className={styles.summaryGrid}>
              {policy.summary.map((item) => (
                <article key={item.title} className={styles.summaryCard}>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>{policy.statementTitle}</h2>
            <p>{policy.statementBody}</p>
          </section>

          <section className={styles.section}>
            <h2>{policy.conditionsTitle}</h2>
            <ul className={styles.policyList}>
              {policy.conditions.map((condition) => (
                <li key={condition}>{condition}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{policy.noteTitle}</h2>
            <p>{policy.noteBody}</p>
          </section>

          <section className={styles.contactCard}>
            <div>
              <h2>{policy.supportTitle}</h2>
              <p>{policy.supportBody}</p>
            </div>

            <div className={styles.contactActions}>
              <a className={styles.mailLink} href="mailto:sales@tmcsmart.shop">
                sales@tmcsmart.shop
              </a>
              <Link className={styles.contactLink} href={localizeHref(locale, "/contact")}>
                {policy.contactPage}
              </Link>
            </div>
          </section>
        </article>
      </main>

      <PortalFooter locale={locale} nav={dict.nav} />
    </div>
  );
}
