import React from 'react';

interface IInputProps {
  fieldClass: string,
  placeholder: string,
  onChange : (e: any) => void;
}

export const Input = ({fieldClass, placeholder, onChange}: IInputProps) => {
  return (
    <input type="text" className={fieldClass} placeholder={placeholder} onChange={onChange}/>
  );
};
