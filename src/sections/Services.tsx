import type { Service } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign, ArrowRight } from 'lucide-react';

interface ServicesProps {
  services: Service[];
  onSelectService: (service: Service) => void;
}

export function Services({ services, onSelectService }: ServicesProps) {
  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      haircut: 'Corte',
      shave: 'Afeitado',
      beard: 'Barba',
      treatment: 'Tratamiento'
    };
    return labels[category] || category;
  };

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-zinc-950">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Servicios Premium de Barbería
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ofrecemos una experiencia de grooming completa con los mejores productos 
              y técnicas profesionales.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="group bg-zinc-900 border-zinc-800 overflow-hidden hover:border-amber-500/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-500 text-black text-xs font-semibold rounded-full">
                      {getCategoryLabel(service.category)}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span className="text-sm">{service.duration} min</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <DollarSign className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-semibold">${service.price}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    onClick={() => onSelectService(service)}
                    className="w-full bg-zinc-800 hover:bg-amber-500 hover:text-black text-white transition-all duration-300 group/btn"
                  >
                    Reservar
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
