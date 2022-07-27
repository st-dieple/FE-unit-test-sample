import * as TYPES from '../../shared/constants/types';

export const getPostById = (payload: any) => ({
  type: TYPES.GET_POST_BY_ID,
  payload,
});

export const getPostByIdSuccess = (posts: any) => ({
  type: TYPES.GET_POST_BY_ID_SUCCESS,
  payload: posts,
});

export const getPostByIdError = (error: any) => ({
  type: TYPES.GET_POST_BY_ID_ERROR,
  payload: error,
});

export const resetPostDetailData = () => ({
  type: TYPES.RESET_POST_DETAIL_DATA,
});

export const getPostsRecommend = (payload: any) => ({
  type: TYPES.GET_POSTS_RECOMMEND,
  payload,
});

export const getPostsRecommendSuccess = (payload: any) => ({
  type: TYPES.GET_POSTS_RECOMMEND_SUCCESS,
  payload,
});

export const getPostsRecommendError = (payload: any) => ({
  type: TYPES.GET_POSTS_RECOMMEND_ERROR,
  payload,
});

export const getComment = (payload: any) => ({
  type: TYPES.GET_COMMENT,
  payload,
});

export const getCommentSuccess = (posts: any) => ({
  type: TYPES.GET_COMMENT_SUCCESS,
  payload: posts,
});

export const getCommentError = (error: any) => ({
  type: TYPES.GET_COMMENT_ERROR,
  payload: error,
});

export const postComment = (payload: any) => ({
  type: TYPES.POST_COMMENT,
  payload,
});

export const postCommentSuccess = (posts: any) => ({
  type: TYPES.POST_COMMENT_SUCCESS,
  payload: posts,
});

export const postCommentError = (error: any) => ({
  type: TYPES.POST_COMMENT_ERROR,
  payload: error,
});

export const getLike = (payload: any) => ({
  type: TYPES.GET_LIKE,
  payload,
});

export const getLikeSuccess = (posts: any) => ({
  type: TYPES.GET_LIKE_SUCCESS,
  payload: posts,
});

export const getLikeError = (error: any) => ({
  type: TYPES.GET_LIKE_ERROR,
  payload: error,
});

export const putLike = (payload: any) => ({
  type: TYPES.PUT_LIKE,
  payload,
});

export const putLikeSuccess = (posts: any) => ({
  type: TYPES.PUT_LIKE_SUCCESS,
  payload: posts,
});

export const putLikeError = (error: any) => ({
  type: TYPES.PUT_LIKE_ERROR,
  payload: error,
});

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

export const getPosts = (payload: any) => ({
  type: TYPES.GET_POSTS,
  payload,
});

export const getPostsSuccess = (posts: any) => ({
  type: TYPES.GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsError = (error: any) => ({
  type: TYPES.GET_POSTS_ERROR,
  payload: error,
});

export const getPublicPosts = (payload: any) => ({
  type: TYPES.GET_PUBLIC_POSTS,
  payload,
});

export const getPublicPostsSuccess = (posts: any) => ({
  type: TYPES.GET_PUBLIC_POSTS_SUCCESS,
  payload: posts,
});

export const getPublicPostsError = (error: any) => ({
  type: TYPES.GET_PUBLIC_POSTS_ERROR,
  payload: error,
});

export const createPost = (payload: any) => ({
  type: TYPES.CREATE_POST,
  payload,
});

export const createPostSuccess = (post: any) => ({
  type: TYPES.CREATE_POST_SUCCESS,
  payload: post,
});

export const createPostErorr = (error: any) => ({
  type: TYPES.CREATE_POST_ERROR,
  payload: error,
});

export const updatePost = (payload: any) => ({
  type: TYPES.UPDATE_POST,
  payload,
});

export const updatePostSuccess = (data: any) => ({
  type: TYPES.UPDATE_POST_SUCCESS,
  payload: data,
});

export const updatePostErorr = (error: any) => ({
  type: TYPES.UPDATE_POST_ERROR,
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
