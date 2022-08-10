import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../shared/components/partials';
import ButtonBookmark from '../../../shared/components/partials/ButtonBookmark';

const BookmarkItem = () => {
  return (
    <>
      <li className="post-item">
        <div className="post">
          <div className="post-header">
            <div className="post-user">
              <div className="post-status">
                <i className="fa-solid fa-unlock" />
                Public
              </div>
              <p className="post-date">July 30, 2022</p>
            </div>
            <Button
              classBtn="btn-bookmark"
              text={<i className="fa-regular fa-bookmark"></i>}
            />
          </div>
          <div className="post-body">
            <div className="post-body-left">
              <div className="post-content">
                <h3 className="post-title">
                  <Link to="" className="post-title-link txt-link-primary">
                    Component-Based Build encapsulated components that manage
                    their own state, then compose them to make complex UIs.
                    Since component logic is written in JavaScript instead of
                    templates, you can easily pass rich data through your app
                    and keep state out of the DOM. Learn Once, Write Anywhere We
                    don’t make assumptions about the rest of your technology
                    stack, so you can develop new features in React without
                    rewriting existing code. React can also render on the server
                    using Node and power mobile apps using React Native.
                  </Link>
                </h3>
                <p className="post-desc">
                  Component-Based Build encapsulated components that manage
                  their own state, then compose them to make complex UIs. Since
                  component logic is written in JavaScript instead of templates,
                  you can easily pass rich data through your app and keep state
                  out of the DOM. Learn Once, Write Anywhere We don’t make
                  assumptions about the rest of your technology stack, so you
                  can develop new features in React without rewriting existing
                  code. React can also render on the server using Node and power
                  mobile apps using React Native.
                </p>
              </div>
              <div className="post-footer">
                <div className="post-meta">
                  <div className="post-meta-info post-like">
                    <i className="fa-regular fa-thumbs-up" />
                    <span className="post-like-number">5</span>
                  </div>
                  <div className="post-meta-info post-comment">
                    <i className="fa-regular fa-comment" />
                    <span className="post-comment-number">5</span>
                  </div>
                </div>
                <ul className="post-tags">
                  <li className="tag">
                    <a className="tag-link" href="/posts?tags=react">
                      react
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="post-image">
              <a className="post-image-link" href="/posts/1774">
                <img
                  src="https://sharing-news-project.s3.amazonaws.com/cover-post/qua-trinh-phat-trien-cua-js-1.jpg"
                  alt="Component-Based Build encapsulated components that manage their own state, then compose them to make complex UIs.  Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.  Learn Once, Write Anywhere We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.  React can also render on the server using Node and power mobile apps using React Native."
                />
              </a>
            </div>
          </div>
        </div>
      </li>
      <li className="post-item">
        <div className="post">
          <div className="post-header">
            <div className="post-user">
              <div className="post-status">
                <i className="fa-solid fa-unlock" />
                Public
              </div>
              <p className="post-date">July 30, 2022</p>
            </div>
            <Button
              classBtn="btn-bookmark"
              text={<i className="fa-regular fa-bookmark"></i>}
            />
          </div>
          <div className="post-body">
            <div className="post-body-left">
              <div className="post-content">
                <h3 className="post-title">
                  <Link to="" className="post-title-link txt-link-primary">
                    Component-Based Build encapsulated components that manage
                    their own state, then compose them to make complex UIs.
                    Since component logic is written in JavaScript instead of
                    templates, you can easily pass rich data through your app
                    and keep state out of the DOM. Learn Once, Write Anywhere We
                    don’t make assumptions about the rest of your technology
                    stack, so you can develop new features in React without
                    rewriting existing code. React can also render on the server
                    using Node and power mobile apps using React Native.
                  </Link>
                </h3>
                <p className="post-desc">
                  Component-Based Build encapsulated components that manage
                  their own state, then compose them to make complex UIs. Since
                  component logic is written in JavaScript instead of templates,
                  you can easily pass rich data through your app and keep state
                  out of the DOM. Learn Once, Write Anywhere We don’t make
                  assumptions about the rest of your technology stack, so you
                  can develop new features in React without rewriting existing
                  code. React can also render on the server using Node and power
                  mobile apps using React Native.
                </p>
              </div>
              <div className="post-footer">
                <div className="post-meta">
                  <div className="post-meta-info post-like">
                    <i className="fa-regular fa-thumbs-up" />
                    <span className="post-like-number">5</span>
                  </div>
                  <div className="post-meta-info post-comment">
                    <i className="fa-regular fa-comment" />
                    <span className="post-comment-number">5</span>
                  </div>
                </div>
                <ul className="post-tags">
                  <li className="tag">
                    <a className="tag-link" href="/posts?tags=react">
                      react
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="post-image">
              <a className="post-image-link" href="/posts/1774">
                <img
                  src="https://sharing-news-project.s3.amazonaws.com/cover-post/qua-trinh-phat-trien-cua-js-1.jpg"
                  alt="Component-Based Build encapsulated components that manage their own state, then compose them to make complex UIs.  Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.  Learn Once, Write Anywhere We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.  React can also render on the server using Node and power mobile apps using React Native."
                />
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default BookmarkItem;
