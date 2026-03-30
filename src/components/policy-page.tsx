import Link from "next/link";
import { PortalFooter, PortalNav } from "./portal-nav";
import styles from "./policy-page.module.css";

export function PolicyPage() {
  return (
    <div className={styles.pageShell}>
      <PortalNav />

      <main className={styles.main}>
        <article className={styles.article}>
          <section className={styles.hero}>
            <span className={styles.eyebrow}>Return Policy</span>
            <h1>Return policy written for clarity, trust, and crawler-friendly indexing</h1>
            <p className={styles.heroLead}>
              This page presents TMC&apos;s return policy in a stable, readable format
              designed to fit the TMC SMART experience while staying easy for search
              engines and policy crawlers to parse.
            </p>

            <div className={styles.summaryGrid}>
              <article className={styles.summaryCard}>
                <strong>All sales are final</strong>
                <span>
                  Orders are not eligible for return or exchange after completion and
                  delivery.
                </span>
              </article>

              <article className={styles.summaryCard}>
                <strong>24-hour defect notice</strong>
                <span>
                  Defective or damaged items must be reported within 24 hours of
                  receipt.
                </span>
              </article>

              <article className={styles.summaryCard}>
                <strong>Original packaging required</strong>
                <span>
                  Approved defect-based exchanges require original packaging and all
                  included accessories.
                </span>
              </article>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Policy statement</h2>
            <p>
              At TMC (Technology Metro Company), we strive to provide high-quality
              technical solutions and products. To keep expectations clear for
              customers, partners, and procurement teams, the return policy below
              applies to orders placed through our channels.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Return conditions</h2>
            <ul className={styles.policyList}>
              <li>
                All sales are final. TMC does not accept returns or exchanges once an
                order has been completed and delivered.
              </li>
              <li>
                Returns or exchanges are only considered when an item arrives
                defective or damaged.
              </li>
              <li>
                Customers must notify TMC within 24 hours of receiving a defective or
                damaged item.
              </li>
              <li>
                To qualify for an exchange because of a defect, the product must
                remain in its original packaging and include all accessories.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Operational note</h2>
            <p>
              This policy page is intentionally delivered as stable, semantic content
              with clear headings and list structure so the legal content remains easy
              to read for both visitors and indexing systems. It complements the more
              interactive areas of the site without depending on motion-heavy
              presentation.
            </p>
          </section>

          <section className={styles.contactCard}>
            <div>
              <h2>Need support about an order?</h2>
              <p>
                For questions related to defects, damaged deliveries, or policy
                clarification, contact the TMC support team through the official sales
                inbox.
              </p>
            </div>

            <div className={styles.contactActions}>
              <a className={styles.mailLink} href="mailto:sales@tmcsmart.shop">
                sales@tmcsmart.shop
              </a>
              <Link className={styles.contactLink} href="/contact">
                Contact page
              </Link>
            </div>
          </section>
        </article>
      </main>

      <PortalFooter />
    </div>
  );
}
