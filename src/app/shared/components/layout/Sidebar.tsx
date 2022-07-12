import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="section-recent-post">
        <h3 className="sidebar-title">Recent Posts</h3>
        <ul className="post-list">
          <li className="post-item">
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
                  <p className="post-date">August 15, 2019</p>
                </div>
              </div>
            </article>
          </li>
          <li className="post-item">
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
                  <p className="post-date">August 15, 2019</p>
                </div>
              </div>
            </article>
          </li>
          <li className="post-item">
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
                  <p className="post-date">August 15, 2019</p>
                </div>
              </div>
            </article>
          </li>
          <li className="post-item">
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
                  <p className="post-date">August 15, 2019</p>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
      <div className="section-tag">
        <h3 className="sidebar-title">Tag</h3>
        <ul className="tag-list">
          <li className="tag-item">
            <Link className="tag-link" to="/">
              #Health
            </Link>
          </li>
          <li className="tag-item">
            <Link className="tag-link" to="/">
              #Lifestyle
            </Link>
          </li>
          <li className="tag-item">
            <Link className="tag-link" to="/">
              #Music
            </Link>
          </li>
          <li className="tag-item">
            <Link className="tag-link" to="/">
              #Technology
            </Link>
          </li>
          <li className="tag-item">
            <Link className="tag-link" to="/">
              #Travel
            </Link>
          </li>
          <li className="tag-item">
            <Link className="tag-link" to="/">
              #Video
            </Link>
          </li>
        </ul>
      </div>
      <div className="section-social">
        <h3 className="sidebar-title">Social</h3>
        <ul className="social-list">
          <li className="social-item">
            <Link className="social-link" to="/">
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li className="social-item">
            <Link className="social-link" to="/">
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </li>
          <li className="social-item">
            <Link className="social-link" to="/">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li className="social-item">
            <Link className="social-link" to="/">
              <i className="fa fa-rss"></i>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
