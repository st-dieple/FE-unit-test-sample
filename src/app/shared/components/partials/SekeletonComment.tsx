import React, { useState } from 'react';

const SekeletonComment = () => {
  const [sekeletonComment, setSekeletonComment] = useState(
    Array.from({ length: 5 })
  );
  return (
    <>
      {sekeletonComment.map((item, index) => (
        <div key={index} className="comment-item">
          <div className="sekeleton sekeleton-comment"></div>
        </div>
      ))}
    </>
  );
};

export default SekeletonComment;
