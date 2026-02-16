import type { Review } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface ReviewsProps {
  reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
  return (
    <section id="reseñas" className="py-20 lg:py-28 bg-zinc-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
              Testimonios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card 
                key={review.id} 
                className="bg-zinc-950 border-zinc-800"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-amber-500/30 mb-4" />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating 
                            ? 'text-amber-400 fill-amber-400' 
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-300 mb-6 line-clamp-4">
                    "{review.comment}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <span className="text-amber-400 font-semibold">
                        {review.clientName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{review.clientName}</p>
                      <p className="text-gray-500 text-sm">{review.service}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-zinc-950 rounded-xl p-6 border border-zinc-800">
              <div className="text-3xl font-bold text-amber-400 mb-1">500+</div>
              <div className="text-gray-400 text-sm">Reseñas</div>
            </div>
            <div className="bg-zinc-950 rounded-xl p-6 border border-zinc-800">
              <div className="text-3xl font-bold text-amber-400 mb-1">4.9</div>
              <div className="text-gray-400 text-sm">Calificación</div>
            </div>
            <div className="bg-zinc-950 rounded-xl p-6 border border-zinc-800">
              <div className="text-3xl font-bold text-amber-400 mb-1">98%</div>
              <div className="text-gray-400 text-sm">Recomiendan</div>
            </div>
            <div className="bg-zinc-950 rounded-xl p-6 border border-zinc-800">
              <div className="text-3xl font-bold text-amber-400 mb-1">5k+</div>
              <div className="text-gray-400 text-sm">Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
