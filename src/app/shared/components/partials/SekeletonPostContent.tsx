import React from 'react';

const SekeletonPostContent = () => {
  return (
    <>
      <div className="article-header">
        <div className="article-header-left">
          <div className="author-image">
            <img className="sekeleton sekeleton-detail-image"></img>
          </div>
          <div className="article-author">
            <div className="sekeleton sekeleton-detail-name"></div>
            <div className="sekeleton sekeleton-detail-time"></div>
          </div>
        </div>
      </div>
      <div className="article-content">
        <h2 className="sekeleton sekeleton-detail-title"></h2>
        <img className="sekeleton sekeleton-detail-content-image" />
        <div className="sekeleton sekeleton-detail-text"></div>
        <div className="sekeleton sekeleton-detail-text"></div>
        <div className="sekeleton sekeleton-detail-text"></div>
        <div className="sekeleton sekeleton-detail-text"></div>
      </div>
    </>
  );
};

export default SekeletonPostContent;
