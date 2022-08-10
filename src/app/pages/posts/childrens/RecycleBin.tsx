import React, { useState } from 'react';
import PostList from '../partials/PostList';

const RecycleBin = () => {
  const [posts, setPosts] = useState([]);

  return (
    <section className="section-content">
      <div className="container">
        <h2 className="section-title txt-center">My Recycle Bin</h2>
        <PostList posts={posts} />
      </div>
    </section>
  );
};

export default RecycleBin;
