import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { parseJwt } from '../core/helpers/parseJwt';
import { getUserInfo } from './user/user.actions';
import { getData } from '../core/helpers/localstorage';
import { Header } from '../shared/components/layout';

const Page = () => {
  const dispatch = useDispatch();

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
      <main className="pages-container">
        <Outlet />
      </main>
    </>
  );
};

export default Page;
