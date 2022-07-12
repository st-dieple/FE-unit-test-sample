import React from 'react';

interface IInputProps {
  type: string,
  name: string,
  className?: string,
  placeholder?: string,
  register?: any,
  errorsMsg?: any
}

export const Input = ({type, name, className, placeholder, register, errorsMsg}: IInputProps) => {
  return (
    <>
    <input 
      type={type}
      name={name} 
      className={`form-control ${className}` }
      placeholder={placeholder} 
      {...register}
    />
    <span>{errorsMsg}</span>
    </>
  );
};
