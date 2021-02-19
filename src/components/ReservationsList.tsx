import React from 'react';
import { ReservationType } from './AddReservation';

type ReservationListProps = {
  reservations: ReservationType[]
}

// conditional rendering 
const ReservationsList: React.FC<ReservationListProps> = ({reservations}) => {
  const hasReservations = reservations.length > 0;

  return (
    <div>
      <h2 className="text-3xl mb-4">قائمة الحجوزات</h2>
      {!hasReservations&& <div className="text-xs text-gray">لا توجد حجوزات</div>}
      {hasReservations && <table className="reservation-list">
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
      </table>}
    </div>
  );
};

export default ReservationsList;