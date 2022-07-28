import * as TYPES from '../../shared/constants/types';

export const getUserInfo = (payload: any) => ({
  type: TYPES.GET_USER_INFO,
  payload,
});

export const getUserInfoSuccess = (data: any) => ({
  type: TYPES.GET_USER_INFO_SUCCESS,
  payload: data,
});

export const getUserInfoError = (error: any) => ({
  type: TYPES.GET_USER_INFO_ERROR,
  payload: error,
});

export const getUserPosts = (payload: any) => ({
  type: TYPES.GET_USER_POST,
  payload,
});

export const getUserPostsSuccess = (data: any) => ({
  type: TYPES.GET_USER_POST_SUCCESS,
  payload: data,
});

export const getUserPostsError = (error: any) => ({
  type: TYPES.GET_USER_POST_ERROR,
  payload: error,
});

export const clearUserInfo = () => ({
  type: TYPES.CLEAR_USER_INFO,
});
