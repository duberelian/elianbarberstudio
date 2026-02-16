import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Scissors, Menu, Calendar } from 'lucide-react';

interface NavbarProps {
  onBookNow: () => void;
}

export function Navbar({ onBookNow }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#barberos', label: 'Barberos' },
    { href: '#galeria', label: 'Galería' },
    { href: '#reseñas', label: 'Reseñas' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Scissors className={`w-7 h-7 transition-colors ${isScrolled ? 'text-amber-400' : 'text-amber-400'}`} />
            <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>
              Elian Barber
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  isScrolled ? 'text-gray-300' : 'text-gray-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={onBookNow}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Reservar
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-zinc-800 w-80">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <Scissors className="w-7 h-7 text-amber-400" />
                  <span className="text-xl font-bold text-white">Elian Barber</span>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left text-lg text-gray-300 hover:text-amber-400 transition-colors py-2"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>

                <Button 
                  onClick={() => {
                    onBookNow();
                    setIsOpen(false);
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold w-full"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Reservar Ahora
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
