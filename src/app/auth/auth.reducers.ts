import * as TYPES from '.././shared/constants/types';
import { IAction } from "../shared/interfaces/reducer";

interface IStateData {
  data: string,
  isLoading: boolean,
  error: string,
  hasError: boolean
}

const IInitStateProps = {
  data: '',
  isLoading: true,
  hasError: false,
  error: ''
}

export const registerReducer = (state: IStateData = IInitStateProps, action: IAction) => {
  switch (action.type) {
    case TYPES.SIGN_UP:
      return {
        ...state,
        isLoading: true
      }
    
    case TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }

    case TYPES.SIGN_UP_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload
      }
    default:
      return state;
  }
};
