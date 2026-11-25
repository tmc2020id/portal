import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { outfit, plexArabic } from "./fonts";
import styles from "./global-not-found.module.css";
import "./globals.css";

// Any URL the site doesn't have. The root layout sits under [lang], so this
// page can't know the language: Arabic first, with one English line.
export const metadata: Metadata = {
  title: "الصفحة غير موجودة | TMC SMART",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl" className={`${outfit.variable} ${plexArabic.variable}`}>
      <body>
        <main className={styles.page}>
          <Link href="/" className={styles.brand}>
            <Image
              src="/logo-transparent.png"
              alt="TMC SMART"
              width={1024}
              height={601}
              priority
              className={styles.logo}
            />
          </Link>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>الصفحة غير موجودة</h1>
          <p className={styles.body}>ربما تغيّر الرابط أو فيه خطأ.</p>
          <div className={styles.actions}>
            <Link href="/" className={styles.primary}>
              الصفحة الرئيسية
            </Link>
            <Link href="/products" className={styles.secondary}>
              المنتجات
            </Link>
          </div>
          <p className={styles.english} lang="en" dir="ltr">
            Page not found. <Link href="/en">Go to the English homepage</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
