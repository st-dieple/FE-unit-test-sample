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
            <img
              src={comment.user.picture || Image.Avatar}
              alt="avatar"
              onError={(e: any) => {
                e.target["onerror"] = null;
                e.target["src"] = Image.Avatar;
              }}
            />
            {comment.user.isActive && <span className="user-active"></span>}
          </div>
          <h4 className="user-name">{comment.user.displayName}</h4>
          <p className="user-created">· {formatDate(comment.createdAt)}</p>
        </Link>
      </div>
      <div className="comment-content">
        <p className="comment-desc">{comment.comment}</p>
      </div>
    </li>
  );
};

export default Comment;
