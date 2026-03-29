import { certifications } from "@/app/data";
import { Download, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Certifications & Attestations</h2>
        <p className="mb-10 text-gray-600 max-w-2xl mx-auto">
          Retrouvez ici mes certifications récentes, attestant de mes compétences en cybersécurité et gestion des risques.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all text-left flex items-start space-x-4">
              <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                <cert.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{cert.description}</p>
                <a 
                  href={cert.fileUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {cert.fileUrl.endsWith('.png') ? (
                    <ExternalLink size={16} className="mr-2" />
                  ) : (
                    <Download size={16} className="mr-2" />
                  )}
                  Consulter
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}