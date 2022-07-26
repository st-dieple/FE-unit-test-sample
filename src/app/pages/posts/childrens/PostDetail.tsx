import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import {
  getPostById,
  getPostsRecommend,
  getComment,
  getLike,
  getAuthorsInfo,
  resetPostDetailData,
} from '../posts.actions';
import Loading from '../../../shared/components/partials/Loading';
import PostContent from '../partials/PostContent';
import PostComment from '../partials/PostComment';
import PostSideBar from '../partials/PostSideBar';

const PostDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const posts = useSelector((state: RootState) => state.posts);
  const postsRecommend = useSelector(
    (state: RootState) => state.postsRecommend
  );
  const comments = useSelector((state: RootState) => state.comments);
  const likes = useSelector((state: RootState) => state.likes.data);
  const userId = useSelector(
    (state: RootState) => state.postDetail.data.user?.id
  );
  const authorsInfo = useSelector((state: RootState) => state.authors);

  useEffect(() => {
    if (id) {
      dispatch(resetPostDetailData());
      dispatch(getPostById({ id: id }));
      dispatch(getPostsRecommend({ page: 1, size: 5 }));
      dispatch(getComment({ id: id }));
      dispatch(getLike({ id: id }));
    }
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (userId) {
      dispatch(getAuthorsInfo({ id: userId }));
    }
  }, [userId]);

  return posts.isLoading ||
    postsRecommend.isLoading ||
    comments.isLoading ||
    authorsInfo.isLoading ? (
    <Loading />
  ) : (
    <main className="articles-page">
      <section className="section section-article">
        <div className="container">
          <div className="article row">
            <div className="col-8">
              <PostContent likes={likes} />
              <PostComment />
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
