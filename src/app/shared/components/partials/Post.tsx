import React from "react";
import { Link } from "react-router-dom";
import { Tag } from "./Tag";
import { IPost } from "./../../interfaces/post";

interface IPostProps {
  post: IPost;
}

export const Post = ({ post }: IPostProps) => {
  return (
    <li className="post-item">
      <article className="post">
        <div className="post-header">
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
          <div className="post-info">
            <Link to="/">
              <h2 className="post-title">{post.title}</h2>
            </Link>
            <div className="post-meta">
              <p className="post-date">{post.createdAt.split('T')[0]}</p>
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
          </div>
        </div>
        <div className="post-bottom">
          <p className="post-desc">{post.description}</p>
          <div className="post-footer">
            {post.tags && (
              <ul className="post-tags">
                {post.tags.map((tag: any) => {
                  return <Tag key={tag} name={tag} path="/" />;
                })}
              </ul>
            )}
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
          </div>
        </div>
      </article>
    </li>
  );
};
