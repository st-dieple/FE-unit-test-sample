import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import { getPostsSuccess, getPostsError } from './home.actions';
import { environment, ENDPOINT } from '../../../config';
import * as TYPES from '../../shared/constants/types';
import { getData } from '../../core/helpers/localstorage';


export function* getPosts({ payload }: any ) {
  const token = getData('token', '');
  let endPoint = '';
  if (token) {
    endPoint = ENDPOINT.posts.index;
  }else {
    endPoint = ENDPOINT.posts.public;
  }
  try {
    const res: AxiosResponse<any> = yield axios.get(`${environment.apiBaseUrl}${endPoint}?page=${payload.page}&size=${payload.size}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    yield put(getPostsSuccess(res.data.data));
  } catch (error) {
    yield put(getPostsError(error));
  }
};

export function* watchHome() {
  yield all([
    takeLatest(TYPES.GET_POSTS, getPosts),  
  ]);
};
