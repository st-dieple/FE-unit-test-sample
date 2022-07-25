import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import {
  getPostByIdSuccess,
  getPostByIdError,
  getPostsRecommendSuccess,
  getPostsRecommendError,
  getCommentSuccess,
  getCommentError,
  postCommentSuccess,
  postCommentError,
  getLikeSuccess,
  getLikeError,
  putLikeSuccess,
  putLikeError,
} from './article.actions';
import { environment, ENDPOINT } from '../../../config';
import * as TYPES from '../../shared/constants/types';
import { getData } from '../../core/helpers/localstorage';

export function* getPostById({ payload }: any) {
  const token = getData('token', '');
  let config: any;
  if(token) {
    config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
  }  
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}`, config
    );
    yield put(getPostByIdSuccess(res.data));
  } catch (error) {
    yield put(getPostByIdError(error));
  }
};

export function* getPostsRecommend({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.recommend}?page=${payload.page}&size=${payload.size}`
    );
    yield put(getPostsRecommendSuccess(res.data.data));
  } catch (error) {
    yield put(getPostsRecommendError(error));
  }
};

export function* getComment({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}/comments`
    );
    yield put(getCommentSuccess(res.data));
  } catch (error) {
    yield put(getCommentError(error));
  }
};

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
};

export function* getLike({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}/likes`
      );
      yield put(getLikeSuccess(res.data));
    } catch (error) {
      yield put(getLikeError(error));
    }
  };
  
  export function* putLike({ payload }: any) {
  const token = getData('token', '');  
  try {
    const res: AxiosResponse<any> = yield axios.put(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}/likes`,'', 
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    yield put(putLikeSuccess(res.data));
  } catch (error) {
    yield put(putLikeError(error));
  }
};

export function* watchArticles() {
  yield all([
    takeLatest(TYPES.GET_POST_BY_ID, getPostById),
    takeLatest(TYPES.GET_POSTS_RECOMMEND, getPostsRecommend),
    takeLatest(TYPES.GET_COMMENT, getComment),
    takeLatest(TYPES.POST_COMMENT, postComment),
    takeLatest(TYPES.GET_LIKE, getLike),
    takeLatest(TYPES.PUT_LIKE, putLike),
  ]);
};
