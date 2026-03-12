// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  
  images: {
    unoptimized: true,
  },
  
  // Applique le basePath uniquement quand tu "build" pour GitHub Pages
  basePath: isProd ? "/PorteFolio" : "", 
};

export default nextConfig;