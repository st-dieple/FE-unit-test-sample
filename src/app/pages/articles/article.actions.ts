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

export const getPostsRecommend= (payload : any) => ({
  type: TYPES.GET_POSTS_RECOMMEND,
  payload
});

export const getPostsRecommendSuccess = (payload : any) => ({
  type: TYPES.GET_POSTS_RECOMMEND_SUCCESS,
  payload
});

export const getPostsRecommendError = (payload : any) => ({
  type: TYPES.GET_POSTS_RECOMMEND_ERROR,
  payload
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

export const postComment = (payload : any) => ({
  type: TYPES.POST_COMMENT,
  payload
});

export const postCommentSuccess = (posts: any) => ({
  type: TYPES.POST_COMMENT_SUCCESS,
  payload: posts,
});

export const postCommentError = (error: any) => ({
  type: TYPES.POST_COMMENT_ERROR,
  payload: error,
});
