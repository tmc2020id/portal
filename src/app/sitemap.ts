import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tmcsmart.com";

const routes = [
  "",
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

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("policy") || route.includes("terms") ? 0.7 : 0.8,
  }));
}
