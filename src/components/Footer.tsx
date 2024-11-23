export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/kenitmehlogo.png" 
              alt="Golden Mehdi Car Logo" 
              className="h-[150px] w-auto mb-4"
            />
            <p className="text-zinc-400">
              Votre partenaire de confiance pour la location de voitures à Kénitra
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Liens Rapides</h3>
            <ul className="space-y-2">
              {['Accueil', 'Nos Véhicules', 'À Propos', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-zinc-400 hover:text-[#FFD700] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="text-zinc-400">Kénitra, Maroc</li>
              <li>
                <a 
                  href="tel:0661811135" 
                  className="text-zinc-400 hover:text-[#FFD700] transition-colors"
                >
                  06 61 81 11 35
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/212661811135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#FFD700] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Golden Mehdi Car. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}