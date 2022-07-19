import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import {
  getPostByIdSuccess,
  getPostByIdError,
  getPostsRecommendSuccess,
  getPostsRecommendError,
  getCommentSuccess, 
  getCommentError,
  postCommentSuccess,
  postCommentError
} from './article.actions';
import { environment, ENDPOINT } from '../../../config';
import * as TYPES from '../../shared/constants/types';
import { getData } from '../../core/helpers/localstorage';

export function* getPostById({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}`
    );
    yield put(getPostByIdSuccess(res.data));
  } catch (error) {
    yield put(getPostByIdError(error));
  };
};

export function* getPostsRecommend({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.recommend}?page=${payload.page}&size=${payload.size}`
    );
    yield put(getPostsRecommendSuccess(res.data.data));
  } catch (error) {
    yield put(getPostsRecommendError(error));
  };
};

export function* getComment({ payload }: any ) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}/comments`
      );
    yield put(getCommentSuccess(res.data));
  } catch (error) {
    yield put(getCommentError(error));
  }
};

export function* postComment({ payload }: any ) {
  try {
    const res: AxiosResponse<any> = yield axios.post(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}/comments`
      );
    yield put(postCommentSuccess(res.data));
  } catch (error) {
    yield put(postCommentError(error));
  }
};

export function* watchArticles() {
  yield all([
    takeLatest(TYPES.GET_POST_BY_ID, getPostById),
    takeLatest(TYPES.GET_POSTS_RECOMMEND, getPostsRecommend),
    takeLatest(TYPES.GET_COMMENT, getComment), 
    takeLatest(TYPES.POST_COMMENT, postComment),
  ]);
};
