import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from '../../../assets/images';
import { Button, Input } from '../../shared/components/partials';
import { ISignUp } from '../../shared/interfaces/register';
import { signUp } from '../auth.actions';

const Register = () => {
  const dispatch = useDispatch();
  const onSignUp = (data : any) => {
    console.log(data); 
    dispatch(signUp(data))
  }
  const {handleSubmit, register} = useForm();
  return (
      <div className="form-auth row">
        <div className="signup-image col-5">
          <img className="signup-mage-logo" src={Image.Logo} alt="Lotus" />
          <img src={Image.LogoAuth} alt="Sign In Lotus" />
        </div>
        <form className="form col-7" onSubmit={handleSubmit(onSignUp)}>
          <h1 className="form-title">
            Sign Up Your Account
          </h1>
          <div className="form-group">
            <Input type="text" name="firstname" placeholder="First Name" textLabel="First Name" register={register("firstname")}/>
            <Input type="text" name="lastname" placeholder="Last Name" textLabel="Last Name" register={register("lastname")}/>
            <Input type="text" name="username" placeholder="User Name" textLabel="User Name" register={register("username")}/>
            <Input type="email" name="email" placeholder="Email" textLabel="Email" register={register("email")}/>
            <Input type="password" name="password" placeholder="Your Password" textLabel="Password" register={register("password")}/>
            <Input type="date" name="dob" placeholder="Date of Birth" textLabel="Date of Birth" register={register("dob")}/>
            <div className="input-group">
              <select className="form-control form-gender" {...register("gender")}>
                <option>Please choose gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <label className="label">Gender</label>
            </div>
          </div>
          <Button classBtn="btn btn-primary btn-auth" text="Sign up"/>
          <p className="tip-text">
            Already have an account?
            <Link to="/auth" className="tip-link"> Sign In</Link>
          </p>
          <p className="tip-text">
            By signing up, you confirm that you've read and accepted our
            <Link to="/" className="tip-link"> Terms of Service </Link>
            and 
            <Link to="/" className="tip-link"> Privacy Policy</Link>
          </p>
        </form>
      </div>
  );
};

export default Register;
