import React from 'react';
import ArticleDetail from './ArticleDetail';
import ArticleSidebar from './ArticleSidebar';
import CommentList from './CommentList';

const SectionArticle = () => {
  return (
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
