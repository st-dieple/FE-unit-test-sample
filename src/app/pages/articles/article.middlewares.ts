import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import {
  getPostByIdSuccess,
  getPostByIdError,
  getPostsRecommendSuccess,
  getPostsRecommendError,
} from './article.actions';
import { environment, ENDPOINT } from '../../../config';
import * as TYPES from '../../shared/constants/types';

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

export function* watchArticles() {
  yield all([
    takeLatest(TYPES.GET_POST_BY_ID, getPostById),
    takeLatest(TYPES.GET_POSTS_RECOMMEND, getPostsRecommend)
  ]);
};
