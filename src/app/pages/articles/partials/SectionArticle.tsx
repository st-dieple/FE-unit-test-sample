import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import Loading from '../../../shared/components/partials/Loading';
import {
  getPostById,
  getPostsRecommend,
  getComment,
} from './../article.actions';
import ArticleDetail from './ArticleDetail';
import ArticleSidebar from './ArticleSidebar';
import CommentList from './CommentList';

const SectionArticle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const articles = useSelector((state: RootState) => state.articles);
  const postsRecommend = useSelector(
    (state: RootState) => state.postsRecommend
  );
  const comments = useSelector((state: RootState) => state.comments);

  useEffect(() => {
    dispatch(getPostById({ id: id }));
    dispatch(getPostsRecommend({ page: 1, size: 5 }));
    dispatch(getComment({ id: id }));
    // eslint-disable-next-line
  }, [id]);

  return articles.isLoading ||
    postsRecommend.isLoading ||
    comments.isLoading ? (
    <Loading />
  ) : (
    <section className="section section-article">
      <div className="container">
        <div className="article row">
          <div className="col-8">
            <ArticleDetail />
            <CommentList />
          </div>
          <div className="col-4">
            <ArticleSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionArticle;
