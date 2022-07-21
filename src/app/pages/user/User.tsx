import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserList from './partials/UserList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../app.reducers';
import { getUserPosts } from './user.actions';
import Image from '../../../assets/images';
import Loading from '../../shared/components/partials/Loading';

const User = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userPost = useSelector((state: RootState) => state.usersPosts);
  console.log(userPost)
  console.log(id)
  useEffect(() => {
    dispatch(getUserPosts({ id }));
  }, [id]);

  return (
    <div className="container">
      <section className="section section-post">
        <div className="author-info-content">
          <div className="author-avatar">
            <Link to="/">
              <img src={userPost.data.picture || Image.Avatar} alt="image" />
            </Link>
          </div>
          <div className="author-info">
            <h2 className="author-name">{userPost.data.displayName}</h2>
            <ul className="author-list">
              <li className="author-item">
                {userPost?.data.Posts?.length || 0} Posts
              </li>
              <li className="author-item">
                {userPost.data.followers} Followers
              </li>
              <li className="author-item">
                {userPost.data.followings} Following
              </li>
            </ul>
          </div>
        </div>
        <UserList postList={userPost?.data} />
        {userPost.isLoading && <Loading />}
      </section>
    </div>
  );
};

export default User;
