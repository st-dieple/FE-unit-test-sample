import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Input } from '../../shared/components/partials';
import { Button } from '../../shared/components/partials';
import Image from '../../../assets/images';
import { AuthService } from '../../core/serivces/auth.service';
import { storeData } from '../../core/helpers/localstorage';
import { getUserInfo } from '../../pages/user/user.actions';

const authService = new AuthService();
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [ isRequestingAPI, setIsRequestingAPI ] = useState<boolean>(false);
  const [ error, setError ] = useState('');

  const onSubmit = (data: any) => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      authService
        .signIn(data)
        .then((res: any) => {
          setIsRequestingAPI(false);
          storeData('token', res.accessToken);
          dispatch(getUserInfo({ id: res.userInfo.id }));
          navigate('/');
        })
        .catch((error: any) => {
          setIsRequestingAPI(false);
          setError(error.response.data?.errors);
        });
    }
  };

  return (
    <div className="page-content row">
      <Link to="/" className="page-link col-5">
        <img src={Image.Logo} alt="Lotus" />
        <img src={Image.LogoAuth} alt="Sign In Lotus" />
      </Link>
      <form
        className="form form-signin col-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="form-title">Sign In</h1>
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
        </div>
          {error && (
            <div className="error-box">
              <span className="txt-center txt-error">
                {error}
              </span>
            </div>
          )}
        <div className="form-btn">
          <Button classBtn="btn btn-primary btn-auth" text="Sign in" isLoading={isRequestingAPI} />
        </div>
        <Link to="/" className="tip-link">
          Forgot your password?
        </Link>
        <p className="tip-text">
          Don’t have an account?
          <Link to="/auth/sign-up" className="tip-link"> Sign up </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
