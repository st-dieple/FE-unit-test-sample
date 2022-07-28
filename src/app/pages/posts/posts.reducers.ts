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

const initialStateComments = {
  data: [],
  isLoading: false,
  error: '',
};

const initialStateAuthorInfo = {
  data: {},
  isLoading: false,
  error: '',
};

export const postsReducer = (
  state: IStateData<IPost[]> = initialStatePosts,
  action: IAction
) => {
  switch (action.type) {
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
        data: [action.payload, ...state.data],
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
