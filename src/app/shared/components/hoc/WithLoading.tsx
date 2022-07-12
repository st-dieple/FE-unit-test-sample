import React from 'react';
import Loading from '../partials/Loading';

interface IWithLoadingProps {
  Component: any;
}

interface IWithLoadingComponentProps {
  isLoading: boolean;
  props: any;
}

const WithLoading = ({ Component }: IWithLoadingProps) => {
  return function WithLoadingComponent({
    isLoading,
    ...props
  }: IWithLoadingComponentProps) {
    if (isLoading) {
      return <Loading />;
    }
    return <Component {...props} />;
  };
};

export default WithLoading;
