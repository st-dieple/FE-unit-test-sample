import React from 'react';
import Form from '../../../shared/components/partials/Form';

const SectionWrite = () => {
  return (
    <section className="section section-write">
      <div className="container">
        <div className="write-inner">
          <h2 className="write-title">Create New Blog</h2>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default SectionWrite;
