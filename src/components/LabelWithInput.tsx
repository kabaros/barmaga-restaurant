import React from 'react';

type LabelWithInputProps =  {
    name: string;
    placeholder: string;
    value: string | number;
    onChange: (name: string, value: string) => void;
    type?: string;
};

const LabelWithInput: React.FC<LabelWithInputProps> = (props) => {
  const { name, placeholder, type = "text", onChange, value } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.name, event.target.value);
  };

  return (<div className="my-2">
    <label htmlFor={name}>{placeholder}</label>
    <input value={value} onChange={handleChange} type={type} placeholder={placeholder} name={name}></input>
  </div>);
};

export default LabelWithInput;