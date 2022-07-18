import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../assets/images';
import { Button } from '../../../shared/components/partials';

const ArticleSidebar = () => {
  return (
    <div className="article-sidebar">
      <div className="author-sidebar">
        <img className="author-sidebar-image" src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png" alt="Avatar" />
        <Link to="/">Tu Duong</Link>
        <span className="author-follower">10 Followers</span>
        <Button classBtn="btn btn-primary" text="Follow"/>
      </div>
      <ul className="article-list">
        <li className="article-item">
          <img src="https://miro.medium.com/max/875/0*LHGUv2BrR7_tylp8.jpg" alt="article" />
          <h4 className="article-item-title">
            <Link to="/">Memories Are the Best Souvenirs</Link>
          </h4>
        </li>
        <li className="article-item">
          <img src="https://miro.medium.com/max/875/0*LHGUv2BrR7_tylp8.jpg" alt="article" />
          <h4 className="article-item-title">
            <Link to="/">Memories Are the Best Souvenirs</Link>
          </h4>
        </li>
        <li className="article-item">
          <img src="https://miro.medium.com/max/875/0*LHGUv2BrR7_tylp8.jpg" alt="article" />
          <h4 className="article-item-title">
            <Link to="/">Memories Are the Best Souvenirs</Link>
          </h4>
        </li>
        <li className="article-item">
          <img src="https://miro.medium.com/max/875/0*LHGUv2BrR7_tylp8.jpg" alt="article" />
          <h4 className="article-item-title">
            <Link to="/">Memories Are the Best Souvenirs</Link>
          </h4>
        </li>
      </ul>
    </div>
  );
};

export default ArticleSidebar;
