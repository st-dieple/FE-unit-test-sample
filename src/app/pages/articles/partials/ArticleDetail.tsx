import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { formatDate } from '../../../shared/common/formatDate';
import { convertHtml } from './../../../shared/common/convertHtml';
import { Tag, Button } from '../../../shared/components/partials';
import Image from '../../../../assets/images';

const ArticleDetail = () => {
  const { data } = useSelector((state: RootState) => state.articles);

  return (
    <div className="articles-item">
      <div className="article-header">
        <div className="author-image">
          <Link to="/">
            <img
              src={Image.Avatar || data.user.picture}
              alt={data.user.displayName}
            />
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
        {data.tags.length ? (
          <ul className="tag-article">
            {data.tags.map((tag: any) => (
              <Tag key={tag} path="/" name={tag} />
            ))}
          </ul>
        ) : null}
        <img
          className="article-image"
          src={data.cover || Image.Empty}
          alt={data.title}
        />
        <div className="article-text">{convertHtml(data.content)}</div>
        <div className="article-interact">
          <Button
            text={<i className="fa-regular fa-heart"></i>}
            classBtn="btn btn-primary"
          />
          <Button
            text={<i className="fa-regular fa-comment"></i>}
            classBtn="btn btn-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
