import React from 'react';
import { ReservationType } from './AddReservation';

type ReservationListProps = {
  reservations: ReservationType[]
}

const ReservationsList: React.FC<ReservationListProps> = ({reservations}) => {
  return (
    <div>
      <h2>قائمة الحجز</h2>
      {JSON.stringify(reservations)}
    </div>
  );
};

export default ReservationsList;