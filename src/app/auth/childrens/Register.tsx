import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from './../auth.actions';
import { RootState } from '../../app.reducers';
import { Button, Input } from '../../shared/components/partials';
import Image from '../../../assets/images';
import { validateDob } from '../../shared/common/validateDob';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const { data, hasError, isLoading, error } = useSelector(
    (state: RootState) => state.register
  );

  const onSubmit = (data: any) => {
    dispatch(
      signUp({
        data: {
          ...data,
          dob: data.dob.split('-').reverse().join('/'),
        },
      })
    );
  };

  useEffect(() => {
    if(data) {
      navigate('/auth/sign-in');
    }
    // eslint-disable-next-line
  }, [data]);

  return (
    <div className="page-content row">
      <Link to="/" className="page-link page-link-signup col-5">
        <img src={Image.Logo} alt="Lotus" />
        <img src={Image.LogoAuth} alt="Sign In Lotus" />
      </Link>
      <form className="form col-7" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">Sign Up Your Account</h1>
        <div className="form-wrapper">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            textLabel="First Name"
            register={register("firstName", {
              required: true,
              pattern: /^[a-zA-Z]+$/,
            })}
            isError={errors.firstName ? true : false}
            errorsMsg="First name is required."
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            textLabel="Last Name"
            register={register("lastName", {
              required: true,
              pattern: /^[a-zA-Z]+$/,
            })}
            isError={errors.lastName ? true : false}
            errorsMsg="Last name is required."
          />
          <Input
            type="text"
            name="displayName"
            placeholder="User Name"
            textLabel="User Name"
            register={register("displayName", {
              required: true,
              pattern: /^[a-zA-Z0-9]+$/,
            })}
            isError={errors.displayName ? true : false}
            errorsMsg="User name is required."
          />
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
              getValues("email") ? "invalid." : "required."
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
          <Input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            textLabel="Date of Birth"
            register={register("dob", {
              required: 'required',
              validate: validateDob,
            })}
            isError={errors.dob ? true : false}
            errorsMsg={`Date of birth is ${errors.dob && errors.dob.message}.`}
          />
          <div className="form-group input-group">
            <select
              className="form-control form-gender"
              {...register("gender", { required: true })}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label className="label">Gender</label>
          </div>
        </div>
        {hasError && (
          <div className="error-box">
            <span className="txt-center txt-error">
              {error.response.data.errors}
            </span>
          </div>
        )}
        <div className="form-btn">
          <Button classBtn="btn btn-primary btn-auth" text="Sign up" isLoading={isLoading}/>
        </div>
        <p className="tip-text">
          Already have an account?
          <Link to="/auth/sign-in" className="tip-link"> Sign In </Link>
        </p>
        <p className="tip-text">
          By signing up, you confirm that you've read and accepted our
          <Link to="/" className="tip-link"> Terms of Service </Link>
          and
          <Link to="/" className="tip-link"> Privacy Policy </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
