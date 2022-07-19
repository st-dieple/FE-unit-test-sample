import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../assets/images';
import { formatDate } from '../../common/formatDate';
import { IComment } from '../../interfaces/comment';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({ comment }: ICommentProps) => {
  return (
    <li className="comment-item">
      <div className="comment-header">
        <Link to="/" className="comment-user">
          <div className="user-avatar">
            <img src={comment.user.picture || Image.Avatar} alt="avatar" />
            {comment.user.isActive === true && (
              <span className="user-active"></span>
            )}
          </div>
          <h4 className="user-name">{comment.user.displayName}</h4>
          <p className="user-created">· {formatDate(comment.createdAt)}</p>
        </Link>
      </div>
      <div className="comment-content">
        <p className="comment-desc">{comment.comment}</p>
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
