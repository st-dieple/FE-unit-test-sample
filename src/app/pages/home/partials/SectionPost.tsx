import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { getPosts, getPublicPosts } from './../home.actions';
import PostList from './PostList';
import Loading from '../../../shared/components/partials/Loading';

const SectionPost = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const posts = useSelector((state: RootState) => state.posts);
  const userCurrent = useSelector((state: RootState) => state.users);
  useEffect(() => {
    if(userCurrent) {
      dispatch(getPublicPosts({ page, size: 5 }));
    }else {
      dispatch(getPosts({ page, size: 5 }))
    }
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    if(!posts.isLoading && posts.loadMore) {
      window.addEventListener('scroll', handleScroll);
    }
  }, [posts.isLoading, posts.loadMore])

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
