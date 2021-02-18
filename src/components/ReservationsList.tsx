import React from 'react';
import { ReservationType } from './AddReservation';

type ReservationListProps = {
  reservations: ReservationType[]
}

const ReservationsList: React.FC<ReservationListProps> = ({reservations}) => {
  return (
    <div>
      <h2>قائمة الحجز</h2>
      <table>
        <thead>
          <td>الاسم</td>
          <td>الايميل</td>
          <td>العدد</td>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => {
            return <tr key={index}>
              <td>{reservation.name}</td>
              <td>{reservation.email}</td>
              <td>{reservation.number}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsList;