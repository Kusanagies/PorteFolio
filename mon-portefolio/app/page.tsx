// app/page.tsx
import Header from "@/app/components/header"; // Vérifie si le dossier s'appelle 'components' avec majuscule ou minuscule
import Hero from "@/app/components/hero";
import Projects from "@/app/components/projects";
import Timeline from "@/app/components/Timeline";
import Downloads from "@/app/components/Downloads";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <Header />
      
      <div className="flex flex-col">
        <Hero />
        
        <Timeline />
        
        <Projects />
        
        <Downloads />
        
        <section id="contact" className="py-20 bg-gray-50 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>
            <p className="text-gray-600 mb-8">
              Je suis joignable par mail ou téléphone pour discuter de mon stage d'avril 2026.
            </p>
            <a 
              href="mailto:sylvainhuang.pro@gmail.com"
              className="inline-block px-8 py-4 bg-gray-900 text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
            >
              sylvainhuang.pro@gmail.com
            </a>
          </div>
        </section>

        <footer className="py-8 text-center text-gray-400 text-sm border-t bg-white">
          © {new Date().getFullYear()} Sylvain HUANG. Construit avec Next.js, Tailwind & TypeScript.
        </footer>
      </div>
    </main>
  );
}