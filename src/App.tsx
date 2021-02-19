import React, { useState } from 'react';
import AddReservation from './components/AddReservation';
import ReservationsList from './components/ReservationsList';
import { ReservationType } from './components/AddReservation';


const App = () => {
  const [reservations, setReservations] = useState<ReservationType[]>([])

  const onAddReservation = (reservation: ReservationType) => {
    setReservations([
      ...reservations,
      reservation
    ])
  }
  return (
    <div>
      <header className="site-logo bg-blue-600 py-10 text-white text-5xl">
            مطعمنا
      </header>
      <div className="container">
        
        <div className="w-full flex">
          <div className="flex-1 ml-4">
            <AddReservation onAdd={onAddReservation}/>
          </div>
          <div className="w-1/3">
            <ReservationsList reservations={reservations}/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
