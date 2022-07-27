import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { SignaturesService } from './../../../core/serivces/signatures.service';
import { RootState } from '../../../app.reducers';
import { updateProfileUser } from '../user.actions';
import { Button, Input } from '../../../shared/components/partials';
import { validateDob } from '../../../shared/common/validateDob';
import Image from '../../../../assets/images';
import Loading from '../../../shared/components/partials/Loading';
import Toast from '../../../shared/components/partials/Toast';

const signaturesService = new SignaturesService();
const UserUpdateProfile = () => {
  const dispatch = useDispatch();
  const [toast, setToast] = useState<any>({
    hasLoading: false,
    type: '',
    title: '',
  });
  const [avatar, setAvatar] = useState<string>(Image.Avatar);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const {
    data: dataUser,
    isLoading,
    hasError,
    error,
    isLoadingUpdate
  } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (Object.keys(dataUser).length) {
      const dobFormat = dataUser?.dob.split('/').reverse().join('-');
      setValue('picture', dataUser?.picture);
      setValue('firstName', dataUser?.firstName);
      setValue('lastName', dataUser?.lastName);
      setValue('displayName', dataUser?.displayName);
      setValue('phone', dataUser?.phone);
      setValue('dob', dobFormat);
      setValue('gender', dataUser?.gender);
      setAvatar(dataUser?.picture);
    }
  }, [dataUser]);

  const onSubmit = (data: any) => {
    if(!isLoadingUpdate) {
      dispatch(
        updateProfileUser({
          data: {
            ...data,
            dob: data.dob.split('-').reverse().join('/'),
          },
          resolve: setSuccessUpdate
        })
      );
    }
  };

  const setSuccessUpdate = () => {
    setToast({
      hasLoading: true,
      type: 'success',
      title: 'Update profile successfully.',
    });
  }

  const handleChangeAvatar = (e: any) => {
    const file = e.target.files[0];
    const payload = {
      type_upload: 'avatar',
      file_name: file.name,
      file_type: file.type,
    };
    try {
      signaturesService.getSignatures(payload).then(async (data: any) => {
        setValue('picture', data.url);
        await signaturesService.uploadImage(data, file);
      });
    } catch (err) {
      const myTimeout = setTimeout(() => {
        setToast({
          hasLoading: true,
          type: 'error',
          title: 'Update profile successfully.',
        });
      }, 500);
      return () => {
        clearTimeout(myTimeout);
      };
    }
    setAvatar(URL.createObjectURL(file));
  };

  if (isLoading) return <Loading />;
  return (
    <>
      {toast.hasLoading && <Toast type={toast.type} title={toast.title} />}
      <div className="update-user">
        <h2 className="update-user-title">Update profile</h2>
        <form className="update-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="update-avatar">
            <div className="update-avatar-image">
              <img
                src={avatar || Image.Avatar}
                alt={dataUser.displayName}
                onError={(e: any) => {
                  e.target['onerror'] = null;
                  e.target['src'] = Image.Avatar;
                }}
              />
            </div>
            <input
              type="file"
              className="update-file"
              id="update-file"
              {...register('picture')}
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
              register={register('firstName', {
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
              register={register('lastName', {
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
              register={register('displayName', {
                required: true,
                pattern: /[A-Za-z0-9_'-]/,
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
              register={register('phone', {
                pattern: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
              })}
              isError={errors.phone ? true : false}
              errorsMsg="Phone is invalid."
            />
            <Input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              textLabel="Date of Birth"
              register={register('dob', {
                required: 'required',
                validate: validateDob,
              })}
              isError={errors.dob ? true : false}
              errorsMsg={`Date of birth is ${
                errors.dob && errors.dob.message
              }.`}
            />
            <div className="update-gender">
              <label htmlFor="male" className="update-gender-label">
                <input
                  {...register('gender', { required: true })}
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
                  {...register('gender', { required: true })}
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
                  {...register('gender', { required: true })}
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
          {hasError && (
            <div className="error-box">
              <span className="txt-center txt-error">
                {error.response.data.errors}
              </span>
            </div>
          )}
          <Button classBtn="btn btn-primary update-btn" text="Update" isLoading={isLoadingUpdate}/>
        </form>
      </div>
    </>
  );
};

export default UserUpdateProfile;
