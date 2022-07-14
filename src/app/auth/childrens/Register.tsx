import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Input } from '../../shared/components/partials';
import Image from '../../../assets/images';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSubmit = (data: any) => {};

  return (
    <div className="form-auth row">
      <div className="signup-image col-5">
        <img className="signup-mage-logo" src={Image.Logo} alt="Lotus" />
        <img src={Image.LogoAuth} alt="Sign In Lotus" />
      </div>
      <form className="form col-7" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">Sign Up Your Account</h1>
        <div className="form-wrapper">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            textLabel="First Name"
            register={register("firstName", { required: true })}
            isError={!errors.firstName}
            errorsMsg="First name is required."
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            textLabel="Last Name"
            register={register("lastName", { required: true })}
            isError={!errors.lastName}
            errorsMsg="Last name is required."
          />
          <Input
            type="text"
            name="displayName"
            placeholder="User Name"
            textLabel="User Name"
            register={register("displayName", { required: true })}
            isError={!errors.displayName}
            errorsMsg="Display name is required."
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
            isError={!errors.email}
            errorsMsg={`Email address is ${getValues("email") ? "valid" : "required"}`}
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
          <Input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            textLabel="Date of Birth"
            register={register("dob", { required: true })}
            isError={!errors.dob}
            errorsMsg="Date of birth is required."
          />
          <div className="form-group">
            <select
              className="form-control form-gender"
              {...register("render", { required: true })}
            >
              <option disabled>Please Choose Genders</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <label className="label">Gender</label>
          </div>
        </div>
        <Button classBtn="btn btn-primary btn-auth" text="Sign up" />
        <p className="tip-text">
          Already have an account?
          <Link to="/auth" className="tip-link">
            Sign In
          </Link>
        </p>
        <p className="tip-text">
          By signing up, you confirm that you've read and accepted our
          <Link to="/" className="tip-link">
            Terms of Service
          </Link>
          and
          <Link to="/" className="tip-link">
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
