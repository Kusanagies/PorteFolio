import { projects, Project } from "@/app/data";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

// Composant Carte individuel (Bonne pratique : découper les composants)
const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
    <div className="relative h-48 w-full bg-gray-200">
      {/* Utilisation de next/image pour l'optimisation */}
      <Image 
        src={project.imageUrl} 
        alt={project.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 h-12 overflow-hidden">{project.description}</p>
      
      {/* Liste des technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md">
            {tech}
          </span>
        ))}
      </div>

      {/* Liens */}
      <div className="flex justify-between items-center">
        {project.repoUrl && (
          <a href={project.repoUrl} className="flex items-center text-gray-600 hover:text-black transition-colors text-sm font-medium">
            <Github size={16} className="mr-2" /> Code
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
            <ExternalLink size={16} className="mr-2" /> Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projets" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Mes Projets Récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}