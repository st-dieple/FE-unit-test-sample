import axios, { AxiosResponse } from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';
import * as TYPES from '../../shared/constants/types';
import { ArticleService } from '../../core/serivces/article.service';
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
  getAuthorsInfoSuccess,
  getAuthorsInfoError,
  getPostsSuccess,
  getPostsError,
  createPostSuccess,
  createPostErorr,
  updatePostSuccess,
  updatePostErorr,
  deletePostSuccess,
  deletePostErorr,
} from './posts.actions';
import { environment, ENDPOINT } from '../../../config';
import { getData } from '../../core/helpers/localstorage';

const articleService = new ArticleService();
export function* getPublicPosts({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield articleService.getPublicPosts(
      payload
    );
    yield put(getPostsSuccess(res));
  } catch (error) {
    yield put(getPostsError(error));
  }
}

export function* getPosts({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield articleService.getPosts(payload);
    yield put(getPostsSuccess(res));
  } catch (error) {
    yield put(getPostsError(error));
  }
}

export function* createPost({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield articleService.createArticle(payload);
    yield put(createPostSuccess(res));
  } catch (error) {
    yield put(createPostErorr(error));
  }
}

export function* updatePost({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield articleService.updateArticle(
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
    yield articleService.deleteArticle(payload.id);
    yield put(deletePostSuccess(payload));
  } catch (error) {
    yield put(deletePostErorr(error));
  }
}

export function* getPostById({ payload }: any) {
  const token = getData('token', '');
  let config: any;
  if (token) {
    config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}`,
      config
    );
    yield put(getPostByIdSuccess(res.data));
    payload.checkPostById(res.data);
  } catch (error) {
    yield put(getPostByIdError(error));
  }
}

export function* getPostsRecommend({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.recommend}?page=${payload.page}&size=${payload.size}`
    );
    yield put(getPostsRecommendSuccess(res.data.data));
  } catch (error) {
    yield put(getPostsRecommendError(error));
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

export function* getLike({ payload }: any) {
  try {
    const res: AxiosResponse<any> = yield axios.get(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}/likes`
    );
    yield put(getLikeSuccess(res.data));
  } catch (error) {
    yield put(getLikeError(error));
  }
}

export function* putLike({ payload }: any) {
  const token = getData('token', '');
  try {
    const res: AxiosResponse<any> = yield axios.put(
      `${environment.apiBaseUrl}${ENDPOINT.posts.index}/${payload.id}/likes`,
      '',
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
    takeLatest(TYPES.GET_POSTS, getPosts),
    takeLatest(TYPES.GET_PUBLIC_POSTS, getPublicPosts),
    takeLatest(TYPES.CREATE_POST, createPost),
    takeLatest(TYPES.UPDATE_POST, updatePost),
    takeLatest(TYPES.DELETE_POST, deletePost),
    takeLatest(TYPES.GET_POST_BY_ID, getPostById),
    takeLatest(TYPES.GET_POSTS_RECOMMEND, getPostsRecommend),
    takeLatest(TYPES.GET_COMMENT, getComment),
    takeLatest(TYPES.POST_COMMENT, postComment),
    takeLatest(TYPES.GET_LIKE, getLike),
    takeLatest(TYPES.PUT_LIKE, putLike),
    takeLatest(TYPES.GET_AUTHOR_INFO, getAuthorsInfo),
  ]);
}
