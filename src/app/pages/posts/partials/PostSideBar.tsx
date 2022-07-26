import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getAuthorsInfo, getAuthorsInfoSuccess } from '../posts.actions';
import { UserService } from '../../../core/serivces/user.service';
import RecommendList from './RecommendList';
import { checkUserId } from '../../../shared/common/checkUserId';
import { Button } from '../../../shared/components/partials';
import Image from '../../../../assets/images';

const userService = new UserService();
const PostSideBar = () => {
  const dispatch = useDispatch();
  const authorsInfo = useSelector((state: RootState) => state.authors.data);
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);
  const post = useSelector((state: RootState) => state.postDetail);
  const postsRecommend = useSelector(
    (state: RootState) => state.postsRecommend
  );

  const handleFollow = (id: number | string) => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      userService
        .handleUserFollow({ followingId: id })
        .then((res: any) => {
          setIsRequestingAPI(false);
          authorsInfo.isFollowed = res.followed;
          if (res.followed) {
            authorsInfo.followers = authorsInfo.followers + 1;
          } else {
            authorsInfo.followers = authorsInfo.followers - 1;
          }
          dispatch(getAuthorsInfoSuccess(authorsInfo));
        })
        .catch((error) => {
          setIsRequestingAPI(false);
        });
    }
  };

  return (
    <div className="article-sidebar">
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
          {authorsInfo.followers} Followers
        </span>
        <Button
          classBtn="btn btn-primary btn-follow"
          text={authorsInfo.isFollowed ? 'Following' : 'Follow'}
          onClick={() => handleFollow(post.data.user?.id)}
        />
      </div>
      <div className="article-recommend">
        <h3 className="recommend-title">Recommend Posts</h3>
        <RecommendList data={postsRecommend.data} />
      </div>
    </div>
  );
};

export default PostSideBar;
