import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getPostById } from './../article.actions';
import Image from '../../../../assets/images';
import Loading from '../../../shared/components/partials/Loading';
import { formatDate } from '../../../shared/common/formatDate';
import { convertHtml } from './../../../shared/common/convertHtml';

const ArticleDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isLoading } = useSelector((state: RootState) => state.articles);

  useEffect(() => {
    dispatch(getPostById({ id: id }));
    // eslint-disable-next-line
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="articles-item">
      <div className="article-header">
        <div className="author-image">
          <Link to="/">
            <img src={Image.Avatar || data.user.picture} alt={data.user.displayName} />
          </Link>
        </div>
        <div className="article-author">
          <div className="author-name">
            <Link to="/">{data.user.displayName}</Link>
          </div>
          <div className="author-time">
            <span className="author-date">{formatDate(data.createdAt)}</span>
            <span>·</span>
            <span className="readingTime">5 min read</span>
          </div>
        </div>
      </div>
      <div className="article-content">
        <h2 className="article-title">{data.title}</h2>
        <img
          className="article-image"
          src={data.cover || Image.Empty}
          alt={data.title}
        />
        <div className="article-text">
          {convertHtml(data.content)}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
