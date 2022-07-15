import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../auth.actions';
import { Input } from '../../shared/components/partials';
import { Button } from '../../shared/components/partials';
import Image from '../../../assets/images';
import { useSelector } from 'react-redux';
import { RootState } from '../../app.reducers';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const dataLoginSuccess = useSelector((state: RootState) => state.login.data);
  const hasError = useSelector((state: RootState) => state.login.hasError);

  const onSubmit = (data: any) => {
    dispatch(signIn({ dataLogin: { ...data } }));
  };

  useEffect(() => {
    if (Object.keys(dataLoginSuccess).length) {
      navigate('/');
    }
    //eslint-disable-next-line
  }, [dataLoginSuccess]);

  return (
    <div className="form-auth row">
      <div className="signup-image col-5">
        <img className="signup-mage-logo" src={Image.Logo} alt="Lotus" />
        <img src={Image.LogoAuth} alt="Sign In Lotus" />
      </div>
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
            isError={!errors.email}
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
            isError={!errors.password}
            errorsMsg="Please enter at least 8 characters."
          />
        </div>
          {hasError && <span className="txt-center txt-demi txt-error">Login failed.</span>}
        <Button classBtn="btn btn-primary btn-auth" text="Sign in" />
        <Link to="/auth" className="tip-link">
          Forgot your password?
        </Link>
        <p className="tip-text">
          Don’t have an account?
          <Link to="/auth/register" className="tip-link"> Sign up </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
