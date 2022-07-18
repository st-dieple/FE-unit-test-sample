import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../assets/images';

const Comment = () => {
  return (
    <li className="comment-item">
      <div className="comment-header">
        <Link to="/" className="comment-user">
          <div className="user-avatar">
            <img src={Image.Avatar} alt="avatar" />
            <span className="user-active"></span>
          </div>
          <h4 className="user-name">Quoc Long</h4>
        </Link>
      </div>
      <div className="comment-content">
        <p className="comment-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          facere! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nesciunt, rerum.
        </p>
      </div>
      <div className="comment-footer">
        <div className="comment-footer-item">
          <i className="fa-regular fa-heart"></i>
          <span>0</span>
        </div>
        <div className="comment-footer-item">
          <i className="fa-regular fa-comment"></i>
          <span>0</span>
        </div>
        <p className="comment-reply">Reply</p>
      </div>
    </li>
  );
};

export default Comment;
