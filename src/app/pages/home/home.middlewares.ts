import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import { getPostsSuccess, getPostsError, createPostSuccess, createPostErorr, updatePostSuccess, updatePostErorr, deletePostSuccess, deletePostErorr } from './home.actions';
import { environment, ENDPOINT } from '../../../config';
import * as TYPES from '../../shared/constants/types';
import { ArticleService } from '../../core/serivces/article.service';

const articleService = new ArticleService();
export function* getPosts({ payload }: any ) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.public}?page=${payload.page}&size=${payload.size}`
    );
    yield put(getPostsSuccess(res.data.data));
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
    const res: AxiosResponse<any> = yield articleService.deleteArticle(payload.id);
    yield put(deletePostSuccess(res));
  } catch (error) {
    yield put(deletePostErorr(error));
  }
};

export function* watchHome() {
  yield all([
    takeLatest(TYPES.GET_POSTS, getPosts),  
    takeLatest(TYPES.CREATE_POST, createPost),  
    takeLatest(TYPES.UPDATE_POST, updatePost), 
    takeLatest(TYPES.DELETE_POST, deletePost)
  ]);
};
