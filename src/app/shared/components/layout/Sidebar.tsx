import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { getPostsRecommend } from '../../../pages/articles/article.actions';
import ArticleList from '../../../pages/articles/partials/ArticleList';
import { Tag } from '../partials';
import Loading from '../partials/Loading';
import Icon from './../../../../assets/icons/index';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const postsRecommend = useSelector((state: RootState) => state.postsRecommend);

  useEffect(() => {
    dispatch(getPostsRecommend({page: 1, size: 3}))
  }, [])
  
  return (postsRecommend.isLoading) ? <Loading/> :(
    <aside className="sidebar">
      <div className="section-tag">
        <h3 className="sidebar-title">
          DISCOVER MORE OF WHAT MATTERS TO YOU
        </h3>
        <ul className="tag-list">
          <Tag name="React" path="/" />
          <Tag name="CSS" path="/" />
          <Tag name="Framework" path="/" />
          <Tag name="Entertainment" path="/" />
          <Tag name="Travel" path="/" />
          <Tag name="Video" path="/" />
        </ul>
      </div>
      <div className="article-recommend">
        <h3 className="recommend-title">MORE FROM LOTUS</h3>
        <ArticleList data={postsRecommend.data} />
      </div>
      <div className="section-social">
        <h3 className="sidebar-title">
          SOCIAL MEDIA
        </h3>
        <ul className="social-list">
          <li className="social-item">
            <Link className="social-link" to="/">
              <img src={Icon.Facebook} alt="icon facebook" />
            </Link>
          </li>
          <li className="social-item">
            <Link className="social-link" to="/">
              <img src={Icon.Instagram} alt="icon instagram" />
            </Link>
          </li>
          <li className="social-item">
            <Link className="social-link" to="/">
              <img src={Icon.Youtube} alt="icon youtube" />
            </Link>
          </li>
          <li className="social-item">
            <Link className="social-link" to="/">
              <img src={Icon.Twitter} alt="icon twitter" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
