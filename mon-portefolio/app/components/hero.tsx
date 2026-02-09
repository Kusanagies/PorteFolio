import { socialLinks } from "@/app/data";

export default function Hero() {
  return (
    <section id="accueil" className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
        Développeur <span className="text-blue-600">Front-End</span>
        <br /> & Créatif.
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-10">
        Je conçois des expériences numériques exceptionnelles en utilisant les dernières technologies web. Spécialisé en React et TypeScript.
      </p>
      
      <div className="flex space-x-6">
        {socialLinks.map((social, index) => (
          <a 
            key={index} 
            href={social.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-all transform hover:scale-110"
            aria-label={social.label}
          >
            <social.icon size={24} />
          </a>
        ))}
      </div>
    </section>
  );
}