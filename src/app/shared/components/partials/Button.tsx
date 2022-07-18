import React from 'react';
import Bounce from './Bounce';

interface IButtonProps {
  text: string;
  classBtn: string;
  isLoading?: boolean;
  onClick?: (e?: any) => void;
};

export const Button = ({
  classBtn,
  text,
  isLoading,
  onClick,
}: IButtonProps) => {
  return (
    <button className={classBtn} onClick={onClick}>
      {text}
      {isLoading && <Bounce />}
    </button>
  );
};
