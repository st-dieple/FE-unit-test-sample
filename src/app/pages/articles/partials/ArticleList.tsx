import React from 'react';
import ArticleItem from './ArticleItem';

interface IArticleListProps {
  data: any;
}

const ArticleList = ({ data }: IArticleListProps) => {
  console.log(data);

  return (
    <ul className="article-list">
      {data.map((item: any) => (
        <ArticleItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ArticleList;
