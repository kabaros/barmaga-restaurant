import React from 'react';
import AddReservation from './components/AddReservation';
import ReservationsList from './components/ReservationsList';
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>
          مطعمنا
        </h1>
      </header>
      <AddReservation/>
      <ReservationsList/>
    </div>
  );
}

export default App;
