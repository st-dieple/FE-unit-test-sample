import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../../auth/auth.actions';
import { RootState } from '../../../app.reducers';
import { useDialog } from './../../contexts/dialog.contexts';
import { Input } from './Input';
import { Button } from './Button';
import Image from '../../../../assets/images';

const PopUpLogin = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dialog = useDialog();

  const { data, hasError, isLoading, error } = useSelector(
    (state: RootState) => state.login
  );

  const onSubmit = (data: any) => {
    dispatch(signIn({ dataLogin: { ...data } }));
  };

  useEffect(() => {
    if (Object.keys(data).length) {
      dialog?.closeDialog();
      navigate('/');
    }
  }, [data]);

  return (
    <form className="popup-login" onSubmit={handleSubmit(onSubmit)}>
      <div className="popup-login-header">
        <h1 className="popup-login-title">Welcome to</h1>
        <div className="popup-login-image">
          <img src={Image.Logo} alt="Lotus" />
        </div>
      </div>
      <div className="form-wrapper">
        <Input
          type="text"
          name="email"
          placeholder="Email"
          textLabel="Email"
          register={register("email", {
            required: true,
            pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
          })}
          isError={errors.email ? true : false}
          errorsMsg={`Email address is ${
            getValues("email") ? "valid" : "required"
          }`}
        />
        <Input
          type="password"
          name="password"
          placeholder="Your Password"
          textLabel="Password"
          register={register("password", {
            required: true,
            minLength: 8,
            maxLength: 20,
          })}
          isError={errors.password ? true : false}
          errorsMsg="Please enter at least 8 characters."
        />
        {hasError && (
          <div className="error-box">
            <span className="txt-center txt-error">
              {error.response.data.errors}
            </span>
          </div>
        )}
      </div>
      <div className="form-btn">
        <Button
          classBtn="btn btn-primary popup-login-btn"
          text="Sign in"
          isLoading={isLoading}
        />
      </div>
      <Link to="/" className="tip-link">
        Forgot your password?
      </Link>
      <p className="tip-text">
        Don’t have an account?
        <Link to="/auth/sign-up" className="tip-link"> Sign up </Link>
      </p>
    </form>
  );
};

export default PopUpLogin;
