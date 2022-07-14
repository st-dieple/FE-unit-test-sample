import React from 'react';

interface IInputProps {
  type: string,
  name: string,
  className?: string,
  placeholder?: string,
  register?: any,
  errorsMsg?: any,
  textLabel: any
}

export const Input = ({type, name, className, placeholder, register, errorsMsg, textLabel}: IInputProps) => {
  return (
    <div className="input-group">
      <input 
        type={type}
        name={name} 
        className={`form-control ${className}` }
        placeholder={placeholder} 
        {...register}
      />
      <label className="label">{textLabel}</label>
      <span>{errorsMsg}</span>
    </div>
  );
};
