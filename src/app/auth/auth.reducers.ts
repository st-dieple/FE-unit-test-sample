import * as TYPES from '.././shared/constants/types';
import { IAction } from '../shared/interfaces/reducer';

interface IStateDataRegister {
  data: string,
  isLoading: boolean,
  error: string,
  hasError: boolean
};

const IInitRegisterProps = {
  data: '',
  isLoading: true,
  hasError: false,
  error: ''
};

interface IStateDataLogin {
  dataLogin: {},
  isLoading: boolean,
  error: string,
  hasError: boolean
};

const IInitLoginProps = {
  dataLogin: {},
  isLoading: true,
  hasError: false,
  error: ''
};

export const registerReducer = (state: IStateDataRegister = IInitRegisterProps, action: IAction) => {
  switch (action.type) {
    case TYPES.SIGN_UP:
      return {
        ...state,
        isLoading: true
      };
    
    case TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case TYPES.SIGN_UP_ERROR:
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

export const loginReducer = (state: IStateDataLogin = IInitLoginProps, action: IAction) => {
  switch (action.type) {
    case TYPES.SIGN_IN:
      return {
        ...state,
        isLoading: true
      };
    
    case TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case TYPES.SIGN_IN_ERROR:
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
