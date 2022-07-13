import React from 'react'
import Loading from '../partials/Loading';

interface IWithLoadingComponentProps {
  isLoading: boolean,
  props: any
}

export function WithLoading<P>(Component: React.ComponentType<P>) {
  return function WithLoadingComponent({ isLoading, props }: IWithLoadingComponentProps) {
    if(isLoading) return <Loading />;
    return <Component {...props}/>
  };
};
