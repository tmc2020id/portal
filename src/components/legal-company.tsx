import type { Dictionary } from "@/i18n/dictionaries/en";
import styles from "./legal-company.module.css";

// Who issues the policies. Platform reviewers (Meta, Google, payment
// providers) look for the legal name, address and contact on these pages.
export function LegalCompany({ legal }: { legal: Dictionary["legal"] }) {
  return (
    <div className={styles.card}>
      <div className={styles.copy}>
        <span>{legal.companyEyebrow}</span>
        <h2>
          <bdi>{legal.companyTitle}</bdi>
        </h2>
        <p>{legal.companyNote}</p>
      </div>
      <dl className={styles.details}>
        {legal.company.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>
              <bdi>{item.href ? <a href={item.href}>{item.value}</a> : item.value}</bdi>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
