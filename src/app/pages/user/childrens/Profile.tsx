import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getUserPosts } from '../user.actions';
import { getAuthorsInfo } from '../../posts/posts.actions';
import UserPosts from '../partials/UserPosts';
import UserInfo from '../partials/UserInfo';
import SekeletonPost from '../../../shared/components/partials/SekeletonPost';
import SekeletonUserInfo from '../../../shared/components/partials/SekeletonUserInfo';

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userPost = useSelector((state: RootState) => state.usersPosts);
  const authorsInfo = useSelector((state: RootState) => state.authors);
  const userId = userPost.data.id;
  useEffect(() => {
    dispatch(getUserPosts({ id }));
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (userId) {
      dispatch(getAuthorsInfo({ id: userId }));
    }
  }, [userId]);

  return (
    <div className="section-user-post">
      {authorsInfo.isLoading ? (
        <SekeletonUserInfo />
      ) : (
        <UserInfo userInfo={userPost.data} />
      )}
      {userPost.isLoading ? (
        <SekeletonPost />
      ) : (
        <UserPosts postList={userPost.data.Posts} />
      )}
    </div>
  );
};

export default Profile;
