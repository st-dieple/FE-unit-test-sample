import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import { getPostByIdSuccess, getPostByIdError, getCommentSuccess, getCommentError } from './article.actions';
import { environment, ENDPOINT } from '../../../config';
import * as TYPES from '../../shared/constants/types';


export function* getPostById({ payload }: any ) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}`
    );
    yield put(getPostByIdSuccess(res.data));
  } catch (error) {
    yield put(getPostByIdError(error));
  }
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

export function* watchArticles() {
  yield all([
    takeLatest(TYPES.GET_POST_BY_ID, getPostById),
    takeLatest(TYPES.GET_COMMENT, getComment),  
  ]);
};
