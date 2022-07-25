import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Input } from "../../../shared/components/partials";
import Image from "../../../../assets/images";
import { validateDob } from "../../../shared/common/validateDob";
import { RootState } from "../../../app.reducers";
import Loading from "../../../shared/components/partials/Loading";

const UserUpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState<string>(Image.Avatar);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { data: dataUser, isLoading } = useSelector(
    (state: RootState) => state.users
  ); 

  useEffect(() => {
    if(Object.keys(dataUser).length) {
      const dobFormat = dataUser?.dob.split('/').reverse().join('-');
      setValue('picture', dataUser?.picture);
      setValue('firstName', dataUser?.firstName);
      setValue('lastName', dataUser?.lastName);
      setValue('displayName', dataUser?.displayName);
      setValue('phone', dataUser?.phone);
      setValue('dob', dobFormat);
      setValue('gender', dataUser?.gender);
    }
  }, [dataUser]);

  const onSubmit = (data: any) => {
    
  };

  const handleChangeAvatar = (e: any) => {
    const file = e.target.files[0];
    setAvatar(URL.createObjectURL(file));
  };

  if (isLoading) return <Loading />;
  return (
    <div className="update-user">
      <h2 className="update-user-title">Update profile</h2>
      <form className="update-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="update-avatar">
          <div className="update-avatar-image">
            <img src={avatar} alt="" />
          </div>
          <input
            type="file"
            className="update-file"
            id="update-file"
            {...register("picture")}
            onChange={handleChangeAvatar}
            accept="image/png, image/jpeg"
          />
          <label htmlFor="update-file" className="update-file-label">
            <i className="fa-solid fa-camera-rotate"></i>
          </label>
        </div>
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
              maxLength: 20,
            })}
            isError={errors.displayName ? true : false}
            errorsMsg="User name is required."
          />
          <Input
            type="text"
            name="phone"
            placeholder="Phone"
            textLabel="Phone"
            register={register("phone")}
          />
          <Input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            textLabel="Date of Birth"
            register={register("dob", {
              required: "required",
              validate: validateDob,
            })}
            isError={errors.dob ? true : false}
            errorsMsg={`Date of birth is ${errors.dob && errors.dob.message}.`}
          />
          <div className="update-gender">
            <label htmlFor="male" className="update-gender-label">
              <input
                {...register("gender", { required: true })}
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
                {...register("gender", { required: true })}
                type="radio"
                name="gender"
                value="female"
                id="female"
              />
              Female
              <span className="checkmark"></span>
            </label>
            <label htmlFor="other" className="update-gender-label">
              <input
                {...register("gender", { required: true })}
                type="radio"
                name="gender"
                value="other"
                id="other"
              />
              Other
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <Button classBtn="btn btn-primary update-btn" text="Update" />
      </form>
    </div>
  );
};

export default UserUpdateProfile;
