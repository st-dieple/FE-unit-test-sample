import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from './Tag';

export const Post = () => {
  return (
    <li>
      <article className="post">
        <div className="post-header">
          <div className="post-image">
            <Link to="/" className="post-image-link">
              <img
                src="https://images.unsplash.com/photo-1657563495712-d581ce8e4f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Image"
              />
            </Link>
          </div>
          <div className="post-info">
            <Link to="/">
              <h2 className="post-title">
                Far far away, behind the word mountains
              </h2>
            </Link>
            <div className="post-meta">
              <p className="post-date">August 15, 2019</p>
              <div className="post-meta-info post-like">
                <i className="fa-regular fa-thumbs-up"></i>
                <span className="post-like-number">12</span>
              </div>
              <div className="post-meta-info post-comment">
                <i className="fa-regular fa-comment"></i>
                <span className="post-comment-number">11</span>
              </div>
            </div>
          </div>
        </div>
        <div className="post-bottom">
          <p className="post-desc">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden
          </p>
          <div className="post-footer">
            <ul className="post-tags">
              <Tag name="Music" path="/" />
              <Tag name="Technology" path="/" />
            </ul>
            <Link to="/" className="post-user">
              <div className="post-user-image">
                <img
                  src="https://images.unsplash.com/photo-1657563495712-d581ce8e4f9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Quoc Long"
                />
              </div>
              <h4 className="post-user-name">Quoc Long</h4>
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
};
