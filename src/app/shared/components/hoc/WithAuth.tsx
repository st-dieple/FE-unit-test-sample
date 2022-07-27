import React, { useState } from 'react';
import { getData } from '../../../core/helpers/localstorage';
import { useDialog } from '../../contexts/dialog.contexts';
import PopUpLogin from '../partials/PopupLogin';

const WithAuth = (Wrapped: any) => {
  return (props: any) => {
    const dialog = useDialog();
    const checkAuthen = (callback) => {
      if (getData('token', '')) callback();
      else {
        dialog?.addDialog(<PopUpLogin />);
      }
    };

    return (
      <>
        <Wrapped {...props} checkAuthen={checkAuthen} />
      </>
    );
  };
};

export default WithAuth;
