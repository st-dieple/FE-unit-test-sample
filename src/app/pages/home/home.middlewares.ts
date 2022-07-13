import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import {
  getPostsSuccess,
  getPostsError
} from './home.actions';
import { enviroment, ENDPOINT } from '../../../config';
import * as TYPES from '../../shared/constants/types';


export function* getPosts({ payload }: any ) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${enviroment.apiBaseUrl}${ENDPOINT.posts.public}?page=${payload.page}&size=${payload.size}`
    );
    yield put(getPostsSuccess(res.data.data));
  } catch (error) {
    yield put(getPostsError(error));
  }
}

export function* watchHome() {
  yield all([
    takeLatest(TYPES.GET_POSTS, getPosts),  
  ]);
};
