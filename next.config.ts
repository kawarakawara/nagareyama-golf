// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.microcms-assets.io"], // ← microCMSの画像CDNを許可
    unoptimized: false, // ← 最適化を有効に
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
