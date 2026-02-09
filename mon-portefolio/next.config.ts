// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Force la génération statique (HTML/CSS/JS uniquement)
  output: "export",
  
  // 2. Désactive l'optimisation d'image serveur (GitHub Pages ne supporte pas le serveur d'image Next.js)
  images: {
    unoptimized: true,
  },
  
  // 3. (OPTIONNEL) Si ton repo ne s'appelle PAS "ton-nom.github.io" mais "mon-portfolio"
  // Décommente la ligne ci-dessous et remplace par le nom de ton repo
  // basePath: "/mon-portfolio",
};

export default nextConfig;