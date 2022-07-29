import React, { useEffect, useState, useRef } from 'react';
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
  const [isRequestingAPI, setIsRequestingAPI] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchParams] = useSearchParams({});
  const paramsTag = searchParams.get('tags');
  const userCurrent = useSelector((state: RootState) => state.users);
  const totalPage = useRef(0);

  useEffect(() => {
    if (paramsTag) {
      setPage((pre) => {
        if (pre === 1) {
          getPostData();
          return pre;
        } else {
          return 1;
        }
      });
    }
  }, [paramsTag]);

  const getPostData = () => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      setLoading(true);
      let api: Promise<any>;
      if (userCurrent) {
        api = postService.getPublicPosts({ tags: paramsTag, page, size: 5 });
      } else {
        api = postService.getPosts({ tags: paramsTag, page, size: 5 });
      }
      api
        .then((res: any) => {
          setIsRequestingAPI(false);
          if (page === 1) {
            setPosts(res.data);
          } else {
            setPosts([...posts, ...res.data]);
          }
          totalPage.current = res.totalPage;
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
    getPostData();
  }, [page]);

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
      if (page !== totalPage.current) {
        setPage(page + 1);
      }
    }
  };

  return (
    <section className="section section-post">
      {loading ? <SekeletonPost /> : <PostList posts={posts} />}
    </section>
  );
};

export default SectionPost;
