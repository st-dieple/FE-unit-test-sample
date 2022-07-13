import React, { useEffect } from 'react';
import { Post } from '../../../shared/components/partials';
import PostList from './PostList';

const SectionPost = () => {
  return (
    <section className="section section-post">
        <PostList />
    </section>
  )
}

export default SectionPost;
