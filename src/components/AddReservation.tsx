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
  const initialState = {
    name: '',
    email: '',
    number: 1
  };

  const [form, setForm] = useState<ReservationType>(initialState);

  const onChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value
    })
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setForm(initialState);
    onAdd(form);
  }

  return (
    <div>
      <h1>اضافة حجز</h1>
      <form onSubmit={onSubmit}>
        <LabelWithInput value={form.name} onChange={onChange} name="name" placeholder="الاسم"/>
        <LabelWithInput value={form.email} onChange={onChange} name="email" placeholder="الايميل"/>
        <LabelWithInput value={form.number} onChange={onChange} name="number" placeholder="العدد" type="number"/>
        <div>
          <input className="button w-full md:w-1/3" type="submit" value="اضافة حجز"/>
        </div>
      </form>
    </div>
  );
};

export default AddReservation;