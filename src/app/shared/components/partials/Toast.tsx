import React from 'react';
import Icon from '../../../../assets/icons';
import { Button }  from './Button';

interface IToastProp {
  type: string,
  title: string
}

export const Toast = ({type, title}: IToastProp) => {
  let icon;
  if(type === 'success') {
    icon = Icon.Check;
  }
  if(type === 'error') {
    icon = Icon.Error
  }

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-image">
        <img src={icon} alt={type} />
      </div>
      <div>
        <p className="toast-title">{title}</p>
      </div>
      <Button text={<i className="fa-solid fa-xmark"></i>} classBtn="toast-btn"/>
    </div>
  );
};

export default Toast;
