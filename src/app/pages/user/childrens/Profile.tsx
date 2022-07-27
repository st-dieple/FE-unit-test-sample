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
import { checkUserId } from '../../../shared/common/checkUserId';

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
    if (id) {
      dispatch(getAuthorsInfo({ id: id }));
    }
  }, [id]);

  return (
    <div className="section-user-post">
      {authorsInfo.isLoading ? (
        <SekeletonUserInfo />
      ) : (
        <UserInfo userInfo={authorsInfo.data} />
      )}
      {userPost.isLoading ? (
        <SekeletonPost />
      ) : (
        (checkUserId(id) ?
        <UserPosts postList={userPost.data.Posts} />: 
        <p className="message-post">Please sign in to Lotus to view {authorsInfo.data.displayName} posts!</p>)
      )}
    </div>
  );
};

export default Profile;
