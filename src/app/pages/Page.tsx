import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { parseJwt } from '../core/helpers/parseJwt';
import { getUserInfo } from './user/user.actions';
import { getData } from '../core/helpers/localstorage';

const Page = () => {
  const dispatch = useDispatch();
  const getUserToken = parseJwt(getData("token", ""));
  useEffect(() => {
    if (Object.keys(getUserToken).length) {
      dispatch(getUserInfo({id: getUserToken.userId}));
    }
  }, []);

  return (
    <main className="pages-container">
      <Outlet />
    </main>
  );
};

export default Page;
