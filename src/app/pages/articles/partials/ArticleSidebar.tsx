import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import ArticleList from './ArticleList';
import { checkUserId } from '../../../shared/common/checkUserId';
import { Button } from '../../../shared/components/partials';
import Image from '../../../../assets/images';
import { UserService } from '../../../core/serivces/user.service';


const userService = new UserService();
const ArticleSidebar = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);
  const articles = useSelector((state: RootState) => state.articles);
  const postsRecommend = useSelector(
    (state: RootState) => state.postsRecommend
  );
  
  const handleFollow = (id: number | string) => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      userService.handleUserFollow({ followingId: id })
      .then((res: any) => {
        setIsFollowing(res.followed);
        setIsRequestingAPI(false);
      })
      .catch((error) => {
        setIsRequestingAPI(false);
      });
    }
  }

  return (
    <div className="article-sidebar">
      <div className="author-sidebar">
        <Link
          to={
            checkUserId(articles.data.user.id)
              ? `/profile/me`
              : `/profile/${articles.data.user.id}`
          }
          className="author-info"
        >
          <img
            className="author-sidebar-image"
            src={articles.data.user.picture || Image.Avatar}
            alt={articles.data.user.displayName}
            onError={(e: any) => {
              e.target["onerror"] = null;
              e.target["src"] = Image.Avatar;
            }}
          />
          <h4 className="author-info-name">{articles.data.user.displayName}</h4>
        </Link>
        <span className="author-follower">
          {articles.data.user.followers || 0} Followers
        </span>
          <Button classBtn="btn btn-primary btn-follow" text={isFollowing? "Following" : "Follow"} onClick={() => handleFollow(articles.data.user.id)}/>
      </div>
      <div className="article-recommend">
        <h3 className="recommend-title">Recommend Posts</h3>
        <ArticleList data={postsRecommend.data} />
      </div>
    </div>
  );
};

export default ArticleSidebar;
