import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import * as TYPES from '../../shared/constants/types';
import { PostService } from '../../core/serivces/post.service';
import {
  getCommentSuccess,
  getCommentError,
  postCommentSuccess,
  postCommentError,
  getAuthorsInfoSuccess,
  getAuthorsInfoError,
  createPostSuccess,
  createPostErorr,
  updatePostSuccess,
  updatePostErorr,
  deletePostSuccess,
  deletePostErorr,
} from './posts.actions';
import { environment, ENDPOINT } from '../../../config';
import { getData } from '../../core/helpers/localstorage';

const postService = new PostService();
export function* createPost({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield postService.createArticle(payload);
    yield put(createPostSuccess(res));
  } catch (error) {
    yield put(createPostErorr(error));
  }
}

export function* updatePost({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield postService.updateArticle(
      payload.id,
      payload.data
    );
    yield put(updatePostSuccess(res));
  } catch (error) {
    yield put(updatePostErorr(error));
  }
}

export function* deletePost({ payload }: any) {
  try {
    yield postService.deleteArticle(payload.id);
    yield put(deletePostSuccess(payload));
  } catch (error) {
    yield put(deletePostErorr(error));
  }
}

export function* getComment({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}/comments`
    );
    yield put(getCommentSuccess(res.data));
  } catch (error) {
    yield put(getCommentError(error));
  }
}

export function* postComment({ payload }: any) {
  const token = getData('token', '');
  try {
    const res: AxiosResponse<any> = yield axios.post(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}/comments`,
      payload.data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const newData = {
      ...res.data,
      ...{
        user: {
          ...payload.userInfo,
          ...{ id: res.data.userId, isActive: true, isAdmin: true },
        },
      },
    };
    yield put(postCommentSuccess(newData));
  } catch (error) {
    yield put(postCommentError(error));
  }
}

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
    takeLatest(TYPES.CREATE_POST, createPost),
    takeLatest(TYPES.UPDATE_POST, updatePost),
    takeLatest(TYPES.DELETE_POST, deletePost),
    takeLatest(TYPES.GET_COMMENT, getComment),
    takeLatest(TYPES.POST_COMMENT, postComment),
    takeLatest(TYPES.GET_AUTHOR_INFO, getAuthorsInfo),
  ]);
}
