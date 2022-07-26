import React, { useState } from 'react';

const SekeletonRecommendPost = () => {
  const [sekeletonRecommendPost, setSekeletonRecommendPost] = useState(Array.from({ length: 5 }));
  return (
    <>
      {sekeletonRecommendPost.map((item, index) => (
        <div key={index} className="article-item">
          <div className="article-item-content">
            <h4 className="sekeleton sekeleton-recommend-title"></h4>
            <p className="sekeleton sekeleton-recommend-date"></p>
          </div>
          <div className="article-item-image">
            <div className="sekeleton sekeleton-recommend-image"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SekeletonRecommendPost;
