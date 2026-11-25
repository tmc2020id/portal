import { IBM_Plex_Sans_Arabic, Outfit } from "next/font/google";

// Shared by the [lang] layout and the global 404 page.
export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Arabic pages put Plex first (see globals.css): Outfit's generated Arial
// fallback has Arabic glyphs and would otherwise shadow Plex.
export const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});
