// app/data.ts
import { Github, Linkedin, Mail, FileText, Download } from "lucide-react";

// --- INTERFACES ---

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string; // On gardera des placeholders pour l'instant
  repoUrl?: string;
  reportUrl?: string; // Nouveau champ pour télécharger le rapport PDF du projet
}

export interface Skill {
  name: string;
  category: "Backend" | "Frontend" | "DevOps" | "Data" | "Autre";
  level: number;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: "education" | "work";
}

export interface Document {
  name: string;
  description: string;
  fileUrl: string;
  icon: any;
}

// --- DONNÉES ---

export const personalInfo = {
  name: "Sylvain HUANG",
  title: "Étudiant Master MIAGE & Développeur FullStack",
  description: "Actuellement en Master MIAGE à l'Université Paris Nanterre. Passionné par le développement, le DevOps et les nouvelles technologies. À la recherche d'un stage de 10 semaines début avril 2026.",
  email: "sylvainhuang.pro@gmail.com",
  phone: "+33 7 69 32 15 98",
  location: "Clichy / Nanterre, France",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Emploi du temps intelligent (DevOps)",
    description: "Architecture FullStack avec CI/CD complète. Automatisation des tests et contrôle qualité.",
    technologies: ["Java Spring Boot", "React.js", "GitHub Actions", "SonarQube", "JUnit/Vitest"],
    imageUrl: "/api/placeholder/600/400",
    repoUrl: "https://github.com/ton-pseudo/repo-projet",
    reportUrl: "/documents/rapport-devops.pdf" // Exemple de lien PDF
  },
  {
    id: 2,
    title: "Visualisation d'Algorithmes de Tri",
    description: "Application web interactive comparant différents algorithmes de tri en temps réel.",
    technologies: ["Python", "Flask", "C", "HTML/CSS"],
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "Recherche de Tables Similaires",
    description: "Site web interactif pour la recherche de données similaires avec analyse graphique.",
    technologies: ["Python", "Flask", "Pandas", "Data Science"],
    imageUrl: "/api/placeholder/600/400",
  }
];

export const skills: Skill[] = [
  { name: "Java / Spring", category: "Backend", level: 85 },
  { name: "Python / Django / Flask", category: "Backend", level: 90 },
  { name: "React.js / Next.js", category: "Frontend", level: 80 },
  { name: "SQL (MySQL, Oracle)", category: "Data", level: 85 },
  { name: "DevOps (CI/CD, Docker)", category: "DevOps", level: 75 },
  { name: "Linux / Bash", category: "DevOps", level: 80 },
];

export const timeline: ExperienceItem[] = [
  {
    id: 1,
    role: "Master MIAGE",
    company: "Université Paris Nanterre",
    period: "2025 - Présent",
    description: ["Méthodes Informatiques Appliquées à la Gestion des Entreprises"],
    type: "education"
  },
  {
    id: 2,
    role: "Moniteur de Salle Informatique",
    company: "Université Paris Nanterre",
    period: "2025 - 2026",
    description: [
      "Gestion des demandes helpdesk",
      "Supervision des salles en libre service",
      "Préparation des postes de travail"
    ],
    type: "work"
  },
  {
    id: 3,
    role: "Licence MIAGE",
    company: "Université Paris Nanterre",
    period: "2021 - 2025",
    description: ["Formation généraliste en informatique et gestion"],
    type: "education"
  },
  {
    id: 4,
    role: "Serveur",
    company: "SARL TOYAMAH",
    period: "2022 - 2025",
    description: ["Gestion de stocks", "Relation client", "Travail en équipe sous pression"],
    type: "work"
  }
];

export const downloadableDocs: Document[] = [
  {
    name: "CV - Sylvain HUANG",
    description: "Format PDF, complet et imprimable.",
    fileUrl: "/PorteFolio/Huang sylvain-4.pdf",    icon: FileText
  },
  {
    name: "Dossier TP Odoo",
    description: "Exemple de rapport technique.",
    fileUrl: "/PorteFolio/TP Odoo.pdf", // Ton autre fichier
    icon: FileText
  }
];

export const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];