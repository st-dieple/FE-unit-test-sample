import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import { getPostsSuccess, getPostsError, createPostSuccess, createPostErorr, updatePostSuccess, updatePostErorr, deletePostSuccess, deletePostErorr } from './home.actions';
import * as TYPES from '../../shared/constants/types';
import { ArticleService } from '../../core/serivces/article.service';
import { getData } from '../../core/helpers/localstorage';

const articleService = new ArticleService();
export function* getPublicPosts({ payload }: any ) {
  try {
    const res: AxiosResponse<any> = yield articleService.getPublicPosts(payload)
    yield put(getPostsSuccess(res));
  } catch (error) {
    yield put(getPostsError(error));
  }
};

export function* getPosts({ payload }: any ) {
  try {
    const res: AxiosResponse<any> = yield articleService.getPosts(payload)
    yield put(getPostsSuccess(res));
  } catch (error) {
    yield put(getPostsError(error));
  }
};


export function* createPost({ payload }: any ) {
  try {
    const res: AxiosResponse<any> = yield articleService.createArticle(payload);
    yield put(createPostSuccess(res));
  } catch (error) {
    yield put(createPostErorr(error));
  }
};

export function* updatePost({ payload }: any ) {
  try {
    const res: AxiosResponse<any> = yield articleService.updateArticle(payload.id, payload.data);
    yield put(updatePostSuccess(res));
  } catch (error) {
    yield put(updatePostErorr(error));
  }
};

export function* deletePost({ payload }: any ) {
  try {
    yield articleService.deleteArticle(payload.id);
    yield put(deletePostSuccess(payload));
  } catch (error) {
    yield put(deletePostErorr(error));
  }
};

export function* watchHome() {
  yield all([
    takeLatest(TYPES.GET_POSTS, getPosts), 
    takeLatest(TYPES.GET_PUBLIC_POSTS, getPublicPosts), 
    takeLatest(TYPES.CREATE_POST, createPost),  
    takeLatest(TYPES.UPDATE_POST, updatePost), 
    takeLatest(TYPES.DELETE_POST, deletePost)
  ]);
};
