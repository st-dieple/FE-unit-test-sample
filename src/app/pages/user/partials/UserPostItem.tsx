import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../home/home.actions';
import { checkUserId } from '../../../shared/common/checkUserId';
import { Link } from 'react-router-dom';
import Image from '../../../../assets/images';
import { formatDate } from '../../../shared/common/formatDate';
import { Tag } from '../../../shared/components/partials';

const UserPostItem = ({ post }: any) => {
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    dispatch(deletePost({ id: id }));
  };

  return (
    <li className="post-item">
      <article className="post post-info">
        <div className="post-header">
          <div className="post-user">
            {post.status === "public" ? (
              <div className="post-status">
                <i className="fa-solid fa-unlock"></i>
                Public
              </div>
            ) : (
              <div className="post-status">
                <i className="fa-solid fa-lock"></i>
                Private
              </div>
            )}
            <p className="post-date">{formatDate(post.createdAt)}</p>
          </div>
          {checkUserId(post.userId) && (
            <div className="post-control">
              <i className="fa-solid fa-ellipsis"></i>
              <ul className="post-control-list post-control-wall-user">
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
        <div className="post-body">
          <div className="post-content">
            <h3 className="post-title">
              <Link to={`/posts/${post.id}`} className="post-title-link">
                {post.title}
              </Link>
            </h3>
            <p className="post-desc">{post.description}</p>
            {post.tags && (
              <ul className="post-tags">
                {post.tags.map((tag: any) => {
                  return <Tag key={tag} name={tag} />;
                })}
              </ul>
            )}
          </div>
          <div className="post-image">
            <Link to="/" className="post-image-link">
              <img
                src={post.cover || Image.Empty}
                alt={post.title}
                onError={(e: any) => {
                  e.target["onerror"] = null;
                  e.target["src"] = Image.Empty;
                }}
              />
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
};
export default UserPostItem;
