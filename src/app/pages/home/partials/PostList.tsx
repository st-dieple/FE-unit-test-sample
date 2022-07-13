import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getPosts } from './../home.actions';
import { IPost } from './../../../shared/interfaces/post';
import { Post } from './../../../shared/components/partials/Post';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.data);
  
  useEffect(() => {
    dispatch(getPosts({page: 1, size: 10}))
  }, []);

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
