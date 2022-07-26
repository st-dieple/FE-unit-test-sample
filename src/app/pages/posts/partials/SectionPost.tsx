import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { getPosts, getPublicPosts } from './../posts.actions';
import PostList from './PostList';
import Loading from '../../../shared/components/partials/Loading';

const SectionPost = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const posts = useSelector((state: RootState) => state.posts);
  const userCurrent = useSelector((state: RootState) => state.users);

  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams({});
  const paramsTag = searchParams.get('tags');

  useEffect(() => {
    setPage(1);
  }, [paramsTag]);

  useEffect(() => {
    if (userCurrent) {
      dispatch(getPublicPosts({ tags: paramsTag, page, size: 5 }));
    } else {
      dispatch(getPosts({ tags: paramsTag, page, size: 5 }));
    }
    // eslint-disable-next-line
  }, [page, paramsTag]);

  useEffect(() => {
    if (!posts.isLoading && posts.loadMore) {
      window.addEventListener('scroll', handleScroll);
    }
  }, [posts.isLoading, posts.loadMore]);

  const handleScroll = (e: any) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop >=
      e.target.documentElement.scrollHeight
    ) {
      window.removeEventListener('scroll', handleScroll);
      setPage(page + 1);
    }
  };

  return (
    <section className="section section-post">
      <PostList posts={posts.data} />
      {posts.isLoading && <Loading />}
    </section>
  );
};

export default SectionPost;
