import React from 'react';

type LabelWithInputProps =  {
    name: string;
    placeholder: string;
    type?: string;
};
  
const LabelWithInput: React.FC<LabelWithInputProps> = (props) => {
  const { name, placeholder, type = "text" } = props;

  return (<div>
    <label htmlFor={name}>{placeholder}</label>
    <input type={type} placeholder={placeholder} name={name}></input>
  </div>);
};

export default LabelWithInput;