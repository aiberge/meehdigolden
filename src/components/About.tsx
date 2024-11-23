import { Shield, Clock, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#FFD700]">Notre Histoire</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            L'excellence dans la location automobile à Kénitra
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: 'Fiabilité',
              description: 'Des véhicules régulièrement entretenus pour votre sécurité'
            },
            {
              icon: Clock,
              title: 'Service 24/7',
              description: 'Une équipe à votre écoute au 0661811135'
            },
            {
              icon: Award,
              title: 'Qualité Premium',
              description: 'Une flotte haut de gamme pour votre confort'
            }
          ].map((feature, index) => (
            <div key={index} className="glass-card rounded-xl p-6 text-center transform hover:scale-105 transition duration-300">
              <div className="inline-block p-4 rounded-full mb-4 bg-[#FFD700]/10">
                <feature.icon className="h-8 w-8 text-[#FFD700]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-zinc-300 mb-6">
              Depuis notre création, <span className="text-[#FFD700] font-bold">Golden Mehdi Car</span> s'est engagé à fournir des services de location 
              de voitures de première qualité à Kénitra. Notre passion pour l'excellence et notre 
              engagement envers la satisfaction client nous ont permis de devenir un leader 
              dans la région.
            </p>
            <p className="text-zinc-300">
              Situés au résidence bachiri, 66, 9 Rue Mohamed Abdou à Kénitra, nous continuons 
              à servir nos clients avec la même dédicace et le même professionnalisme qui ont 
              fait notre réputation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}