import { useState } from 'react';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Booking } from '@/sections/Booking';
import { Barbers } from '@/sections/Barbers';
import { Gallery } from '@/sections/Gallery';
import { Reviews } from '@/sections/Reviews';
import { Footer } from '@/sections/Footer';
import { services, barbers, reviews, galleryItems } from '@/data/services';
import type { Service } from '@/types';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleBookNow = () => {
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar onBookNow={handleBookNow} />
      
      <main>
        <Hero onBookNow={handleBookNow} />
        <Services services={services} onSelectService={handleSelectService} />
        <Barbers barbers={barbers} />
        <Gallery items={galleryItems} />
        <Reviews reviews={reviews} />
      </main>

      <Footer />

      <Booking 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      <Toaster />
    </div>
  );
}

export default App;
