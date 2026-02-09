import { downloadableDocs } from "@/app/data";
import { Download } from "lucide-react";

export default function Downloads() {
  return (
    <section id="documents" className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Documents Téléchargeables</h2>
        <p className="mb-10 text-blue-100 max-w-2xl mx-auto">
          Retrouvez ici mon CV au format PDF ainsi que des rapports techniques détaillant mes projets académiques.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloadableDocs.map((doc) => (
            <div key={doc.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all text-left flex items-start space-x-4">
              <div className="p-3 bg-white text-blue-600 rounded-lg">
                <doc.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{doc.name}</h3>
                <p className="text-blue-100 text-sm mb-4">{doc.description}</p>
                <a 
                  href={doc.fileUrl} 
                  download
                  className="inline-flex items-center text-sm font-semibold bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Download size={16} className="mr-2" />
                  Télécharger
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}