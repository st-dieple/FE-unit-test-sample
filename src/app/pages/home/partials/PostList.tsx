import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getPosts } from './../home.actions';
import { IPost } from './../../../shared/interfaces/post';
import { Post } from './../../../shared/components/partials/Post';

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
  )
}

export default PostList;
