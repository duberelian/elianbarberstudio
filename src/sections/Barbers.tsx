import type { Barber } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Scissors } from 'lucide-react';

interface BarbersProps {
  barbers: Barber[];
}

export function Barbers({ barbers }: BarbersProps) {
  return (
    <section id="barberos" className="py-20 lg:py-28 bg-zinc-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
              Nuestro Equipo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Expertos en Estilo
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Conoce a nuestros barberos profesionales, cada uno con años de experiencia 
              y pasión por el arte de la barbería.
            </p>
          </div>

          {/* Barbers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {barbers.map((barber) => (
              <Card 
                key={barber.id} 
                className="group bg-zinc-950 border-zinc-800 overflow-hidden hover:border-amber-500/50 transition-all duration-300"
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={barber.image} 
                      alt={barber.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-white text-sm font-semibold">{barber.rating}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {barber.name}
                    </h3>
                    <p className="text-amber-400 text-sm mb-4">
                      {barber.role}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {barber.specialties.map((specialty) => (
                        <span 
                          key={specialty}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-800 rounded-full text-xs text-gray-300"
                        >
                          <Scissors className="w-3 h-3" />
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Reviews */}
                    <p className="text-gray-500 text-sm">
                      {barber.reviews} reseñas de clientes
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
