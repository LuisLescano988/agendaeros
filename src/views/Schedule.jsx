import React, { useState } from 'react';
import { format, addDays, startOfToday } from 'date-fns';
import { es } from 'date-fns/locale';

const Schedule = () => {
    const [appointments, setAppointments] = useState([]);

    // Generar los próximos 7 días
    const generateWeekDays = () => {
      const today = startOfToday();
      return Array.from({ length: 7 }, (_, i) => addDays(today, i));
    };
  
    // Generar horarios (de 9 AM a 5 PM en intervalos de 15 minutos)
    const generateTimeSlots = () => {
      const slots = [];
      for (let hour = 9; hour < 17; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const start = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
          const endMinute = (minute + 15) % 60;
          const endHour = endMinute === 0 ? hour + 1 : hour;
          const end = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
          slots.push({ start, end });
        }
      }
      return slots;
    };
  
    const timeSlots = generateTimeSlots();
    const weekDays = generateWeekDays();
  
    const handleSlotClick = (date, timeSlot) => {
      const slotKey = `${format(date, 'yyyy-MM-dd')}-${timeSlot.start}`;
      if (appointments.includes(slotKey)) {
        alert('Este horario ya está reservado');
        return;
      }
      
      if (window.confirm(`¿Deseas agendar una cita para el ${format(date, 'dd/MM/yyyy')} de ${timeSlot.start} a ${timeSlot.end}?`)) {
        setAppointments([...appointments, slotKey]);
      }
    };
  
    const isSlotBooked = (date, timeSlot) => {
      const slotKey = `${format(date, 'yyyy-MM-dd')}-${timeSlot.start}`;
      return appointments.includes(slotKey);
    };
  
    return (
      <div className="w-screen mx-auto pt-20">
        <div className="overflow-x-auto">
          <div className="grid grid-cols-7 gap-2">
            {/* Headers de días */}
            {weekDays.map((date) => (
              <div 
                key={date.toString()} 
                className="text-center p-4 bg-gray-50 rounded-lg"
              >
                <div className="text-lg font-semibold">
                  {format(date, 'EEEE', { locale: es })}
                </div>
                <div className="text-gray-600">
                  {format(date, 'd', { locale: es })} de {format(date, 'MMMM', { locale: es })}
                </div>
              </div>
            ))}
  
            {/* Grilla de horarios para cada día */}
            {weekDays.map((date) => (
              <div key={date.toString()} className="space-y-2">
                {timeSlots.map((timeSlot) => (
                  <div
                    key={`${date}-${timeSlot.start}`}
                    onClick={() => handleSlotClick(date, timeSlot)}
                    className={`
                      p-2 cursor-pointer rounded-lg
                      transition-colors duration-150 ease-in-out
                      ${isSlotBooked(date, timeSlot)
                        ? 'bg-blue-100 hover:bg-blue-200'
                        : 'bg-green-50 hover:bg-green-100'}
                    `}
                  >
                    <div className="text-xs text-center">
                      {timeSlot.start} a {timeSlot.end}
                    </div>
                    {isSlotBooked(date, timeSlot) && (
                      <div className="text-xs text-center text-blue-600 mt-1">
                        Reservado
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Schedule;