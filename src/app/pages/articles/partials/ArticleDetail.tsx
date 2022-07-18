import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../assets/images';
import { Tag } from '../../../shared/components/partials';

const ArticleDetail = () => {
  return (
    <div className="articles-item">
      <div className="article-header">
        <div className="author-image">
          <Link to="/">
            <img src={Image.Avatar} alt="avatar" />
          </Link>
        </div>
        <div className="article-author">
          <div className="author-name">
            <Link to="/">
            Benya Clark
            </Link>
          </div>
          <div className="author-time">
            <span className="author-date">31 Jul 2022</span>
            <span>·</span>
            <span className="readingTime">5 min read</span>
          </div>
        </div>
      </div>
      <div className="article-content">
        <h2 className="article-title">Who Is Gage Skidmore?</h2>
        <div className="tag-article">
          <Tag name="React" path="/"/>
          <Tag name="Javascript" path="/"/>
          <Tag name="React" path="/"/>
          <Tag name="Redux" path="/"/>
        </div>
        <img className="article-image" src="https://miro.medium.com/max/875/0*LHGUv2BrR7_tylp8.jpg" alt="picture" />
        <div className="article-text">
          <p>
          Whereas staying on top of your ‘to do list’ all the time can be tempting, 
          it will simply kill your productivity in the long run. Therefore, defining a work schedule and learning 
          to draw the line between work and leisure is essential in keeping you unplugged. 
          We’ve chosen three tried-and-true tips in this regard
          </p>
        </div>
        <div className="comment-article">
          <div className="comment-footer-item">
            <i className="fa-regular fa-heart"></i>
            <span>10</span>
          </div>
          <div className="comment-footer-item">
            <i className="fa-regular fa-comment"></i>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ArticleDetail;
