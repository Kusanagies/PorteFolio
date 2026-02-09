// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  images: {
    unoptimized: true,
  },
  
  // Remplacer 'NomExactDeTonRepo' par le vrai nom (sensible aux Majuscules/minuscules !)
  basePath: "/PorteFolio", 
};

export default nextConfig;