import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getAuthorsInfo, putLike } from '../../posts/posts.actions';
import { deletePost } from '../../posts/posts.actions';
import FormComment from './FormComment';
import { formatDate } from '../../../shared/common/formatDate';
import { convertHtml } from './../../../shared/common/convertHtml';
import { checkUserId } from '../../../shared/common/checkUserId';
import { Tag } from '../../../shared/components/partials';
import Image from '../../../../assets/images';
import withAuthChecking from './../../../shared/components/hoc/withAuthChecking';

const ButtonLikeTemplate = ({
  liked,
  id,
  color,
  dispatch,
  checkAuthBeforeAction,
}: any) => {
  const handleLike = () => {
    checkAuthBeforeAction(dispatch(putLike({ id })));
  };

  return (
    <div className="interact-like">
      <i
        className={
          color ? 'fa-solid fa-thumbs-up fa-liked' : 'fa-regular fa-thumbs-up'
        }
        onClick={handleLike}
      ></i>
      {liked}
    </div>
  );
};

const ButtonLike = withAuthChecking(ButtonLikeTemplate);
const FormCommentTemplate = withAuthChecking(FormComment);

const PostContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const post = useSelector((state: RootState) => state.postDetail);
  const comments = useSelector((state: RootState) => state.comments.data);
  const likes = useSelector((state: RootState) => state.likes);
  const [liked, setLiked] = useState<number>(likes.data.length);
  const [color, setColor] = useState(false);
  const userId = post.data.user?.id;

  useEffect(() => {
    if (post.data.isLiked) {
      setColor(true);
    }
  }, [post.data.isLiked]);

  useEffect(() => {
    if (likes.data.liked) {
      setLiked(liked + 1);
      setColor(true);
    } else if (likes.data.liked !== undefined && liked > 0) {
      setLiked(liked - 1);
      setColor(false);
    }
    // eslint-disable-next-line
  }, [likes.data]);

  useEffect(() => {
    if (userId) {
      dispatch(getAuthorsInfo({ id: userId }));
    }
  }, [userId]);

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
                checkUserId(post.data.user?.id)
                  ? `/profile/me`
                  : `/profile/${post.data.user?.id}`
              }
            >
              <img
                src={post.data.user?.picture || Image.Avatar}
                alt={post.data.user?.displayName}
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
                  checkUserId(post.data.user?.id)
                    ? `/profile/me`
                    : `/profile/${post.data.user?.id}`
                }
              >
                {post.data.user?.displayName}
              </Link>
            </div>
            <div className="author-time">
              <span className="author-date">
                {formatDate(post.data.createdAt)}
              </span>
              <span>·</span>
              <span className="readingTime">5 min read</span>
            </div>
          </div>
        </div>
        {checkUserId(post.data.user?.id) && (
          <div className="post-control">
            <i className="fa-solid fa-ellipsis"></i>
            <ul className="post-control-list">
              <li>
                <Link
                  to={`/posts/${post.data.id}/edit`}
                  className="post-control-item"
                >
                  <i className="fa-solid fa-pen"></i>
                  Edit
                </Link>
              </li>
              <li
                className="post-control-item"
                onClick={() => {
                  handleDelete(post.data.id);
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
        <h2 className="article-title">{post.data.title}</h2>
        {post.data.tags?.length ? (
          <ul className="tag-article">
            {post.data.tags?.map((tag: any) => (
              <Tag key={tag} name={tag} />
            ))}
          </ul>
        ) : null}
        <img
          className="article-image"
          src={post.data.cover || Image.Empty}
          alt={post.data.title}
        />
        <div className="article-text">{convertHtml(post.data.content)}</div>
        <div className="article-interact">
          <ButtonLike liked={liked} id={id} color={color} dispatch={dispatch} />
          <div className="interact-comment">
            <i className="fa-regular fa-comment"></i>
            {comments.length}
          </div>
        </div>
      </div>
      <FormCommentTemplate />
    </div>
  );
};

export default PostContent;
