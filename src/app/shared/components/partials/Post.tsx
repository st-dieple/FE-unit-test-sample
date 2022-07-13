import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from './Tag';
import { IPost } from './../../interfaces/post';

interface IPostProps {
  post: IPost;
}

export const Post = ({ post }: IPostProps) => {
  return (
    <li className="post-item">
      <article className="post">
        <div className="post-header">
          <Link to="/" className="post-user">
            <div className="post-user-image">
              <img
                src={
                  post.user.picture ||
                  "https://images.unsplash.com/photo-1657563495712-d581ce8e4f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }
                alt={post.user.displayName}
              />
            </div>
            <h4 className="post-user-name">{post.user.displayName}</h4>
          </Link>
          <p className="post-date">{post.createdAt.split("T")[0]}</p>
        </div>
        <div className="post-body">
          <div className="post-content">
            <h3 className="post-title">
              <Link to="/" className="post-title-link">{post.title}</Link>
            </h3>
            <p className="post-desc">{post.description}</p>
            <div className="post-bottom">
              <div className="post-meta">
                <div className="post-meta-info post-like">
                  <i className="fa-regular fa-thumbs-up"></i>
                  <span className="post-like-number">{post.like || 0}</span>
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
                  {post.tags.map((tag: any) => {
                    return <Tag key={tag} name={tag} path="/" />;
                  })}
                </ul>
              )}
            </div>
          </div>
          <div className="post-image">
            <Link to="/" className="post-image-link">
              <img
                src={
                  post.cover ||
                  "https://images.unsplash.com/photo-1657563495712-d581ce8e4f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }
                alt={post.title}
              />
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
};
