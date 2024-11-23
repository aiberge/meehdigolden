import { useState, useMemo } from 'react';
import { Users, Fuel, Cog, X } from 'lucide-react';
import CarFilters from './CarFilters';

const cars = [
  {
    id: 1,
    name: 'Range Rover Velar',
    image: '/range.jpg',
    specs: {
      passengers: '5',
      transmission: 'Automatique', 
      fuel: 'Diesel'
    },
    price: 1400,
    type: 'SUV',
    category: 'Premium'
  },
  {
    id: 2,
    name: 'Volkswagen T-Roc',
    image: '/te.jpg',
    specs: {
      passengers: '5',
      transmission: 'Automatique',
      fuel: 'Diesel'
    },
    price: 1200,
    type: 'SUV'
  },
  {
    id: 3,
    name: 'Volkswagen Golf 8',
    image: '/8.jpg',
    specs: {
      passengers: '5',
      transmission: 'Automatique',
      fuel: 'Diesel'
    },
    price: 800,
    type: 'Berline'
  },
  {
    id: 4,
    name: 'Dacia Duster',
    image: '/duster.jpg',
    specs: {
      passengers: '5',
      transmission: 'Manuelle',
      fuel: 'Diesel'
    },
    price: 500,
    type: 'SUV'
  },
  {
    id: 5,
    name: 'Peugeot 208',
    image: '/208.jpeg',
    specs: {
      passengers: '5',
      transmission: 'Manuelle',
      fuel: 'Diesel'
    },
    price: 250,
    type: 'Citadine'
  },
  {
    id: 6,
    name: 'Renault Clio 5',
    image: '/clio24.jpg',
    specs: {
      passengers: '5',
      transmission: 'Manuelle',
      fuel: 'Diesel'
    },
    price: 400,
    type: 'Citadine'
  },
  {
    id: 7,
    name: 'Dacia Sandero Stepway',
    image: '/stepway.webp',
    specs: {
      passengers: '5',
      transmission: 'Manuelle',
      fuel: 'Diesel'
    },
    price: 300,
    type: 'Citadine'
  },
  {
    id: 8,
    name: 'Dacia Logan',
    image: '/logan.webp',
    specs: {
      passengers: '5',
      transmission: 'Manuelle',
      fuel: 'Diesel'
    },
    price: 350,
    type: 'Berline'
  },
  {
    id: 9,
    name: 'Citroen C-Elysée',
    image: '/Clise.jpg',
    specs: {
      passengers: '5',
      transmission: 'Manuelle',
      fuel: 'Diesel'
    },
    price: 350,
    type: 'Berline'
  }
];

export default function FeaturedCars() {
  const [priceRange, setPriceRange] = useState('');
  const [carType, setCarType] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      let matchesPrice = true;
      let matchesType = true;

      if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        if (max) {
          matchesPrice = car.price >= min && car.price <= max;
        } else {
          matchesPrice = car.price >= min;
        }
      }

      if (carType) {
        matchesType = car.type === carType;
      }

      return matchesPrice && matchesType;
    });
  }, [priceRange, carType]);

  return (
    <section id="cars" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#FFD700]">Notre Collection</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Une sélection raffinée de véhicules pour tous vos besoins
          </p>
        </div>

        <CarFilters 
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          carType={carType}
          setCarType={setCarType}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div 
              key={car.id} 
              className="group relative bg-neutral-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[#FFD700]/20 hover:shadow-2xl"
              onClick={() => setSelectedImage(car.image)}
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#FFD700] text-black px-4 py-1 rounded-full font-semibold">
                    {car.price} DH/jour
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#FFD700] transition-colors">
                  {car.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-white/80">
                    <Users className="h-5 w-5 mr-3 text-[#FFD700]" />
                    <span>{car.specs.passengers} places</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Cog className="h-5 w-5 mr-3 text-[#FFD700]" />
                    <span>{car.specs.transmission}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Fuel className="h-5 w-5 mr-3 text-[#FFD700]" />
                    <span>{car.specs.fuel}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-700">
                  <a
                    href={`https://wa.me/212661811135?text=Je suis intéressé par la ${car.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#FFC000] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Réserver
                  </a>
                </div>
              </div>

              {car.category === 'Premium' && (
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm text-[#FFD700] px-3 py-1 rounded-full text-sm font-medium">
                    Premium
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Car preview"
                className="w-full h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}