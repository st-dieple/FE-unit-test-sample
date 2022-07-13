import React from 'react';
import SectionPost from './SectionPost';
import { Sidebar } from '../../../shared/components/layout';

const SectionContent = () => {
  return (
    <section className="section section-content">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <SectionPost />
          </div>
          <div className="col-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContent;
