import React from 'react';

interface IButtonProps {
  text: string;
  classBtn: string;
  onClick?: (e?: any) => void;
};

export const Button = ({ classBtn, text, onClick }: IButtonProps) => {
  return (
    <button className={classBtn} onClick={onClick}>
      {text}
    </button>
  );
};
