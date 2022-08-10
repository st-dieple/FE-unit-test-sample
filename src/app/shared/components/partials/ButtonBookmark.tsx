import React, { useState } from 'react';
import { Button } from './Button';
import withAuthChecking from '../hoc/withAuthChecking';

const ButtonBookmark = ({ post, checkAuthBeforeAction }: any) => {
  const [isInBookmark, setIsInBookmark] = useState<boolean>(post.isInBookmark);

  const handleBookmark = () => {};

  return (
    <Button
      classBtn="btn-bookmark"
      onClick={handleBookmark}
      text={
        <i
          className={
            isInBookmark
              ? 'fa-solid fa-bookmark btn-bookmark-active'
              : 'fa-regular fa-bookmark'
          }
        ></i>
      }
    />
  );
};

export default withAuthChecking(ButtonBookmark);
