import React from 'react';
import LabelWithInput from './LabelWithInput';

// DRY - Do not Repeat Yourself

const AddReservation = () => {
  return (
    <div>
      <h1>اضافة حجز</h1>
      <form>
        <LabelWithInput name="name" placeholder="الاسم"/>
        <LabelWithInput name="email" placeholder="الايميل"/>
        <LabelWithInput name="number" placeholder="العدد" type="number"/>
        <div>
          <input type="submit" value="اضافة حجز"/>
        </div>
      </form>
    </div>
  );
};

export default AddReservation;