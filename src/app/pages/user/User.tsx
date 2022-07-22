import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app.reducers';
import { getUserPosts } from './user.actions';
import UserPosts from './partials/UserPosts';
import UserInfo from './partials/UserInfo';
import Loading from '../../shared/components/partials/Loading';

const User = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userPost = useSelector((state: RootState) => state.usersPosts);
  
  useEffect(() => {
    dispatch(getUserPosts({ id }));
    // eslint-disable-next-line
  }, [id]);
  return userPost.isLoading ? (
    <Loading classType="loading-user"/>
  ) : (
    <div className="section-user-post">
      <UserInfo infoUser={userPost.data}/>
      <UserPosts postList={userPost.data.Posts} />
    </div>
  );
};

export default User;
