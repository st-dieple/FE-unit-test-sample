import * as TYPES from '../../shared/constants/types';
import { IAction } from '../../shared/interfaces/reducer';

interface IStateData {
  data: any,
  isLoading: boolean,
  error: string,
  hasError: boolean
};

const IInitUserProps = {
  data: {},
  isLoading: true,
  hasError: false,
  error: ''
};

const IInitUserPostsProps = {
  data: {},
  isLoading: true,
  hasError: false,
  error: ''
};

export const usersReducer = (state: IStateData = IInitUserProps, action: IAction) => {
  switch (action.type) {
    case TYPES.GET_USER_INFO:
      return {
        ...state,
        isLoading: true
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
        error: action.payload
      };
    default:
      return state;
  };
};

export const userPostsReducer = (state: IStateData = IInitUserPostsProps, action: IAction) => {
  switch (action.type) {
    case TYPES.GET_USER_POST:
      return {
        ...state,
        isLoading: true
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
        error: action.payload
      };
    default:
      return state;
  };
}
