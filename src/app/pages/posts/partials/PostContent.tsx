import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import {
  getAuthorsInfo,
  getComment,
  getLike,
  putLike,
} from '../../posts/posts.actions';
import { deletePost } from '../../posts/posts.actions';
import FormComment from './FormComment';
import { formatDate } from '../../../shared/common/formatDate';
import { convertHtml } from './../../../shared/common/convertHtml';
import { checkUserId } from '../../../shared/common/checkUserId';
import { Tag } from '../../../shared/components/partials';
import Image from '../../../../assets/images';

const PostContent = ({ post }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const dataLike = useSelector((state: RootState) => state.likes);
  const comments = useSelector((state: RootState) => state.comments.data);
  const likes = useSelector((state: RootState) => state.likes.data);
  const [liked, setLiked] = useState<number>(likes.length);
  const [color, setColor] = useState(false);
  const userId = post.user?.id;

  useEffect(() => {
    if (id) {
      dispatch(getComment({ id: id }));
      dispatch(getLike({ id: id }));
    }
    // eslint-disable-next-line
  }, [id]);
  useEffect(() => {
    if (post.isLiked) {
      setColor(true);
    }
  }, [post.isLiked]);

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

  useEffect(() => {
    if (userId) {
      dispatch(getAuthorsInfo({ id: userId }));
    }
  }, [userId]);

  const handleLike = () => {
    dispatch(putLike({ id }));
  };

  const handleDelete = (id: string) => {
    dispatch(deletePost({ id: id }));
    navigate('/');
  };

  return (
    <div className="articles-item">
      <div className="article-header">
        <div className="article-header-left">
          <div className="author-image">
            <Link
              to={
                checkUserId(post.user?.id)
                  ? `/profile/me`
                  : `/profile/${post.user?.id}`
              }
            >
              <img
                src={post.user?.picture || Image.Avatar}
                alt={post.user?.displayName}
                onError={(e: any) => {
                  e.target['onerror'] = null;
                  e.target['src'] = Image.Avatar;
                }}
              />
            </Link>
          </div>
          <div className="article-author">
            <div className="author-name">
              <Link
                to={
                  checkUserId(post.user?.id)
                    ? `/profile/me`
                    : `/profile/${post.user?.id}`
                }
              >
                {post.user?.displayName}
              </Link>
            </div>
            <div className="author-time">
              <span className="author-date">{formatDate(post.createdAt)}</span>
              <span>·</span>
              <span className="readingTime">5 min read</span>
            </div>
          </div>
        </div>
        {checkUserId(post.user?.id) && (
          <div className="post-control">
            <i className="fa-solid fa-ellipsis"></i>
            <ul className="post-control-list">
              <li>
                <Link
                  to={`/posts/${post.id}/edit`}
                  className="post-control-item"
                >
                  <i className="fa-solid fa-pen"></i>
                  Edit
                </Link>
              </li>
              <li
                className="post-control-item"
                onClick={() => {
                  handleDelete(post.id);
                }}
              >
                <i className="fa-solid fa-trash-can"></i>
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="article-content">
        <h2 className="article-title">{post.title}</h2>
        {post.tags?.length ? (
          <ul className="tag-article">
            {post.tags.map((tag: any) => (
              <Tag key={tag} name={tag} />
            ))}
          </ul>
        ) : null}
        <img
          className="article-image"
          src={post.cover || Image.Empty}
          alt={post.title}
        />
        <div className="article-text">{convertHtml(post.content)}</div>
        <div className="article-interact">
          <div className="interact-like">
            <i
              className={
                color
                  ? 'fa-solid fa-thumbs-up fa-liked'
                  : 'fa-regular fa-thumbs-up'
              }
              onClick={handleLike}
            ></i>
            {liked}
          </div>
          <div className="interact-comment">
            <i className="fa-regular fa-comment"></i>
            {comments.length}
          </div>
        </div>
      </div>
      <FormComment />
    </div>
  );
};

export default PostContent;
