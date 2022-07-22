import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { DialogContext, DialogContent } from '../../contexts/dialog.contexts';
import { Button } from './Button';

const Dialog = ({ dialog, closeDialog }: any) => {
  const handleCloseDialog = () => {
    closeDialog();
  };

  return (
    createPortal(
      <div className="modal">
        <div className="modal-inner">
          <Button classBtn="modal-close" text={<i className="fa-solid fa-xmark"></i>} onClick={handleCloseDialog}/>
          <div className="modal-content">
            {dialog.content}
          </div>
        </div>
      </div>
    , document.body)
  );
};

export const DialogProvider = (props: any) => {
  const [ dialog, setDialog ] = useState({});
  const location = useLocation();

  useEffect(() => {
    setDialog({});
  }, [location]);

  const addDialog = ((newDialog: DialogContent) => {
    setDialog(newDialog);
  });

  const closeDialog = () => {
    setDialog({});
  };

  const checkDialog = Object.keys(dialog).length || '';

  return (
    <DialogContext.Provider value={{dialog, addDialog, closeDialog}} { ...props }>
      {props.children}
      {
       checkDialog && <Dialog dialog={dialog} closeDialog={closeDialog}/>
      }
    </DialogContext.Provider>
  )
};
