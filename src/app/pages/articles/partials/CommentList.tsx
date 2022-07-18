import React from 'react';
import Comment from '../../../shared/components/partials/Comment';

const CommentList = () => {
  return (
    <ul className="comment-list">
      <Comment />
      <Comment />
      <Comment />
    </ul>
  );
};

export default CommentList;
