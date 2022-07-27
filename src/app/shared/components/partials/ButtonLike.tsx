import React from 'react';
import withAuthChecking from '../hoc/withAuthChecking';
import { useDispatch } from 'react-redux';
import { putLike } from '../../../pages/posts/posts.actions';

const ButtonLike = ({ liked, id, color, checkAuthBeforeAction }: any) => {
  const dispatch = useDispatch();
  const handleLike = () => {
    checkAuthBeforeAction(() => dispatch(putLike({ id })));
  };

  return (
    <div className="interact-like">
      <i
        className={
          color ? 'fa-solid fa-thumbs-up fa-liked' : 'fa-regular fa-thumbs-up'
        }
        onClick={handleLike}
      ></i>
      {liked}
    </div>
  );
};

export default withAuthChecking(ButtonLike);
