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
  reportUrl?: string; 
  liveUrl?: string;
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
    repoUrl: "https://github.com/uciie/DevOps1_EDT_Intelligent",
    reportUrl: "/PorteFolio/rapport-devops.pdf" 
  },
  {
    id: 2,
    title: "Visualisation d'Algorithmes de Tri",
    description: "Application web interactive comparant différents algorithmes de tri en temps réel.",
    technologies: ["Python", "Flask", "C", "HTML/CSS"],
    repoUrl:"https://github.com/Kusanagies/ProjetInformatiqueL2S1"
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "Recherche de Tables Similaires",
    description: "Site web interactif pour la recherche de données similaires avec analyse graphique.",
    technologies: ["Python", "Flask", "Pandas", "Data Science"],
    repoUrl: "https://github.com/Kusanagies/ProjetStage",
    imageUrl: "/api/placeholder/600/400",
  },
  {
    id: 4,
    title: "CRM SaaS (Front-End)",
    description: "Interface d'une application de gestion de relation client (CRM) conçue pour un modèle SaaS.",
    technologies: ["Python", "Django", "Tailwind CSS"], 
    imageUrl: "/api/placeholder/600/400",
    liveUrl: "https://projetcrmfront.vercel.app/",
    reportUrl:"/PorteFolio/RapportCRM.pdf"
  }
];

export const skills: Skill[] = [
  { name: "Java / Spring", category: "Backend", level: 85 },
  { name: "Python / Django / Flask", category: "Backend", level: 90 },
  { name: "React.js / Next.js", category: "Frontend", level: 80 },
  { name: "SQL (MySQL, Oracle)", category: "Data", level: 90 },
  { name: "DevOps (CI/CD, Docker)", category: "DevOps", level: 75 },
  { name: "Linux / Bash", category: "DevOps", level: 90 },
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
    fileUrl: "/PorteFolio/CV_Sylvain_Huang.pdf",    icon: FileText
  }
  
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/kusanagies", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sylvain-huang-48705b208/", label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export const courseFiles = [
  { 
    name: "1- Fiche cours V_E", 
    fileUrl: "/PorteFolio/1- fiche cours V_E.odt" 
  },
  { 
    name: "2- Pourquoi Étudier le funnel marketing", 
    fileUrl: "/PorteFolio/2- Pourquoi Étudier le funnel marketing V_E.odt" 
  },
  { 
    name: "3- Création de funnel marketing", 
    fileUrl: "/PorteFolio/3- création de funnel marketing.docx" 
  },
  { 
    name: "4- Les indicateurs KPI", 
    fileUrl: "/PorteFolio/4_ Les indicateurs KPI V_E.odt" 
  },
  { 
    name: "5- Étude de cas KPI", 
    fileUrl: "/PorteFolio/5- Étude de cas KPI.odt" 
  },
  { 
    name: "6- TD + QCM pour étudiants", 
    fileUrl: "/PorteFolio/6- Td + QCM pour étudiants.odt" 
  },
  { 
    name: "7- Sujet blanc", 
    fileUrl: "/PorteFolio/7- sujet blanc.odt" 
  },
  { 
    name: "TP KPI", 
    fileUrl: "/PorteFolio/tp KPI V_E.ods" 
  },
  {
    name:"TP ODOO",
    fileUrl:"/PorteFolio/TP_Odoo.pdf"
  }
];