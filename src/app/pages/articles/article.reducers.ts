import * as TYPES from '../../shared/constants/types';
import { IAction } from './../../shared/interfaces/reducer';

interface IStateData {
  data: any,
  isLoading: boolean,
  error: string
};

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

export const articlesReducer = (state: IStateData = initialStatePosts, action: IAction) => {
  switch(action.type) {
    case TYPES.GET_POST_BY_ID:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: ''
      }
    case TYPES.GET_POST_BY_ID_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export const postsRecommendReducer = (state: IStateData = initialStatePostsRecommend, action: IAction) => {
  switch(action.type) {
    case TYPES.GET_POSTS_RECOMMEND:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.GET_POSTS_RECOMMEND_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: ''
      }
    case TYPES.GET_POSTS_RECOMMEND_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};
