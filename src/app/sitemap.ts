import type { MetadataRoute } from "next";
import { localizeHref } from "@/i18n/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tmcsmart.com";

const routes = [
  "/",
  "/about-us",
  "/products",
  "/services",
  "/special-orders",
  "/contact",
  "/faq",
  "/terms-of-use",
  "/privacy-policy",
  "/return-policy",
];

const absolute = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absolute(localizeHref("ar", route)),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("policy") || route.includes("terms") ? 0.7 : 0.8,
    alternates: {
      languages: {
        ar: absolute(localizeHref("ar", route)),
        en: absolute(localizeHref("en", route)),
      },
    },
  }));
}
