import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getAuthorsInfo, getPostsRecommend } from '../posts.actions';
import RecommendList from './RecommendList';
import { checkUserId } from '../../../shared/common/checkUserId';
import Image from '../../../../assets/images';
import SekeletonRecommendPost from '../../../shared/components/partials/SekeletonRecommendPost';
import SekeletonUserSidebar from '../../../shared/components/partials/SekeletonUserSidebar';
import ButtonFollow from './ButtonFollow';

const PostSideBar = () => {
  const dispatch = useDispatch();
  const authorsInfo = useSelector((state: RootState) => state.authors);
  const post = useSelector((state: RootState) => state.postDetail);
  const postsRecommend = useSelector(
    (state: RootState) => state.postsRecommend
  );
  console.log(authorsInfo);
  

  useEffect(() => {
    if (authorsInfo.data.id) {
      dispatch(getAuthorsInfo({ id: authorsInfo.data.id }));
    }
    // eslint-disable-next-line
  }, [authorsInfo.data.id]);

  useEffect(() => {
    dispatch(getPostsRecommend({ page: 1, size: 5 }));
  }, []);

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
          <ButtonFollow
            userInfo={authorsInfo.data}
            id={post.data.user?.id}
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
