import * as TYPES from '../../shared/constants/types';

export const getPostById = (payload : any) => ({
  type: TYPES.GET_POST_BY_ID,
  payload
});

export const getPostByIdSuccess = (posts: any) => ({
  type: TYPES.GET_POST_BY_ID_SUCCESS,
  payload: posts,
});

export const getPostByIdError = (error: any) => ({
  type: TYPES.GET_POST_BY_ID_ERROR,
  payload: error,
});

export const getComment = (payload : any) => ({
  type: TYPES.GET_COMMENT,
  payload
});

export const getCommentSuccess = (posts: any) => ({
  type: TYPES.GET_COMMENT_SUCCESS,
  payload: posts,
});

export const getCommentError = (error: any) => ({
  type: TYPES.GET_COMMENT_ERROR,
  payload: error,
});

