import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../assets/images';

const UserPostItem = ({ post }: any) => {
  return (
    <li className="post-item">
      <article className="post">
        <div className="post-body">
          <div className="post-content">
            <h3 className="post-title">
              <Link to={`/posts/${post.id}`} className="post-title-link">
                {post.title}
              </Link>
            </h3>
            <p className="post-desc">{post.description}</p>
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
