import React from 'react';
import { IPost } from './../../../shared/interfaces/post';
import { Post } from './../../../shared/components/partials/Post';

const PostList = (props: any) => {
  const { posts } = props;

  return (
    <ul className="post-list">
      {posts.map((post: IPost, index: number) => {
        return <Post key={index} post={post} />;
      })}
    </ul>
  );
};

export default PostList;
