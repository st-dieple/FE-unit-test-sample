import React, { useState } from 'react';
import PostList from '../posts/partials/PostList';

const Bookmark = () => {
  const [posts, setPosts] = useState([]);

  return (
    <section className="section-bookmark">
      <h2 className="section-title txt-center">My Bookmarks</h2>
      <PostList posts={posts} />
    </section>
  );
};

export default Bookmark;
