import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { getPostById } from '../posts.actions';
import PostContent from '../partials/PostContent';
import PostComment from '../partials/PostComment';
import PostSideBar from '../partials/PostSideBar';
import SekeletonPostContent from '../../../shared/components/partials/SekeletonPostContent';
import SekeletonComment from '../../../shared/components/partials/SekeletonComment';
import WithAuth from '../../../shared/components/hoc/WithAuth';

const PostDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const posts = useSelector((state: RootState) => state.postDetail);

  useEffect(() => {
    if (id) {
      dispatch(getPostById({ id: id }));
    }
    // eslint-disable-next-line
  }, [id]);

  return (
    <main className="articles-page">
      <section className="section section-article">
        <div className="container">
          <div className="article row">
            <div className="col-8">
              {posts.isLoading ? (
                <SekeletonPostContent />
              ) : (
                <PostContent post={posts.data} />
              )}
              {posts.isLoading ? <SekeletonComment /> : <PostComment />}
            </div>
            <div className="col-4">
              <PostSideBar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostDetail;
