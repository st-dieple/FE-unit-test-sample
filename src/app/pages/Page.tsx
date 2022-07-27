import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { parseJwt } from '../core/helpers/parseJwt';
import { getUserInfo } from './user/user.actions';
import { getData } from '../core/helpers/localstorage';
import { Header } from '../shared/components/layout';

const Page = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (getData('token', '')) {
      const getUserToken = parseJwt(getData('token', ''));
      dispatch(getUserInfo({id: getUserToken.userId}));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
        <Outlet />
    </>
  );
};

export default Page;
