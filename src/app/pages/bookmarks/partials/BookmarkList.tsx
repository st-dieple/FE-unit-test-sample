import React, { useState } from 'react';
import { Post } from '../../../shared/components/partials';
import { IPost } from '../../../shared/interfaces/post';

const BookmarkList = () => {
  const [bookmarkList, setBookmarkList] = useState([]);

  return (
    <ul className="post-list">
      {bookmarkList?.map((post: IPost, index: number) => {
        return <Post key={index} post={post} />;
      })}
    </ul>
  );
};

export default BookmarkList;
