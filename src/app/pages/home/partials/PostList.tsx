import React from 'react';
import { IPost } from './../../../shared/interfaces/post';
import { Post } from './../../../shared/components/partials/Post';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { useParams } from 'react-router-dom';

const PostList = (props: any) => {
  const { posts } = props;  

  return (
    <ul className="post-list">
      {
        posts.map((post: IPost, index: number) => {
          return <Post key={index} post={post}/>
        })
      }
    </ul>
  );
};

export default PostList;
