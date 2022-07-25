import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../../shared/components/partials';

const UserUpdatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const checkPass = watch('Password');

  const onSubmit = (data: any) => {}
  return (
    <div className="update-pass">
      <h2 className="update-pass-title">Change Passwword</h2>
      <form className="update-form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="password"
          type="password"
          placeholder="Password"
          textLabel="Password"
          register={register("password", {
            required: true,
            minLength: 8,
            maxLength: 20,
          })}
          isError={errors.password ? true : false}
          errorsMsg="Please enter at least 8 characters."
        />
        <Input
          name="repassword"
          type="password"
          placeholder="Confirm Password"
          textLabel="Confirm Password"
          register={register("confirmPassword", {
            required: "Please enter at least 8 characters.",
            minLength: 8,
            maxLength: 20,
            validate: (value) =>
                value === checkPass || "The password do not match"
          })}
          isError={errors.confirmPassword ? true : false}
          errorsMsg={`${errors.confirmPassword && errors.confirmPassword.message}`}
        />
        <Button classBtn="btn btn-primary" text="Update" />
      </form>
    </div>
  );
};

export default UserUpdatePassword;
