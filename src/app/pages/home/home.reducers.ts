import * as TYPES from '../../shared/constants/types';
import { IPost } from './../../shared/interfaces/post';
import { IAction } from './../../shared/interfaces/reducer';

interface IStateData<D> {
  data: D,
  isLoading: boolean,
  error: string,
  createData: any
};

const initialStatePosts = {
  data: [],
  isLoading: false,
  error: '',
  createData: {}
};

export const postsReducer = (state: IStateData<IPost[]> = initialStatePosts, action: IAction) => {
  switch(action.type) {
    case TYPES.GET_POSTS:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.GET_POSTS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        isLoading: false,
        error: ''
      }
    case TYPES.GET_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case TYPES.CREATE_POST:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.CREATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        createData: action.payload
      }
    case TYPES.CREATE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state;
  }
};
