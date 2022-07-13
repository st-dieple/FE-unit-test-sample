import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from '../partials';
import Icon from './../../../../assets/icons/index';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="section-tag">
        <h3 className="sidebar-title">
          DISCOVER MORE OF WHAT MATTERS TO YOU
          <span className="sidebar-border"></span>
        </h3>
        <ul className="tag-list">
          <Tag name="React" path="/" />
          <Tag name="CSS" path="/" />
          <Tag name="Framework" path="/" />
          <Tag name="Entertainment" path="/" />
          <Tag name="Travel" path="/" />
          <Tag name="Video" path="/" />
        </ul>
      </div>
      <div className="section-social">
        <h3 className="sidebar-title">
          SOCIAL MEDIA
        </h3>
        <ul className="social-list">
          <li className="social-item">
            <Link className="social-link" to="/">
              <img src={Icon.Facebook} alt="facebook" />
            </Link>
          </li>
          <li className="social-item">
            <Link className="social-link" to="/">
              <img src={Icon.Instagram} alt="instagram" />
            </Link>
          </li>
          <li className="social-item">
            <Link className="social-link" to="/">
              <img src={Icon.Youtube} alt="youtube" />
            </Link>
          </li>
          <li className="social-item">
            <Link className="social-link" to="/">
              <img src={Icon.Twitter} alt="twitter" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
