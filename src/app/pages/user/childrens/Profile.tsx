import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getUserPosts } from '../user.actions';
import { getAuthorsInfo } from '../../posts/posts.actions';
import UserPosts from '../partials/UserPosts';
import UserInfo from '../partials/UserInfo';
import SekeletonPost from '../../../shared/components/partials/SekeletonPost';
import SekeletonUserInfo from '../../../shared/components/partials/SekeletonUserInfo';
import { getData } from '../../../core/helpers/localstorage';

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userPost = useSelector((state: RootState) => state.usersPosts);
  const authorsInfo = useSelector((state: RootState) => state.authors);

  useEffect(() => {
    if (getData('token', '')) {
      dispatch(getUserPosts({ id }));
    }
    if (id) {
      dispatch(getAuthorsInfo({ id: id }));
    }
  }, [id]);

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
        <>
          {getData('token', '') ? (
            <UserPosts postList={userPost.data.Posts} />
          ) : (
            <div className="message-post">
              Please
              <Link to={'/auth/sign-in'} className="message-link">
                Sign In
              </Link>
              to Lotus to view{' '}
              <span className="message-name">
                {authorsInfo.data.displayName}
              </span>
              's posts!
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
