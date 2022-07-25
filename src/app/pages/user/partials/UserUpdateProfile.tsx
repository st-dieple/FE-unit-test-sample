import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../../shared/components/partials';
import Image from '../../../../assets/images';

const UserUpdateProfile = () => {
  const { register } = useForm();

  return (
    <div className="update-user">
      <h2 className="update-user-title">Update profile</h2>
      <form className="update-form">
        <div className="update-avatar">
          <div className="update-avatar-image">
            <img src={Image.Avatar} alt="" />
          </div>
          <input type="file" className="update-file" id="update-file" />
          <label htmlFor="update-file" className="update-file-label">
            <i className="fa-solid fa-camera-rotate"></i>
          </label>
        </div>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          textLabel="First Name"
          register={register("firstName")}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          textLabel="Last Name"
          register={register("lastName")}
        />
        <Input
          type="text"
          name="displayName"
          placeholder="User Name"
          textLabel="User Name"
          register={register("displayName")}
        />
        <div className="update-gender">
          <label htmlFor="male" className="update-gender-label">
            <input
              {...register("gender")}
              type="radio"
              name="gender"
              value="male"
              id="male"
            />
            Male
            <span className="checkmark"></span>
          </label>
          <label htmlFor="female" className="update-gender-label">
            <input
              {...register("gender")}
              type="radio"
              name="gender"
              value="female"
              id="female"
            />
            Female
            <span className="checkmark"></span>
          </label>
        </div>
        <Input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          textLabel="Date of Birth"
          register={register("dob")}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Phone"
          textLabel="Phone"
          register={register("phone")}
        />
        <Button classBtn="btn btn-primary update-btn" text="Update" />
      </form>
    </div>
  );
};

export default UserUpdateProfile;
