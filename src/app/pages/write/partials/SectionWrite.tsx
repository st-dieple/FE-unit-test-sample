import React from 'react';
import FormPost from '../../../shared/components/partials/FormPost';

const SectionWrite = () => {
  return (
    <section className="section section-write">
      <div className="container">
        <div className="write-inner">
          <h2 className="write-title">Create New Blog</h2>
          <FormPost />
        </div>
      </div>
    </section>
  );
};

export default SectionWrite;
