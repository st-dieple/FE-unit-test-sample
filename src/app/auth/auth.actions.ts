import * as TYPES from '.././shared/constants/types';

export const signUp = (payload: any) => ({
  type: TYPES.SIGN_UP,
  payload
});

export const signUpSuccess = (data: any) => ({
  type: TYPES.SIGN_UP_SUCCESS,
  payload: data
});

export const signUpError = (error: any) => ({
  type: TYPES.SIGN_UP_ERROR,
  payload: error
});

export const signIn = (payload: any) => ({
  type: TYPES.SIGN_IN,
  payload
});

export const signInSuccess = (data: any) => ({
  type: TYPES.SIGN_IN_SUCCESS,
  payload: data
});

export const signInError = (error: any) => ({
  type: TYPES.SIGN_IN_ERROR,
  payload: error
});

export const signOut = () => ({
  type: TYPES.SIGN_OUT
});

export const signOutSuccess = (data: any) => ({
  type: TYPES.SIGN_OUT_SUCCESS,
  payload: data
});

export const signOutError = (error: any) => ({
  type: TYPES.SIGN_OUT_ERROR,
  payload: error
});
