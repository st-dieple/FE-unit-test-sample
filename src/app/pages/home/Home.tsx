import React from 'react';
import { Sidebar } from '../../shared/components/layout';
import Banner from './partials/Banner';
import SectionPost from './partials/SectionPost';

const Home = () => {
  return (
    <main className="home-page">
      <Banner />
      <div className="content">
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
      </div>
    </main>
  );
};

export default Home;
