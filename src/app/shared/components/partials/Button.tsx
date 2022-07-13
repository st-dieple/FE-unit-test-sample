import React from 'react'

interface IButtonProps {
  text: string,
  classBtn: string,
};

export const Button = ({classBtn, text}: IButtonProps) => {
  return (
    <button className={`btn btn-${classBtn}`}>{text}</button>
  );
};
