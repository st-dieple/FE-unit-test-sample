import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getPosts } from './../home.actions';
import PostList from './PostList';
import Loading from '../../../shared/components/partials/Loading';

const SectionPost = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const posts = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(getPosts({ page, size: 5 }));
    // eslint-disable-next-line
  }, [page]);

  const handleScroll = (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop >=
      e.target.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="section section-post">
      <PostList posts={posts.data} />
      {posts.isLoading && <Loading />}
    </section>
  );
};

export default SectionPost;
