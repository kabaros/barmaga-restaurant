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
    <div className="card">
      <h1 className="font-bold">اضافة حجز</h1>
      <form className="" onSubmit={onSubmit}>
        <LabelWithInput value={form.name} onChange={onChange} name="name" placeholder="الاسم"/>
        <LabelWithInput value={form.email} onChange={onChange} name="email" placeholder="الايميل"/>
        <LabelWithInput value={form.number} onChange={onChange} name="number" placeholder="العدد" type="number"/>
        <div>
          <input className="mt-4" type="submit" value="اضافة حجز"/>
        </div>
      </form>
    </div>
  );
};

export default AddReservation;