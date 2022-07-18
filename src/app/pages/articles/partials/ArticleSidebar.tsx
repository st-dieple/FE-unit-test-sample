import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getPostById, getPostsRecommend } from './../article.actions';
import { Button } from '../../../shared/components/partials';
import Image from '../../../../assets/images';
import Loading from '../../../shared/components/partials/Loading';
import ArticleList from './ArticleList';

const ArticleSidebar = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const articles = useSelector((state: RootState) => state.articles);
  const postsRecommend = useSelector((state: RootState) => state.postsRecommend);
  
  useEffect(() => {
    dispatch(getPostById({ id: id }));
    dispatch(getPostsRecommend({ page: 1, size: 5 }));
    // eslint-disable-next-line
  }, [id]); 

  return (articles.isLoading || postsRecommend.isLoading) ? <Loading/> : (
    <div className="article-sidebar">
      <div className="author-sidebar">
        <img
          className="author-sidebar-image"
          src={Image.Avatar || articles.data.user.picture}   
          alt={articles.data.user.displayName}
        />
        <Link to="/">{articles.data.user.displayName}</Link>
        <span className="author-follower">{articles.data.user.followers || 0} Followers</span>
        <Button classBtn="btn btn-primary btn-follow" text="Follow" />
      </div>
      <div className="article-recommend">
        <h3 className="recommend-title txt-center">
          Recommend Posts
        </h3>
        <ArticleList data={postsRecommend.data}/>
      </div>
    </div>
  );
};

export default ArticleSidebar;
