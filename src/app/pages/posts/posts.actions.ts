import * as TYPES from '../../shared/constants/types';

export const getAuthorsInfo = (payload: any) => ({
  type: TYPES.GET_AUTHOR_INFO,
  payload,
});

export const getAuthorsInfoSuccess = (authors: any) => ({
  type: TYPES.GET_AUTHOR_INFO_SUCCESS,
  payload: authors,
});

export const getAuthorsInfoError = (error: any) => ({
  type: TYPES.GET_AUTHOR_INFO_ERROR,
  payload: error,
});

export const deletePost = (payload: any) => ({
  type: TYPES.DELETE_POST,
  payload,
});

export const deletePostSuccess = (data: any) => ({
  type: TYPES.DELETE_POST_SUCCESS,
  payload: data,
});

export const deletePostErorr = (error: any) => ({
  type: TYPES.DELETE_POST_ERROR,
  payload: error,
});
