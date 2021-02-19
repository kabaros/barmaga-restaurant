import React from 'react';
import { ReservationType } from './AddReservation';

type ReservationListProps = {
  reservations: ReservationType[]
}

const ReservationsList: React.FC<ReservationListProps> = ({reservations}) => {
  return (
    <div>
      <h2 className="text-3xl mb-4">قائمة الحجوزات</h2>
      <table className="reservation-list">
        <thead>
          <tr>
            <th>الاسم</th>
            <th>الايميل</th>
            <th>العدد</th>
          </tr>
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