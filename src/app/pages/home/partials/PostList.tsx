import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getPosts } from './../home.actions';
import { IPost } from './../../../shared/interfaces/post';
import { Post } from './../../../shared/components/partials/Post';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.data);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getPosts({page, size: 5}));
  }, [page]);

  const handleScroll = (e: any) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 20 >= e.target.documentElement.scrollHeight)
    {      
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
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
};

export default PostList;
