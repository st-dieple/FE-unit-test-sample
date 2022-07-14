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
