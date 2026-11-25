import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "standalone",
  experimental: {
    // The root layout lives under app/[lang], so unknown URLs use
    // app/global-not-found.tsx instead of Next's plain English 404.
    globalNotFound: true,
  },
};

export default nextConfig;
