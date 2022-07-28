import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [loading, setLoading] = useState(false);
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    setUserInfo(post.post.user);
  }, [post.post.user]);

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
      {loading ? (
        <SekeletonUserSidebar />
      ) : (
        <div className="author-sidebar">
          <Link
            to={
              checkUserId(userInfo?.id)
                ? `/profile/me`
                : `/profile/${userInfo?.id}`
            }
            className="author-info"
          >
            <img
              className="author-sidebar-image"
              src={userInfo?.picture || Image.Avatar}
              alt={userInfo?.displayName}
              onError={(e: any) => {
                e.target['onerror'] = null;
                e.target['src'] = Image.Avatar;
              }}
            />
            <h4 className="author-info-name">{userInfo?.displayName}</h4>
          </Link>
          <span className="author-follower">
            {userInfo?.followers} Followers
          </span>
          {!checkUserId(userInfo?.id) && (
            <ButtonFollow userInfo={userInfo} setUserInfo={setUserInfo} />
          )}
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
