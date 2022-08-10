import React from 'react';
import BookmarkList from './partials/BookmarkList';

const Bookmark = () => {
  return (
    <section className="section-bookmark">
      <h2 className="bookmark-title">My Bookmarks</h2>
      <BookmarkList />
    </section>
  );
};

export default Bookmark;
