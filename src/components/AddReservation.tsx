import React, { useState } from 'react';
import LabelWithInput from './LabelWithInput';


export type ReservationType = {
  name: string;
  email: string;
  number: number;
};

type AddReservationProps = {
  onAdd: (reservation: ReservationType) => void;
}

const AddReservation: React.FC<AddReservationProps> = ({onAdd}) => {
  const [form, setForm] = useState<ReservationType>({
    name: '',
    email: '',
    number: 1
  });

  const onChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value
    })
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd(form);
  }

  return (
    <div>
      <h1>اضافة حجز</h1>
      <form onSubmit={onSubmit}>
        <LabelWithInput onChange={onChange} name="name" placeholder="الاسم"/>
        <LabelWithInput onChange={onChange} name="email" placeholder="الايميل"/>
        <LabelWithInput onChange={onChange} name="number" placeholder="العدد" type="number"/>
        <div>
          <input type="submit" value="اضافة حجز"/>
        </div>
      </form>
    </div>
  );
};

export default AddReservation;