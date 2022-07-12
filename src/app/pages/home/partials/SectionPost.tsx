import React from 'react';
import { Post } from '../../../shared/components/partials';

const SectionPost = () => {
  return (
    <section className="section section-post">
      <ul className="post-list">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </section>
  )
}

export default SectionPost