import * as TYPES from '../../shared/constants/types';
import { IPost } from './../../shared/interfaces/post';
import { IAction } from './../../shared/interfaces/reducer';

interface IStateData<D> {
  data: D,
  isLoading: boolean,
  loadMore: boolean,
  error: string,
  createData: any,
  updateData: any
};

const initialStatePosts = {
  data: [],
  isLoading: false,
  loadMore: true,
  error: '',
  createData: {},
  updateData: {}
};

export const postsReducer = (state: IStateData<IPost[]> = initialStatePosts, action: IAction) => {
  switch(action.type) {
    case TYPES.GET_POSTS:
      return {
        ...state,
        isLoading: true,
        loadMore: true
      }
    case TYPES.GET_POSTS_SUCCESS:
      return {
        ...state,
        data: action.payload.currentPage === 1 ? [...action.payload.data] : [...state.data, ...action.payload.data],
        isLoading: false,
        loadMore: action.payload.loadMore,
        error: ''
      }
    case TYPES.GET_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        loadMore: false
      }
    case TYPES.GET_PUBLIC_POSTS:
      return {
        ...state,
        isLoading: true,
        loadMore: true
      }
    case TYPES.GET_PUBLIC_POSTS_SUCCESS:
      return {
        ...state,
        data: action.payload.currentPage === 1 ? [...action.payload.data] : [...state.data, ...action.payload.data],
        isLoading: false,
        loadMore: action.payload.loadMore,
        error: ''
      }
    case TYPES.GET_PUBLIC_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        loadMore: false
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
    case TYPES.UPDATE_POST:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.UPDATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        updateData: action.payload
      }
    case TYPES.UPDATE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case TYPES.DELETE_POST:
      return {
        ...state,
        isLoading: true
      }
    case TYPES.DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        data: state.data.filter(item => item.id !== action.payload.id)
      }
    case TYPES.DELETE_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state;
  }
};
