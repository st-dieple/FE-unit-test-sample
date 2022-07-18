import React from 'react';
import ArticleItem from './ArticleItem';
import { IPost } from './../../../shared/interfaces/post';

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
