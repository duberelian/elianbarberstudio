import { Button } from '@/components/ui/button';
import { Scissors, Calendar, Star, Clock } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-barbershop.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 mb-8">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-amber-300 text-sm font-medium">Barbería Premium #1</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Elian Barber
            <span className="block text-amber-400">Studio</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Experiencia de barbería de élite. Donde la tradición se encuentra con el estilo moderno.
          </p>
          
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Especialistas en cortes precisos, afeitados clásicos y el cuidado experto de tu barba.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={onBookNow}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg rounded-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Reservar Ahora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToServices}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
            >
              <Scissors className="w-5 h-5 mr-2" />
              Ver Servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">10+</div>
              <div className="text-gray-400 text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">5k+</div>
              <div className="text-gray-400 text-sm">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">4.9</div>
              <div className="text-gray-400 text-sm">Calificación Promedio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">
                <Clock className="w-8 h-8 inline" />
              </div>
              <div className="text-gray-400 text-sm">Reserva 24/7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-amber-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
