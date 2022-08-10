import React, { useState } from 'react';
import PostList from '../partials/PostList';

const RecycleBin = () => {
  const [posts, setPosts] = useState([]);

  return (
    <main className="main-content">
      <h2 className="section-title txt-center">My Recycle Bin</h2>
      <PostList posts={posts} />
    </main>
  );
};

export default RecycleBin;
