import React, { useState } from 'react';
import LabelWithInput from './LabelWithInput';


type ReservationType = {
  name: string;
  email: string;
  number: number;
};

const AddReservation = () => {
  const [form, setForm] = useState<Partial<ReservationType>>({})

  const onChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value
    })
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(JSON.stringify(form));
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