import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import { getData } from '../../core/helpers/localstorage';
import * as TYPES from '../../shared/constants/types';
import {
  getAuthorsInfoSuccess,
  getAuthorsInfoError,
} from './posts.actions';
import { environment, ENDPOINT } from '../../../config';

export function* getAuthorsInfo({ payload }: any) {
  const tokẹn = getData('token', '');
  let config: any;
  if (tokẹn) {
    config = {
      headers: {
        Authorization: `Bearer ${tokẹn}`,
      },
    };
  }
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.users.index}/${payload.id}`,
      config
    );
    yield put(getAuthorsInfoSuccess(res.data));
  } catch (error) {
    yield put(getAuthorsInfoError(error));
  }
}

export function* watchPost() {
  yield all([
    takeLatest(TYPES.GET_AUTHOR_INFO, getAuthorsInfo)
  ]);
}
