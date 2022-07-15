import axios, { AxiosResponse } from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import { ENDPOINT, environment } from '../../config';
import { signInError, signInSuccess, signUpError, signUpSuccess } from './auth.actions';
import * as TYPES from '.././shared/constants/types';
import { storeData } from '../core/helpers/localstorage';

export function* signUp({ payload }: any) {  
  try {
    const res: AxiosResponse<any> = yield axios.post(
      `${environment.apiBaseUrl}${ENDPOINT.users.register}`, payload.data
    );
    yield put(signUpSuccess(res.data))
  } catch (error) {
    yield put(signUpError(error));
  }
};

export function* signIn({ payload }: any) { 
  try {
    const res: AxiosResponse<any> = yield axios.post(
      `${environment.apiBaseUrl}${ENDPOINT.users.login}`, payload.dataLogin
    );
    // SAVE STORAGE
    storeData('token', res.data.accessToken);
    // lấy thông tin user từ token
    // dispatch action updateUserInfo vào redux
    yield put(signInSuccess(res.data));
  } catch (error) {
    yield put(signInError(error));
  }
};

export function* watchAuth() {
  yield all([
    takeLatest(TYPES.SIGN_UP, signUp),
    takeLatest(TYPES.SIGN_IN, signIn),
  ]);
};
