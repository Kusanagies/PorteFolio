import Link from 'next/link';

export default function Header() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 top-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 font-bold text-2xl text-blue-600">
            MonPortfolio.
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Liens redirigeant vers la page d'accueil avec ancre */}
              {['Accueil', 'Projets', 'Compétences', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  // On force le "/" devant l'ancre pour que ça marche depuis la page cours
                  href={item === 'Accueil' ? '/' : `/#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </Link>
              ))}
              
              {/* Nouveau lien vers la page de cours */}
              <Link 
                href="/cours"
                className="text-blue-600 font-bold hover:text-blue-800 px-3 py-2 rounded-md text-sm transition-colors border border-blue-600 hover:bg-blue-50"
              >
                Mes Cours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}