import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { IComment } from '../../../shared/interfaces/comment';
import Comment from '../../../shared/components/partials/Comment';

const CommentList = () => {
  const data = useSelector((state: RootState) => state.comments.data);
  return (
    <ul className="comment-list">
      {data.map((comment: IComment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentList;
