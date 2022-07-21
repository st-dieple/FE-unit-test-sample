import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { putLike } from '../article.actions';
import { RootState } from '../../../app.reducers';
import { formatDate } from '../../../shared/common/formatDate';
import { convertHtml } from './../../../shared/common/convertHtml';
import InteractComment from './InteractComment';
import { Tag } from '../../../shared/components/partials';
import Image from '../../../../assets/images';

const ArticleDetail = ({ likes }: any) => {
  const [liked, setLiked] = useState<number>(likes.length);
  const [color, setColor] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state: RootState) => state.articles);
  const dataLike = useSelector((state: RootState) => state.likes);
  const comments = useSelector((state: RootState) => state.comments.data);

  useEffect(() => {
    if (data.isLiked) {
      setColor(true);
    }
  }, [data.isLiked]);

  useEffect(() => {
    if (dataLike.data.liked) {
      setLiked(liked + 1);
      setColor(true);
    } else if (dataLike.data.liked !== undefined && liked > 0) {
      setLiked(liked - 1);
      setColor(false);
    }
        // eslint-disable-next-line
  }, [dataLike.data]);

  const handleLike = () => {
    dispatch(putLike({ id }));
  };

  return (
    <div className="articles-item">
      <div className="article-header">
        <div className="author-image">
          <Link to={`/users/${data.user.id}`}>
            <img
              src={Image.Avatar || data.user.picture}
              alt={data.user.displayName}
            />
          </Link>
        </div>
        <div className="article-author">
          <div className="author-name">
            <Link to={`/users/${data.user.id}`}>{data.user.displayName}</Link>
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
          <span className="interact-like">{liked}</span>
          <i className={color ? "fa-solid fa-heart fa-liked" : "fa-regular fa-heart"} onClick={handleLike}></i>
          <span className="interact-comment">{comments.length}</span>
          <i className="fa-regular fa-comment"></i>
        </div>
      </div>
      <InteractComment />
    </div>
  );
};

export default ArticleDetail;
