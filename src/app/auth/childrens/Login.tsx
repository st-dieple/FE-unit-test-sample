import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../../shared/components/partials";
import { Button } from "../../shared/components/partials";
import Image from "../../../assets/images";

const Login = () => {
  return (
    <div className="form-auth row">
      <div className="signup-image col-5">
        <img className="signup-mage-logo" src={Image.Logo} alt="Lotus" />
        <img src={Image.LogoAuth} alt="Sign In Lotus"/>
      </div>
      <form className="form form-signin col-7">
        <h1 className="form-title">Sign In</h1>
        <div className="form-wrapper">
          <Input
            type="text"
            name="email"
            placeholder="Email"
            textLabel="Email"
          />
          <Input
            type="password"
            name="password"
            placeholder="Your Password"
            textLabel="Password"
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
