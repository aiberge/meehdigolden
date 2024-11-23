import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-neutral-900/95 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <img 
              src="/kenitmehlogo.png" 
              alt="Golden Mehdi Car Logo" 
              className="h-[150px] w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Accueil</a>
            <a href="#cars" className="nav-link">Véhicules</a>
            <a href="#about" className="nav-link">À Propos</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a 
              href="tel:0661811135" 
              className="flex items-center space-x-2 px-4 py-2 glass-card rounded-none text-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>06 61 81 11 35</span>
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-400 hover:text-[#FFD700] transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-neutral-900/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 nav-link">Accueil</a>
            <a href="#cars" className="block px-3 py-2 nav-link">Véhicules</a>
            <a href="#about" className="block px-3 py-2 nav-link">À Propos</a>
            <a href="#contact" className="block px-3 py-2 nav-link">Contact</a>
            <a 
              href="tel:0661811135"
              className="block px-3 py-2 text-[#FFD700] hover:text-[#FFC000] transition-colors"
            >
              <Phone className="h-4 w-4 inline mr-2" />
              06 61 81 11 35
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}