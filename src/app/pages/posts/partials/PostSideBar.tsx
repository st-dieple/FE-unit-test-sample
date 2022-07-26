import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app.reducers';
import {
  getAuthorsInfo,
  getAuthorsInfoSuccess,
  getPostsRecommend,
  resetPostDetailData,
} from '../posts.actions';
import { UserService } from '../../../core/serivces/user.service';
import RecommendList from './RecommendList';
import { checkUserId } from '../../../shared/common/checkUserId';
import { Button } from '../../../shared/components/partials';
import Image from '../../../../assets/images';
import SekeletonRecommendPost from '../../../shared/components/partials/SekeletonRecommendPost';
import SekeletonUserSidebar from '../../../shared/components/partials/SekeletonUserSidebar';

const userService = new UserService();
const PostSideBar = () => {
  const dispatch = useDispatch();
  const authorsInfo = useSelector((state: RootState) => state.authors);
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);
  const post = useSelector((state: RootState) => state.postDetail);
  const postsRecommend = useSelector(
    (state: RootState) => state.postsRecommend
  );

  useEffect(() => {
    if (authorsInfo.data.id) {
      dispatch(getAuthorsInfo({ id: authorsInfo.data.id }));
    }
    // eslint-disable-next-line
  }, [authorsInfo.data.id]);

  useEffect(() => {
    dispatch(getPostsRecommend({ page: 1, size: 5 }));
  }, []);

  const handleFollow = (id: number | string) => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      userService
        .handleUserFollow({ followingId: id })
        .then((res: any) => {
          setIsRequestingAPI(false);
          authorsInfo.data.isFollowed = res.followed;
          if (res.followed) {
            authorsInfo.data.followers = authorsInfo.data.followers + 1;
          } else {
            authorsInfo.data.followers = authorsInfo.data.followers - 1;
          }
          dispatch(getAuthorsInfoSuccess(authorsInfo.data));
        })
        .catch((error) => {
          setIsRequestingAPI(false);
        });
    }
  };

  return (
    <div className="article-sidebar">
      {authorsInfo.isLoading ? (
        <SekeletonUserSidebar />
      ) : (
        <div className="author-sidebar">
          <Link
            to={
              checkUserId(post.data.user?.id)
                ? `/profile/me`
                : `/profile/${post.data.user?.id}`
            }
            className="author-info"
          >
            <img
              className="author-sidebar-image"
              src={post.data.user?.picture || Image.Avatar}
              alt={post.data.user?.displayName}
              onError={(e: any) => {
                e.target['onerror'] = null;
                e.target['src'] = Image.Avatar;
              }}
            />
            <h4 className="author-info-name">{post.data.user?.displayName}</h4>
          </Link>
          <span className="author-follower">
            {authorsInfo.data.followers} Followers
          </span>
          <Button
            classBtn="btn btn-primary btn-follow"
            text={authorsInfo.data.isFollowed ? 'Following' : 'Follow'}
            onClick={() => handleFollow(post.data.user?.id)}
          />
        </div>
      )}
      <div className="article-recommend">
        <h3 className="recommend-title">Recommend Posts</h3>
        {postsRecommend.isLoading ? (
          <SekeletonRecommendPost />
        ) : (
          <RecommendList data={postsRecommend.data} />
        )}
      </div>
    </div>
  );
};

export default PostSideBar;
