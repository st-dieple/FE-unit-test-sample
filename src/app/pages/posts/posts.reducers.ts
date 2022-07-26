import * as TYPES from '../../shared/constants/types';
import { IPost } from '../../shared/interfaces/post';
import { IAction, IStateCommon } from '../../shared/interfaces/reducer';

interface IStateData<D> {
  data: D;
  isLoading: boolean;
  loadMore: boolean;
  error: string;
  createData: any;
  updateData: any;
}

const initialStatePosts = {
  data: [],
  isLoading: false,
  loadMore: true,
  error: '',
  createData: {},
  updateData: {},
};

const initialStatePostDetail = {
  data: {},
  isLoading: true,
  error: '',
};

const initialStatePostsRecommend = {
  data: [],
  isLoading: true,
  error: '',
};

const initialStateComments = {
  data: [],
  isLoading: true,
  error: '',
};

const initialStateLikes = {
  data: [],
  isLoading: true,
  error: '',
};

const initialStateAuthorInfo = {
  data: {},
  isLoading: true,
  error: '',
};

export const postsReducer = (
  state: IStateData<IPost[]> = initialStatePosts,
  action: IAction
) => {
  switch (action.type) {
    case TYPES.GET_POSTS:
      return {
        ...state,
        isLoading: true,
        loadMore: true,
      };
    case TYPES.GET_POSTS_SUCCESS:
      return {
        ...state,
        data:
          action.payload.currentPage === 1
            ? [...action.payload.data]
            : [...state.data, ...action.payload.data],
        isLoading: false,
        loadMore: action.payload.loadMore,
        error: '',
      };
    case TYPES.GET_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        loadMore: false,
      };
    case TYPES.GET_PUBLIC_POSTS:
      return {
        ...state,
        isLoading: true,
        loadMore: true,
      };
    case TYPES.GET_PUBLIC_POSTS_SUCCESS:
      return {
        ...state,
        data:
          action.payload.currentPage === 1
            ? [...action.payload.data]
            : [...state.data, ...action.payload.data],
        isLoading: false,
        loadMore: action.payload.loadMore,
        error: '',
      };
    case TYPES.GET_PUBLIC_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        loadMore: false,
      };
    case TYPES.CREATE_POST:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        createData: action.payload,
      };
    case TYPES.CREATE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TYPES.UPDATE_POST:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.UPDATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        updateData: action.payload,
      };
    case TYPES.UPDATE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TYPES.DELETE_POST:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    case TYPES.DELETE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const postsDetailReducer = (
  state: IStateCommon = initialStatePostDetail,
  action: IAction
) => {
  switch (action.type) {
    case TYPES.GET_POST_BY_ID:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: '',
      };
    case TYPES.GET_POST_BY_ID_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TYPES.RESET_POST_ID:
      return {
        data: {},
        isLoading: false,
        error: '',
      };
    default:
      return state;
  }
};

export const commentsReducer = (
  state: IStateCommon = initialStateComments,
  action: IAction
) => {
  switch (action.type) {
    case TYPES.GET_COMMENT:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.GET_COMMENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: '',
      };
    case TYPES.GET_COMMENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TYPES.POST_COMMENT:
      return {
        ...state,
      };
    case TYPES.POST_COMMENT_SUCCESS:
      return {
        ...state,
        data: [...state.data.unshift(action.payload)],
        isLoading: false,
        error: '',
      };
    case TYPES.POST_COMMENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TYPES.RESET_POST_DETAIL_DATA:
      return initialStateComments;
    default:
      return state;
  }
};

export const postsRecommendReducer = (
  state: IStateCommon = initialStatePostsRecommend,
  action: IAction
) => {
  switch (action.type) {
    case TYPES.GET_POSTS_RECOMMEND:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.GET_POSTS_RECOMMEND_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: '',
      };
    case TYPES.GET_POSTS_RECOMMEND_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TYPES.RESET_POST_DETAIL_DATA:
      return initialStatePostsRecommend;
    default:
      return state;
  }
};

export const likesReducer = (
  state: IStateCommon = initialStateLikes,
  action: IAction
) => {
  switch (action.type) {
    case TYPES.GET_LIKE:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.GET_LIKE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: '',
      };
    case TYPES.GET_LIKE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TYPES.PUT_LIKE:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.PUT_LIKE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: '',
      };
    case TYPES.PUT_LIKE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TYPES.RESET_POST_DETAIL_DATA:
      return initialStateLikes;
    default:
      return state;
  }
};

export const authorsReducer = (
  state: IStateCommon = initialStateAuthorInfo,
  action: any
) => {
  switch (action.type) {
    case TYPES.GET_AUTHOR_INFO:
      return {
        ...state,
        isLoading: true,
      };
    case TYPES.GET_AUTHOR_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: '',
      };
    case TYPES.GET_AUTHOR_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TYPES.RESET_POST_DETAIL_DATA:
      return initialStateAuthorInfo;
    default:
      return state;
  }
};
