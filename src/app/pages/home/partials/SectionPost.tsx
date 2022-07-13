import React, { useEffect, useState } from 'react';
import { Post } from '../../../shared/components/partials';
import PostList from './PostList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getPosts } from './../home.actions';
import { IPost } from './../../../shared/interfaces/post';
import { WithLoading } from '../../../shared/components/hoc/WithLoading';
const ListWithLoading = WithLoading(PostList);

const SectionPost = () => {
  const posts = useSelector((state: RootState) => state.posts);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts({page: 1, size: 10}))
  }, []);

  return (
    <section className='section section-post'>
      <ListWithLoading isLoading={posts.isLoading} props={{posts: posts.data}} />
    </section>
  );
};

export default SectionPost;
