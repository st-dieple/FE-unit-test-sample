import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="section-recent-post">
        <h3 className="sidebar-title">Recent Posts</h3>  
        <ul className="post-list">
          <li className="post-item">
            <img className="post-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvC8d9K3K3cE5KFEByBPcazIbyxvt-NA7Iw&usqp=CAU" alt="Lorem" />
            <Link to="#" className="post-link">
              <h4 className="post-link-title">Far far away, behind the word mountains</h4>
              <span className="post-link-text">August 15, 2019</span>
            </Link>
          </li>
          <li className="post-item">
            <img className="post-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvC8d9K3K3cE5KFEByBPcazIbyxvt-NA7Iw&usqp=CAU" alt="Lorem" />
            <Link to="#" className="post-link">
              <h4 className="post-link-title">Far far away, behind the word mountains</h4>
              <span className="post-link-text">August 15, 2019</span>
            </Link>
          </li>
          <li className="post-item">
            <img className="post-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvC8d9K3K3cE5KFEByBPcazIbyxvt-NA7Iw&usqp=CAU" alt="Lorem" />
            <Link to="#" className="post-link">
              <h4 className="post-link-title">Far far away, behind the word mountains</h4>
              <span className="post-link-text">August 15, 2019</span>
            </Link>
          </li>
          <li className="post-item">
            <img className="post-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvC8d9K3K3cE5KFEByBPcazIbyxvt-NA7Iw&usqp=CAU" alt="Lorem" />
            <Link to="#" className="post-link">
              <h4 className="post-link-title">Far far away, behind the word mountains</h4>
              <span className="post-link-text">August 15, 2019</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="section-tag">
        <h3 className="sidebar-title">Tag</h3>
        <ul className="tag-list">
          <li className="tag-item">
            <Link className="tag-link" to="#">#Health</Link>
          </li>
          <li className="tag-item">
            <Link className="tag-link" to="#">#Lifestyle</Link>
          </li>
          <li className="tag-item">
            <Link className="tag-link" to="#">#Music</Link>
          </li>
          <li className="tag-item">
            <Link className="tag-link" to="#">#Technology</Link>
          </li>
          <li className="tag-item">
            <Link className="tag-link" to="#">#Travel</Link>
          </li>
          <li className="tag-item">
            <Link className="tag-link" to="#">#Video</Link>
          </li>
        </ul>
      </div>
      <div className="section-social">
      <h3 className="sidebar-title">Social</h3>
      <ul className="social-list">
        <li className="social-item">
          <Link className="social-link" to="#">
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </li>
        <li className="social-item">
          <Link className="social-link" to="#">
            <i className="fa-brands fa-facebook"></i>
          </Link>
        </li>
        <li className="social-item">
          <Link className="social-link" to="#">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </li>
        <li className="social-item">
          <Link className="social-link" to="#">
            <i className="fa fa-rss"></i>
          </Link>
        </li>
      </ul>
      </div>
    </aside>
  );
};
