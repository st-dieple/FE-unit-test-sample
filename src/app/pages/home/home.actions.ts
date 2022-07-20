import * as TYPES from '../../shared/constants/types';

export const getPosts = (payload : any) => ({
  type: TYPES.GET_POSTS,
  payload
});

export const getPostsSuccess = (posts: any) => ({
  type: TYPES.GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsError = (error: any) => ({
  type: TYPES.GET_POSTS_ERROR,
  payload: error,
});

export const createPost = (payload: any) => ({
  type: TYPES.CREATE_POST,
  payload
});

export const createPostSuccess = (post: any) => ({
  type: TYPES.CREATE_POST_SUCCESS,
  payload: post
});

export const createPostErorr = (error: any) => ({
  type: TYPES.CREATE_POST_ERROR,
  payload: error
});
