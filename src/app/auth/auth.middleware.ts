import { all, put, takeLatest } from 'redux-saga/effects';
import {
  signInError,
  signInSuccess,
  signOutError,
  signOutSuccess,
  signUpError,
  signUpSuccess,
} from './auth.actions';
import { AuthService } from '../core/serivces/auth.service';
import * as TYPES from '.././shared/constants/types';
import { storeData } from '../core/helpers/localstorage';
import { getUserInfo } from './../pages/user/user.actions';

const authService = new AuthService();
export function* signUp({ payload }: any) {
  try {
    const res = yield authService.signUp(payload.data);
    yield put(signUpSuccess(res));
  } catch (error) {
    yield put(signUpError(error));
  }
}

export function* signIn({ payload }: any) {
  try {
    const res = yield authService.signIn(payload.dataLogin);               
    storeData('token', res.accessToken);
    yield put(getUserInfo({ id: res.userInfo.id }));
    yield put(signInSuccess(res));
  } catch (error) {
    yield put(signInError(error));
  }
}

export function* signOut() {
  try {
    const res = yield authService.signOut();
    localStorage.removeItem('token');
    yield put(signOutSuccess(res));
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
