import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import {
  getPostByIdSuccess,
  getPostByIdError,
  getPostsRecommendSuccess,
  getPostsRecommendError,
  getCommentSuccess, 
  getCommentError,
  getImageURLSuccess,
  getImageURLError
} from './article.actions';
import { environment, ENDPOINT } from '../../../config';
import { getData } from '../../core/helpers/localstorage';
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

export function* getImageURL({ payload }: any) {   
  const token = getData('token', '');
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.signatures.index}?type_upload=${payload.type_upload}&file_name=${payload.file_name}&file_type=${payload.file_type}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(getImageURLSuccess(res.data));
  } catch (error) {
    yield put(getImageURLError(error));
  };
};

export function* watchArticles() {
  yield all([
    takeLatest(TYPES.GET_POST_BY_ID, getPostById),
    takeLatest(TYPES.GET_POSTS_RECOMMEND, getPostsRecommend),
    takeLatest(TYPES.GET_COMMENT, getComment),
    takeLatest(TYPES.GET_IMAGE_URL, getImageURL)  
  ]);
};
