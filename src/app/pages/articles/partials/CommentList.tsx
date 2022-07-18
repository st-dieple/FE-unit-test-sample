import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import Comment from '../../../shared/components/partials/Comment';
import { getComment } from '../article.actions';

const CommentList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state: RootState) => state.comments.data);
  useEffect(() => {
    dispatch(getComment({ id: id}));
    // eslint-disable-next-line
  }, []);

  return (
    <ul className="comment-list">
      {
        data.map((comment: any) => (
          <Comment key={comment.id} comment={comment} />
        ))
        } 
    </ul>
  );
};

export default CommentList;
