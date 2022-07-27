import axios, { AxiosResponse } from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import { ENDPOINT, environment } from '../../config';
import {
  signInError,
  signInSuccess,
  signOutError,
  signOutSuccess,
  signUpError,
  signUpSuccess,
} from './auth.actions';
import * as TYPES from '.././shared/constants/types';
import { getData, storeData } from '../core/helpers/localstorage';

export function* signUp({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield axios.post(
      `${environment.apiBaseUrl}${ENDPOINT.users.register}`,
      payload.data
    );
    yield put(signUpSuccess(res.data));
  } catch (error) {
    yield put(signUpError(error));
  }
}

export function* signIn({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield axios.post(
      `${environment.apiBaseUrl}${ENDPOINT.users.login}`,
      payload.dataLogin
    );

    storeData('token', res.data.accessToken);
    yield put(signInSuccess(res.data));
  } catch (error) {
    yield put(signInError(error));
  }
}

export function* signOut() {
  try {
    const token = getData('token', '');
    const res: AxiosResponse<any> = yield axios.post(
      `${environment.apiBaseUrl}${ENDPOINT.users.logout}`,
      '',
      { headers: { Authorization: `Bearer ${token}` } }
    );
    yield put(signOutSuccess(res.data));
  } catch (error) {
    yield put(signOutError(error));
  }
}

export function* watchAuth() {
  yield all([
    takeLatest(TYPES.SIGN_UP, signUp),
    takeLatest(TYPES.SIGN_IN, signIn),
    takeLatest(TYPES.SIGN_OUT, signOut),
  ]);
}
