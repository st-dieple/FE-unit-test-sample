import React from 'react';
import { Button, Input } from '../../../shared/components/partials';

const UpdatePassword = () => {
  return ( 
    <div className="container">
      <div className="update-pass">
        <h2 className="update-pass-title">Change Passwword</h2>
        <form className="update-form">
          <Input name="password" type="password" placeholder="Password" textLabel="Password"/>
          <Input name="repassword" type="password" placeholder="Confirm Password" textLabel="Confirm Password"/>
          <Button classBtn="btn btn-primary" text="Update"/>
        </form>
      </div>
    </div>
   );
}

export default UpdatePassword;