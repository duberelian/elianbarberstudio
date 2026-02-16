import type { Service, Barber, Review, GalleryItem } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Corte Clásico',
    description: 'Corte de cabello tradicional con tijera y máquina, incluye lavado y peinado.',
    price: 25,
    duration: 45,
    image: '/service-haircut.jpg',
    category: 'haircut'
  },
  {
    id: '2',
    name: 'Fade Premium',
    description: 'Degradado preciso con técnica avanzada, incluye diseño de lineas si lo desea.',
    price: 30,
    duration: 50,
    image: '/service-haircut.jpg',
    category: 'haircut'
  },
  {
    id: '3',
    name: 'Afeitado Clásico',
    description: 'Afeitado tradicional con navaja y toalla caliente, incluye productos premium.',
    price: 20,
    duration: 30,
    image: '/service-shave.jpg',
    category: 'shave'
  },
  {
    id: '4',
    name: 'Arreglo de Barba',
    description: 'Perfilado y diseño de barba con tijera y máquina, incluye productos hidratantes.',
    price: 18,
    duration: 25,
    image: '/service-beard.jpg',
    category: 'beard'
  },
  {
    id: '5',
    name: 'Barba Premium',
    description: 'Tratamiento completo de barba con aceites esenciales y masaje facial.',
    price: 28,
    duration: 35,
    image: '/service-beard.jpg',
    category: 'beard'
  },
  {
    id: '6',
    name: 'Tratamiento Capilar',
    description: 'Hidratación profunda con productos premium, incluye masaje capilar.',
    price: 35,
    duration: 40,
    image: '/service-treatment.jpg',
    category: 'treatment'
  }
];

export const barbers: Barber[] = [
  {
    id: '1',
    name: 'Elian Martínez',
    role: 'Barbero Principal',
    image: '/barber-portrait.jpg',
    specialties: ['Fade', 'Diseños', 'Afeitado'],
    rating: 4.9,
    reviews: 127
  },
  {
    id: '2',
    name: 'Carlos Ruiz',
    role: 'Barbero Senior',
    image: '/barber-portrait.jpg',
    specialties: ['Clásicos', 'Barba', 'Tratamientos'],
    rating: 4.8,
    reviews: 98
  },
  {
    id: '3',
    name: 'Andrés López',
    role: 'Especialista en Barba',
    image: '/barber-portrait.jpg',
    specialties: ['Barba', 'Afeitado', 'Estilismo'],
    rating: 4.7,
    reviews: 85
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    clientName: 'Miguel Ángel',
    rating: 5,
    comment: 'Excelente servicio, Elian es un profesional. Mi fade quedó perfecto, definitivamente volveré.',
    date: '2024-02-10',
    service: 'Fade Premium'
  },
  {
    id: '2',
    clientName: 'Juan Carlos',
    rating: 5,
    comment: 'La mejor barbería de la ciudad. Ambiente premium y atención de primera.',
    date: '2024-02-08',
    service: 'Corte Clásico'
  },
  {
    id: '3',
    clientName: 'Roberto Díaz',
    rating: 4,
    comment: 'Muy buen trato y profesionalidad. El afeitado clásico es una experiencia única.',
    date: '2024-02-05',
    service: 'Afeitado Clásico'
  },
  {
    id: '4',
    clientName: 'Daniel Torres',
    rating: 5,
    comment: 'Mi barba nunca se había visto tan bien. El tratamiento premium vale cada centavo.',
    date: '2024-02-03',
    service: 'Barba Premium'
  },
  {
    id: '5',
    clientName: 'Alejandro Silva',
    rating: 5,
    comment: 'Reservar es súper fácil y el servicio es impecable. Totalmente recomendado.',
    date: '2024-02-01',
    service: 'Corte Clásico'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: '/gallery-1.jpg',
    title: 'Fade con Barba',
    category: 'Cortes'
  },
  {
    id: '2',
    image: '/gallery-2.jpg',
    title: 'Pompadour Clásico',
    category: 'Estilos'
  },
  {
    id: '3',
    image: '/gallery-3.jpg',
    title: 'Barba Perfecta',
    category: 'Barbas'
  },
  {
    id: '4',
    image: '/gallery-4.jpg',
    title: 'Texturizado Moderno',
    category: 'Cortes'
  }
];

export const timeSlots: string[] = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
];
