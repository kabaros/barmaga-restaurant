import React, { useState } from 'react';
import AddReservation from './components/AddReservation';
import ReservationsList from './components/ReservationsList';
import "./App.css";
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
    <div className="app">
      <header className="header">
        <h1>
          مطعمنا
        </h1>
      </header>
      <AddReservation onAdd={onAddReservation}/>
      <ReservationsList reservations={reservations}/>
    </div>
  );
}

export default App;
