import * as TYPES from '../../shared/constants/types';
import { IAction } from '../../shared/interfaces/reducer';

interface IStateData {
  data: any;
  isLoading: boolean;
  error: string;
  hasError: boolean;
  isLoadingUpdate?: boolean;
}

const IInitUserProps = {
  data: {},
  isLoading: false,
  hasError: false,
  error: '',
  isLoadingUpdate: false,
};

const IInitUserPostsProps = {
  data: {},
  isLoading: false,
  hasError: false,
  error: '',
};

export const usersReducer = (
  state: IStateData = IInitUserProps,
  action: IAction
) => {
  switch (action.type) {
    case TYPES.GET_USER_INFO:
      return {
        ...state,
        isLoading: true,
      };

    case TYPES.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case TYPES.GET_USER_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case TYPES.UPDATE_PROFILE_USER:
      return {
        ...state,
        isLoadingUpdate: true,
      };

    case TYPES.UPDATE_PROFILE_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoadingUpdate: false,
      };

    case TYPES.UPDATE_PROFILE_USER_ERROR:
      return {
        ...state,
        hasError: true,
        error: action.payload,
        isLoadingUpdate: false,
      };
    case TYPES.CLEAR_USER_INFO:
      return IInitUserProps;
    default:
      return state;
  }
};

export const userPostsReducer = (
  state: IStateData = IInitUserPostsProps,
  action: IAction
) => {
  switch (action.type) {
    case TYPES.GET_USER_POST:
      return {
        ...state,
        isLoading: true,
      };

    case TYPES.GET_USER_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case TYPES.GET_USER_POST_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case TYPES.DELETE_POST_SUCCESS:
      const newPosts = [...state.data.Posts].filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        isLoading: false,
        error: '',
        data: { ...state.data, Posts: newPosts },
      };
    default:
      return state;
  }
};
