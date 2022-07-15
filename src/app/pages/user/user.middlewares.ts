import axios, { AxiosResponse } from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { ENDPOINT, environment } from "../../../config";
import { getUserInfoError, getUserInfoSuccess } from "./user.actions";
import * as TYPES from '../../shared/constants/types';


export function* getUserInfo({ payload }: any) { 
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.users.index}/${payload.id}`
    );
    yield put(getUserInfoSuccess(res.data));
  } catch (error) {
    yield put(getUserInfoError(error));
  }
};

export function* watchUser() {
  yield all([
    takeLatest(TYPES.GET_USER_INFO, getUserInfo),
  ]);
};
