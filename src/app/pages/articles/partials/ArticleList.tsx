import React from 'react';
import { IPost } from './../../../shared/interfaces/post';
import ArticleItem from './ArticleItem';

interface IArticleListProps {
  data: any;
}

const ArticleList = ({ data }: IArticleListProps) => {  
  return (
    <ul className="article-list">
      {data.map((item: IPost) => (
        <ArticleItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ArticleList;
