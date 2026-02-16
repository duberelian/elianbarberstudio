import { useState } from 'react';
import type { Service, Barber } from '@/types';
import { services, barbers, timeSlots } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  ChevronLeft, 
  Check, 
  Clock, 
  User, 
  Calendar as CalendarIcon,
  Scissors,
  Star,
  Phone,
  Mail,
  UserCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface BookingProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: Service | null;
}

export function Booking({ isOpen, onClose, initialService }: BookingProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(initialService || null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setStep(2);
  };

  const handleBarberSelect = (barber: Barber) => {
    setSelectedBarber(barber);
    setStep(3);
  };

  const handleDateTimeSelect = () => {
    if (selectedDate && selectedTime) {
      setStep(4);
    }
  };

  const handleCompleteBooking = () => {
    if (clientInfo.name && clientInfo.email && clientInfo.phone) {
      setShowSuccess(true);
    }
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedBarber(null);
    setSelectedDate(undefined);
    setSelectedTime(null);
    setClientInfo({ name: '', email: '', phone: '', notes: '' });
    setShowSuccess(false);
    onClose();
  };

  const steps = [
    { number: 1, label: 'Servicio', icon: Scissors },
    { number: 2, label: 'Barbero', icon: User },
    { number: 3, label: 'Fecha', icon: CalendarIcon },
    { number: 4, label: 'Datos', icon: UserCircle }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={resetBooking}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 border-zinc-800 p-0">
        {!showSuccess ? (
          <>
            {/* Header */}
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-2xl font-bold text-white text-center">
                Reserva tu Cita
              </DialogTitle>
            </DialogHeader>

            {/* Progress Steps */}
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                {steps.map((s, index) => (
                  <div key={s.number} className="flex items-center">
                    <div className={`flex flex-col items-center ${
                      step >= s.number ? 'text-amber-400' : 'text-gray-500'
                    }`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                        step > s.number 
                          ? 'bg-amber-500 border-amber-500 text-black' 
                          : step === s.number
                          ? 'border-amber-400 bg-amber-500/20'
                          : 'border-gray-600 bg-zinc-800'
                      }`}>
                        {step > s.number ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          <s.icon className="w-5 h-5" />
                        )}
                      </div>
                      <span className="text-xs mt-1 font-medium">{s.label}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-12 sm:w-20 h-0.5 mx-2 ${
                        step > s.number ? 'bg-amber-500' : 'bg-gray-700'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="p-6 pt-2">
              {/* Step 1: Select Service */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Selecciona un servicio</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Card 
                        key={service.id}
                        className={`cursor-pointer transition-all hover:border-amber-500/50 ${
                          selectedService?.id === service.id 
                            ? 'border-amber-500 bg-amber-500/10' 
                            : 'border-zinc-800 bg-zinc-800/50'
                        }`}
                        onClick={() => handleServiceSelect(service)}
                      >
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <img 
                              src={service.image} 
                              alt={service.name}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-white">{service.name}</h4>
                              <p className="text-sm text-gray-400 line-clamp-2">{service.description}</p>
                              <div className="flex items-center gap-4 mt-2">
                                <span className="text-amber-400 font-semibold">${service.price}</span>
                                <span className="text-gray-500 text-sm flex items-center gap-1">
                                  <Clock className="w-3 h-3" /> {service.duration} min
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Barber */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Button variant="ghost" size="sm" onClick={() => setStep(1)} className="text-gray-400">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <h3 className="text-lg font-semibold text-white">Selecciona tu barbero</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {barbers.map((barber) => (
                      <Card 
                        key={barber.id}
                        className={`cursor-pointer transition-all hover:border-amber-500/50 ${
                          selectedBarber?.id === barber.id 
                            ? 'border-amber-500 bg-amber-500/10' 
                            : 'border-zinc-800 bg-zinc-800/50'
                        }`}
                        onClick={() => handleBarberSelect(barber)}
                      >
                        <CardContent className="p-4 text-center">
                          <img 
                            src={barber.image} 
                            alt={barber.name}
                            className="w-24 h-24 object-cover rounded-full mx-auto mb-3"
                          />
                          <h4 className="font-semibold text-white">{barber.name}</h4>
                          <p className="text-sm text-amber-400">{barber.role}</p>
                          <div className="flex items-center justify-center gap-1 mt-2">
                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                            <span className="text-sm text-gray-300">{barber.rating}</span>
                            <span className="text-sm text-gray-500">({barber.reviews})</span>
                          </div>
                          <div className="flex flex-wrap justify-center gap-1 mt-3">
                            {barber.specialties.map((spec) => (
                              <span key={spec} className="text-xs px-2 py-1 bg-zinc-700 rounded-full text-gray-300">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Select Date & Time */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Button variant="ghost" size="sm" onClick={() => setStep(2)} className="text-gray-400">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <h3 className="text-lg font-semibold text-white">Selecciona fecha y hora</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-gray-300 mb-2 block">Fecha</Label>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="bg-zinc-800 border-zinc-700 rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-gray-300 mb-2 block">Hora disponible</Label>
                      {selectedDate ? (
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTime === time ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSelectedTime(time)}
                              className={selectedTime === time 
                                ? 'bg-amber-500 text-black hover:bg-amber-600' 
                                : 'border-zinc-700 text-gray-300 hover:bg-zinc-800'
                              }
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-center py-8">Selecciona una fecha primero</p>
                      )}
                    </div>
                  </div>

                  {selectedDate && selectedTime && (
                    <Button 
                      onClick={handleDateTimeSelect}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold"
                    >
                      Continuar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              )}

              {/* Step 4: Client Info */}
              {step === 4 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Button variant="ghost" size="sm" onClick={() => setStep(3)} className="text-gray-400">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <h3 className="text-lg font-semibold text-white">Tus datos</h3>
                  </div>

                  {/* Summary */}
                  <div className="bg-zinc-800/50 rounded-lg p-4 mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Resumen de tu reserva</h4>
                    <div className="space-y-1 text-sm">
                      <p className="text-white"><span className="text-gray-500">Servicio:</span> {selectedService?.name}</p>
                      <p className="text-white"><span className="text-gray-500">Barbero:</span> {selectedBarber?.name}</p>
                      <p className="text-white"><span className="text-gray-500">Fecha:</span> {selectedDate?.toLocaleDateString('es-ES')}</p>
                      <p className="text-white"><span className="text-gray-500">Hora:</span> {selectedTime}</p>
                      <p className="text-amber-400 font-semibold">Total: ${selectedService?.price}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Nombre completo</Label>
                      <div className="relative">
                        <UserCircle className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                        <Input
                          id="name"
                          value={clientInfo.name}
                          onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                          className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                          placeholder="Tu nombre"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-300">Correo electrónico</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                        <Input
                          id="email"
                          type="email"
                          value={clientInfo.email}
                          onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                          className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-300">Teléfono</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                        <Input
                          id="phone"
                          type="tel"
                          value={clientInfo.phone}
                          onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                          className="pl-10 bg-zinc-800 border-zinc-700 text-white"
                          placeholder="+1 234 567 890"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes" className="text-gray-300">Notas adicionales (opcional)</Label>
                      <Textarea
                        id="notes"
                        value={clientInfo.notes}
                        onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                        className="bg-zinc-800 border-zinc-700 text-white"
                        placeholder="Alguna preferencia especial..."
                        rows={3}
                      />
                    </div>

                    <Button 
                      onClick={handleCompleteBooking}
                      disabled={!clientInfo.name || !clientInfo.email || !clientInfo.phone}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-6"
                    >
                      Confirmar Reserva
                      <Check className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">¡Reserva Confirmada!</h3>
            <p className="text-gray-400 mb-6">
              Hemos enviado los detalles de tu cita a {clientInfo.email}
            </p>
            
            <div className="bg-zinc-800 rounded-lg p-6 mb-6 text-left">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Detalles de la reserva</h4>
              <div className="space-y-2 text-sm">
                <p className="text-white"><span className="text-gray-500">Servicio:</span> {selectedService?.name}</p>
                <p className="text-white"><span className="text-gray-500">Barbero:</span> {selectedBarber?.name}</p>
                <p className="text-white"><span className="text-gray-500">Fecha:</span> {selectedDate?.toLocaleDateString('es-ES')}</p>
                <p className="text-white"><span className="text-gray-500">Hora:</span> {selectedTime}</p>
                <p className="text-white"><span className="text-gray-500">Cliente:</span> {clientInfo.name}</p>
              </div>
            </div>

            <Button 
              onClick={resetBooking}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8"
            >
              Cerrar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
