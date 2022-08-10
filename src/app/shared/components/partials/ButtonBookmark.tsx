import React, { useState } from 'react';
import { BookmarkService } from '../../../core/serivces/bookmark.service';
import { Button } from './Button';
import withAuthChecking from '../hoc/withAuthChecking';

const bookmarkService = new BookmarkService();
const ButtonBookmark = ({ post, checkAuthBeforeAction }: any) => {
  const [isInBookmark, setIsInBookmark] = useState<boolean>(post.isInBookmark);
  const [isRequestingAPI, setIsRequestingAPI] = useState<boolean>(false);

  const addBookmark = () => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      bookmarkService
        .addBookmark(post.id)
        .then((res: any) => {
          setIsRequestingAPI(false);
          setIsInBookmark(res.isInBookmark);
        })
        .catch((err: any) => {
          setIsRequestingAPI(false);
        });
    }
  };

  const handleBookmark = () => {
    checkAuthBeforeAction(() => addBookmark());
  };

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
