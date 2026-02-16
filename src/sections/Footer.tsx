import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter,
  Scissors,
  ArrowRight
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scissors className="w-8 h-8 text-amber-400" />
                <span className="text-xl font-bold text-white">Elian Barber</span>
              </div>
              <p className="text-gray-400 mb-6">
                Experiencia de barbería premium donde la tradición se encuentra con el estilo moderno.
              </p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-black transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#servicios" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#barberos" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Nuestros Barberos
                  </a>
                </li>
                <li>
                  <a href="#galeria" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Galería
                  </a>
                </li>
                <li>
                  <a href="#reseñas" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Reseñas
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span className="text-gray-400">
                    Calle Principal 123<br />
                    Ciudad de México, CDMX
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-400">+52 55 1234 5678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-400">info@elianbarber.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 mt-0.5" />
                  <span className="text-gray-400">
                    Lun - Sáb: 9:00 - 20:00<br />
                    Domingo: Cerrado
                  </span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Suscríbete para recibir ofertas especiales y novedades.
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Tu email"
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
                <Button className="bg-amber-500 hover:bg-amber-600 text-black px-3">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Elian Barber Studio. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-500 hover:text-amber-400 text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
