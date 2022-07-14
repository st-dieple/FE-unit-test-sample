import axios, { AxiosResponse } from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { ENDPOINT, environment } from "../../config";
import { signUpError, signUpSuccess } from "./auth.actions";
import * as TYPES from '.././shared/constants/types';


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

export function* watchAuth() {
  yield all([
    takeLatest(TYPES.SIGN_UP, signUp),
  ]);
};
