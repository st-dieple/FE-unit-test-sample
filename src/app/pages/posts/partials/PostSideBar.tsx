import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getAuthorsInfo } from '../posts.actions';
import RecommendList from './RecommendList';
import { checkUserId } from '../../../shared/common/checkUserId';
import Image from '../../../../assets/images';
import SekeletonRecommendPost from '../../../shared/components/partials/SekeletonRecommendPost';
import SekeletonUserSidebar from '../../../shared/components/partials/SekeletonUserSidebar';
import ButtonFollow from './ButtonFollow';
import { PostService } from '../../../core/serivces/post.service';

const postService = new PostService();
const PostSideBar = (post: any) => {
  const [postsRecommend, setPostsRecommend] = useState<any>([]);
  const [loading, setLoading] = useState<any>([]);
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);
  const dispatch = useDispatch();
  const authorsInfo = useSelector((state: RootState) => state.authors);
  useEffect(() => {
    if (authorsInfo.data.id) {
      dispatch(getAuthorsInfo({ id: authorsInfo.data.id }));
    }
    // eslint-disable-next-line
  }, [authorsInfo.data.id]);

  const getPostsRecommend = () => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      setLoading(true);
      postService
        .getPostsRecommend({ page: 1, size: 5 })
        .then((res: any) => {
          setIsRequestingAPI(false);
          setPostsRecommend([...postsRecommend, ...res.data]);
          setLoading(false);
        })
        .catch((error) => {
          setIsRequestingAPI(false);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    getPostsRecommend();
  }, []);

  return (
    <div className="article-sidebar">
      {authorsInfo.isLoading ? (
        <SekeletonUserSidebar />
      ) : (
        <div className="author-sidebar">
          <Link
            to={
              checkUserId(post.post.user?.id)
                ? `/profile/me`
                : `/profile/${post.post.user?.id}`
            }
            className="author-info"
          >
            <img
              className="author-sidebar-image"
              src={post.post.user?.picture || Image.Avatar}
              alt={post.post.user?.displayName}
              onError={(e: any) => {
                e.target['onerror'] = null;
                e.target['src'] = Image.Avatar;
              }}
            />
            <h4 className="author-info-name">{post.post.user?.displayName}</h4>
          </Link>
          <span className="author-follower">
            {authorsInfo.data.followers} Followers
          </span>
          <ButtonFollow
            authorsInfo={authorsInfo.data}
            id={post.post.user?.id}
          />
        </div>
      )}
      <div className="article-recommend">
        <h3 className="recommend-title">Recommend Posts</h3>
        {loading ? (
          <SekeletonRecommendPost />
        ) : (
          <RecommendList data={postsRecommend} />
        )}
      </div>
    </div>
  );
};

export default PostSideBar;
