import * as TYPES from '../../shared/constants/types';
import { IAction } from './../../shared/interfaces/reducer';

interface IStateData {
  data: any;
  isLoading: boolean;
  error: string;
}

const initialStatePosts = {
  data: {},
  isLoading: true,
  error: ''
};

const initialStatePostsRecommend = {
  data: [],
  isLoading: true,
  error: ''
};

const initialStateComments = {
  data: [],
  isLoading: true,
  error: ''
};

const initialStateLikes = {
  data: [],
  isLoading: true,
  error: ''
};

const initialStateAuthorInfo = {
  data: {},
  isLoading: true,
  error: ''
};

export const articlesReducer = (
  state: IStateData = initialStatePosts,
  action: IAction
) => {
  switch (action.type) {
    case TYPES.GET_POST_BY_ID:
      return {
        ...state,
        isLoading: true
      };
    case TYPES.GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: ''
      };
    case TYPES.GET_POST_BY_ID_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case TYPES.RESET_POST_ID:      
      return {
        data: {},
        isLoading: false,
        error: ''
      }
    default:
      return state;
  }
};

export const commentsReducer = (
  state: IStateData = initialStateComments,
  action: IAction
) => {
  switch (action.type) {
    case TYPES.GET_COMMENT:
      return {
        ...state,
        isLoading: true
      };
    case TYPES.GET_COMMENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: ''
      };
    case TYPES.GET_COMMENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case TYPES.POST_COMMENT:
      return {
        ...state
      };
    case TYPES.POST_COMMENT_SUCCESS:
      return {
        ...state,
        data: [...state.data.unshift(action.payload)],
        isLoading: false,
        error: ''
      };
    case TYPES.POST_COMMENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const postsRecommendReducer = (
  state: IStateData = initialStatePostsRecommend,
  action: IAction
) => {
  switch (action.type) {
    case TYPES.GET_POSTS_RECOMMEND:
      return {
        ...state,
        isLoading: true
      };
    case TYPES.GET_POSTS_RECOMMEND_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: ''
      };
    case TYPES.GET_POSTS_RECOMMEND_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const likesReducer = (
  state: IStateData = initialStateLikes,
  action: IAction
) => {
  switch (action.type) {
    case TYPES.GET_LIKE:
      return {
        ...state,
        isLoading: true
      };
    case TYPES.GET_LIKE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: ''
      };
    case TYPES.GET_LIKE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case TYPES.PUT_LIKE:
      return {
        ...state,
        isLoading: true
      };
    case TYPES.PUT_LIKE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: ''
      };
    case TYPES.PUT_LIKE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };    
      default:
      return state;
  }
};

export const authorsReducer = (state: IStateData = initialStateAuthorInfo, action: any) => {
  switch (action.type) {
    case TYPES.GET_AUTHOR_INFO:
      return {
        ...state,
        isLoading: true
      };
    case TYPES.GET_AUTHOR_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: ''
      };
    case TYPES.GET_AUTHOR_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
