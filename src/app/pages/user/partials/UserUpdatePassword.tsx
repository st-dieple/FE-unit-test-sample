import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../../core/serivces/user.service';
import { Button, Input } from '../../../shared/components/partials';
import Toast from '../../../shared/components/partials/Toast';
import { passwordValidator } from '../../../shared/validations/form.validation';

const userService = new UserService();
const UserUpdatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const checkPass = watch('newPassword');
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);
  const [toast, setToast] = useState<any>({
    hasLoading: false,
    type: '',
    title: '',
  });
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      userService
        .handleChangePassword({
          oldPassword: data.oldPassword,
          newPassword: data.newPassword,
        })
        .then((res: any) => {
          setIsRequestingAPI(false);
          setToast({ hasLoading: true, type: 'success', title: res });
          const myTimeout = setTimeout(() => {
            navigate('/profile/me');
          }, 500);
          return () => {
            clearTimeout(myTimeout);
          };
        })
        .catch((error) => {
          setIsRequestingAPI(false);
          const myTimeout = setTimeout(() => {
            setToast({
              hasLoading: true,
              type: 'error',
              title: error.response.data.errors,
            });
          }, 500);
          return () => {
            clearTimeout(myTimeout);
          };
        });
    }
  };
  return (
    <>
      {toast.hasLoading && <Toast type={toast.type} title={toast.title} />}
      <div className="update-pass">
        <form className="update-form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="password"
            type="password"
            placeholder="Old Password"
            textLabel="Old Password"
            register={register('oldPassword', passwordValidator())}
            isError={errors.oldPassword ? true : false}
            errorsMsg={errors.oldPassword?.message}
          />
          <Input
            name="password"
            type="password"
            placeholder="New Password"
            textLabel="New Password"
            register={register('newPassword', passwordValidator())}
            isError={errors.newPassword ? true : false}
            errorsMsg={errors.newPassword?.message}
          />
          <Input
            name="password"
            type="password"
            placeholder="Confirm Password"
            textLabel="Confirm Password"
            register={register('confirmPassword', {
              validate: (value) =>
                value === checkPass || 'The password is invalid.',
            })}
            isError={errors.confirmPassword ? true : false}
            errorsMsg={`${
              errors.confirmPassword && errors.confirmPassword?.message
            }`}
          />
          <Button
            classBtn="btn btn-primary update-btn"
            text="Change"
            isLoading={isRequestingAPI}
          />
        </form>
      </div>
    </>
  );
};

export default UserUpdatePassword;
