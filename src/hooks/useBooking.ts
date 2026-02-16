import { useState, useCallback } from 'react';
import type { Service, Barber, Booking } from '@/types';

interface BookingState {
  step: number;
  selectedService: Service | null;
  selectedBarber: Barber | null;
  selectedDate: string | null;
  selectedTime: string | null;
  clientInfo: {
    name: string;
    email: string;
    phone: string;
    notes: string;
  };
}

const initialState: BookingState = {
  step: 1,
  selectedService: null,
  selectedBarber: null,
  selectedDate: null,
  selectedTime: null,
  clientInfo: {
    name: '',
    email: '',
    phone: '',
    notes: ''
  }
};

export function useBooking() {
  const [bookingState, setBookingState] = useState<BookingState>(initialState);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const selectService = useCallback((service: Service) => {
    setBookingState(prev => ({
      ...prev,
      selectedService: service,
      step: 2
    }));
  }, []);

  const selectBarber = useCallback((barber: Barber) => {
    setBookingState(prev => ({
      ...prev,
      selectedBarber: barber,
      step: 3
    }));
  }, []);

  const selectDateTime = useCallback((date: string, time: string) => {
    setBookingState(prev => ({
      ...prev,
      selectedDate: date,
      selectedTime: time,
      step: 4
    }));
  }, []);

  const updateClientInfo = useCallback((info: Partial<BookingState['clientInfo']>) => {
    setBookingState(prev => ({
      ...prev,
      clientInfo: { ...prev.clientInfo, ...info }
    }));
  }, []);

  const completeBooking = useCallback(() => {
    if (
      bookingState.selectedService &&
      bookingState.selectedBarber &&
      bookingState.selectedDate &&
      bookingState.selectedTime
    ) {
      const newBooking: Booking = {
        id: Math.random().toString(36).substr(2, 9),
        service: bookingState.selectedService,
        barber: bookingState.selectedBarber,
        date: bookingState.selectedDate,
        time: bookingState.selectedTime,
        clientName: bookingState.clientInfo.name,
        clientEmail: bookingState.clientInfo.email,
        clientPhone: bookingState.clientInfo.phone,
        notes: bookingState.clientInfo.notes,
        status: 'confirmed'
      };

      setBookings(prev => [...prev, newBooking]);
      setShowConfirmation(true);
      return newBooking;
    }
    return null;
  }, [bookingState]);

  const resetBooking = useCallback(() => {
    setBookingState(initialState);
    setShowConfirmation(false);
  }, []);

  const goBack = useCallback(() => {
    setBookingState(prev => ({
      ...prev,
      step: Math.max(1, prev.step - 1)
    }));
  }, []);

  const goToStep = useCallback((step: number) => {
    setBookingState(prev => ({
      ...prev,
      step
    }));
  }, []);

  return {
    ...bookingState,
    bookings,
    showConfirmation,
    selectService,
    selectBarber,
    selectDateTime,
    updateClientInfo,
    completeBooking,
    resetBooking,
    goBack,
    goToStep
  };
}
