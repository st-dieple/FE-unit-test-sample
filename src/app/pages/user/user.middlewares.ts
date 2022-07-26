import axios, { AxiosResponse } from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects';
import { ENDPOINT, environment } from '../../../config';
import {
  getUserInfoError,
  getUserInfoSuccess,
  getUserPostsError,
  getUserPostsSuccess,
  updateProfileUserError,
  updateProfileUserSuccess
} from './user.actions';
import { UserService } from './../../core/serivces/user.service';
import * as TYPES from '../../shared/constants/types';
import { getData } from '../../core/helpers/localstorage';
import { checkUserId } from '../../shared/common/checkUserId';

const userService = new UserService();
export function* getUserInfo({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.users.index}/${payload.id}`
    );
    yield put(getUserInfoSuccess(res.data));
  } catch (error) {
    yield put(getUserInfoError(error));
  }
}

export function* updateProfileUser({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield userService.updateProfileUser(payload.data);
    yield put(updateProfileUserSuccess(res));
  } catch (error) {
    yield put(updateProfileUserError(error));
  }
}

export function* getUserPosts({ payload }: any) {
  const token = getData('token', '');
  let config: any;
  let id: any;
  if (token) {
    config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  id = checkUserId(payload) ? 'me' : payload.id;
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.users.index}/${id}/posts`,
      config
    );
    yield put(getUserPostsSuccess(res.data));
  } catch (error) {
    yield put(getUserPostsError(error));
  }
}

export function* watchUser() {
  yield all([
    takeLatest(TYPES.GET_USER_INFO, getUserInfo),
    takeLatest(TYPES.GET_USER_POST, getUserPosts),
    takeLatest(TYPES.UPDATE_PROFILE_USER, updateProfileUser)
  ]);
}
