import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../../shared/components/partials";
import { Button } from "../../shared/components/partials";
import Image from "../../../assets/images";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data: any) => {};

  return (
    <div className="form-auth row">
      <div className="signup-image col-5">
        <img className="signup-mage-logo" src={Image.Logo} alt="Lotus" />
        <img src={Image.LogoAuth} alt="Sign In Lotus"/>
      </div>
      <form className="form form-signin col-7" onSubmit={handleSubmit(onSubmit)}>
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
        <Button classBtn="btn btn-primary btn-auth" text="Sign in" />
        <Link to="/auth" className="tip-link">Forgot your password?</Link>
        <p className="tip-text">
          Don’t have an account?
          <Link to="/auth/register" className="tip-link"> Sign up </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
