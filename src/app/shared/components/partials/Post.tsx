import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from './Tag';
import { formatDate } from './../../common/formatDate';
import { checkUserId } from '../../common/checkUserId';
import Image from '../../../../assets/images';
import { useDialog } from '../../contexts/dialog.contexts';

export const Post = ({ post, handleDelete }: any) => {
  const dialog = useDialog();

  const doDelete = () => {
    dialog?.addDialog({
      title: 'Delete Post',
      content: 'Are you sure you want to delete this post?',
      button: {
        confirm: {
          text: 'Delete',
          confirmCallback: () => handleDelete(post.id),
        },
        cancel: {
          text: 'Cancel',
          cancelCallback: () => dialog.closeDialog(),
        },
      },
    });
  };

  return (
    <li key={post.id} className="post-item">
      <article className="post">
        <div className="post-header">
          <div className="post-user">
            <Link
              to={
                checkUserId(post.user?.id)
                  ? `/profile/me`
                  : `/profile/${post.user?.id}`
              }
              className="post-user-info"
            >
              <div className="post-user-image">
                <img
                  src={post.user.picture || Image.Avatar}
                  alt={post.user.displayName}
                  onError={(e: any) => {
                    e.target['onerror'] = null;
                    e.target['src'] = Image.Avatar;
                  }}
                />
              </div>
              <h4 className="post-user-name">{post.user.displayName}</h4>
            </Link>
            <p className="post-date">{formatDate(post.createdAt)}</p>
          </div>
          {checkUserId(post.user.id) && (
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
                <li className="post-control-item" onClick={doDelete}>
                  <i className="fa-solid fa-trash-can"></i>
                  Delete
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="post-body">
          <div className="post-body-left">
            <div className="post-content">
              <h3 className="post-title">
                <Link to={`/posts/${post.id}`} className="post-title-link">
                  {post.title}
                </Link>
              </h3>
              <p className="post-desc">{post.description}</p>
            </div>
            <div className="post-footer">
              <div className="post-meta">
                <div className="post-meta-info post-like">
                  <i className="fa-regular fa-thumbs-up"></i>
                  <span className="post-like-number">{post.likes || 0}</span>
                </div>
                <div className="post-meta-info post-comment">
                  <i className="fa-regular fa-comment"></i>
                  <span className="post-comment-number">
                    {post.comments || 0}
                  </span>
                </div>
              </div>
              {post.tags && (
                <ul className="post-tags">
                  {post.tags.slice(-3).map((tag: any) => {
                    return <Tag key={tag} name={tag} />;
                  })}
                </ul>
              )}
            </div>
          </div>
          <div className="post-image">
            <Link to={`/posts/${post.id}`} className="post-image-link">
              <img src={post.cover || Image.Empty} alt={post.title} />
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
};
