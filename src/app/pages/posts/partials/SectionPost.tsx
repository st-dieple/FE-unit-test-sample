import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { PostService } from '../../../core/serivces/post.service';
import PostList from './PostList';
import SekeletonPost from '../../../shared/components/partials/SekeletonPost';

const postService = new PostService();
const SectionPost = () => {
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams({});
  const paramsTag = searchParams.get('tags');
  const userCurrent = useSelector((state: RootState) => state.users);

  useEffect(() => {
    setPage(1);
  }, [paramsTag]);

  const getPublicPosts = () => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      setLoading(true);
      postService
        .getPublicPosts({ tags: paramsTag, page, size: 5 })
        .then((res: any) => {
          setIsRequestingAPI(false);
          setPosts([...posts, ...res.data]);
          setLoading(false);
          setLoadMore(res.loadMore);
        })
        .catch((error) => {
          setIsRequestingAPI(false);
          setLoading(false);
        });
    }
  };

  const getPosts = () => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      setLoading(true);
      postService
        .getPosts({ tags: paramsTag, page, size: 5 })
        .then((res: any) => {
          setIsRequestingAPI(false);
          setPosts([...posts, ...res.data]);
          setLoading(false);
          setLoadMore(res.loadMore);
        })
        .catch((error) => {
          setIsRequestingAPI(false);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (userCurrent) {
      getPublicPosts();
    } else {
      getPosts();
    }
  }, [page, paramsTag]);

  useEffect(() => {
    if (!loading && loadMore) {
      window.addEventListener('scroll', handleScroll);
    }
  }, [loading, loadMore]);

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
      <PostList posts={posts} />
      {loading && <SekeletonPost />}
    </section>
  );
};

export default SectionPost;
