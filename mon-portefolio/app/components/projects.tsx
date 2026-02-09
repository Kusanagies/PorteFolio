// app/components/projects.tsx
import { projects, Project } from "@/app/data";
import { Github, FileText } from "lucide-react"; // On remplace ExternalLink par FileText
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
    <div className="relative h-48 w-full bg-gray-200 shrink-0">
      <Image 
        src={project.imageUrl} 
        alt={project.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 text-sm flex-grow">{project.description}</p>
      
      {/* Liste des technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-md">
            {tech}
          </span>
        ))}
      </div>

      {/* Liens (Code et Rapport) */}
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
        {project.repoUrl ? (
          <a 
            href={project.repoUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-black transition-colors text-sm font-medium"
          >
            <Github size={16} className="mr-2" /> Code Source
          </a>
        ) : (
          <span className="text-gray-400 text-sm flex items-center cursor-not-allowed">
            <Github size={16} className="mr-2" /> Privé
          </span>
        )}

        {/* Remplacement de DemoUrl par ReportUrl (PDF) */}
        {project.reportUrl && (
          <a 
            href={project.reportUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-red-600 hover:text-red-800 transition-colors text-sm font-medium"
          >
            <FileText size={16} className="mr-2" /> Lire le rapport
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
        <h2 className="text-3xl font-bold text-center mb-12">Projets Académiques & Personnels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}