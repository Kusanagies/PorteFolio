// app/data.ts
import { Github, Linkedin, Mail } from "lucide-react";

// 1. Définition des Interfaces (La puissance de TypeScript)
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 1 à 100
}

// 2. Les Données (Simulées pour l'exemple)
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Une application de gestion de stock avec graphiques en temps réel.",
    technologies: ["React", "TypeScript", "Tailwind", "Recharts"],
    imageUrl: "/api/placeholder/600/400", // Placeholder
    repoUrl: "https://github.com",
  },
  {
    id: 2,
    title: "App de Chat IA",
    description: "Interface de chat connectée à l'API OpenAI.",
    technologies: ["Next.js", "OpenAI API", "Vercel SDK"],
    imageUrl: "/api/placeholder/600/400",
    demoUrl: "https://demo.com",
  },
];

export const skills: Skill[] = [
  { name: "TypeScript", level: 90 },
  { name: "React / Next.js", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "Tailwind CSS", level: 95 },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:tonemail@gmail.com", label: "Email" },
];