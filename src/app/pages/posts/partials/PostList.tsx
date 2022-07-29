import React, { useEffect, useState } from 'react';
import { IPost } from './../../../shared/interfaces/post';
import { Post } from './../../../shared/components/partials/Post';

const PostList = (props: any) => {
  const { posts } = props;
  const [postList, setPost] = useState<any>(props.posts);

  useEffect(() => {
    setPost(posts);
  }, [posts]);

  return (
    <ul className="post-list">
      {postList?.map((post: IPost, index: number) => {
        return <Post key={index} post={post} setPost={setPost} />;
      })}
    </ul>
  );
};

export default PostList;
