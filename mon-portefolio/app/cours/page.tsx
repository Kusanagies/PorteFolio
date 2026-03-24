import { courseFiles } from "@/app/data";
import { Download, BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/app/components/header";

export default function CoursPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Retour au Portfolio
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Ressources & Cours</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Retrouvez ici l'ensemble de mes fiches de cours, TD et documents d'étude téléchargeables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseFiles.map((doc, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all text-left flex items-start space-x-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg flex-shrink-0">
                  <BookOpen size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg mb-3">{doc.name}</h3>
                  <a 
                    href={doc.fileUrl} 
                    download
                    className="inline-flex items-center text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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
    </main>
  );
}