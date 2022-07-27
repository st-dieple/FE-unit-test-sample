import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { getPostsRecommend } from '../posts.actions';
import RecommendList from './RecommendList';
import { Tag } from '../../../shared/components/partials';
import Icon from '../../../../assets/icons/index';
import SekeletonRecommendPost from '../../../shared/components/partials/SekeletonRecommendPost';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const postsRecommend = useSelector(
    (state: RootState) => state.postsRecommend
  );

  useEffect(() => {
    dispatch(getPostsRecommend({ page: 1, size: 3 }));
    // eslint-disable-next-line
  }, []);

  return (
    <aside className="sidebar">
      <div className="section-tag">
        <h3 className="sidebar-title">DISCOVER MORE OF WHAT MATTERS TO YOU</h3>
        <ul className="tag-list">
          <Tag name="React" />
          <Tag name="CSS" />
          <Tag name="Javascript" />
          <Tag name="Entertainment" />
          <Tag name="Travel" />
          <Tag name="onChange" />
        </ul>
      </div>
      <div className="article-recommend sidebar-more">
        <h3 className="recommend-title">MORE FROM LOTUS</h3>
        {postsRecommend.isLoading ? (
          <SekeletonRecommendPost />
        ) : (
          <RecommendList data={postsRecommend.data} />
        )}
      </div>
      <div className="section-social">
        <h3 className="sidebar-title">SOCIAL MEDIA</h3>
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
