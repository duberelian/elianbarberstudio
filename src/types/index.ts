export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  image: string;
  category: 'haircut' | 'shave' | 'beard' | 'treatment';
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  image: string;
  specialties: string[];
  rating: number;
  reviews: number;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Booking {
  id: string;
  service: Service;
  barber: Barber;
  date: string;
  time: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface Review {
  id: string;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}
