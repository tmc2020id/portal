import type { MetadataRoute } from "next";

// Name and icon when a visitor adds the site to a phone's home screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TMC SMART",
    short_name: "TMC SMART",
    description: "معدات الشبكات وأنظمة الحماية والسيرفرات",
    lang: "ar",
    dir: "rtl",
    start_url: "/",
    display: "browser",
    background_color: "#fbfbfa",
    theme_color: "#fbfbfa",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
