import React from 'react';
import { Outlet } from 'react-router-dom';

const Page = () => {
  return (
    <main className="pages-container">
      <Outlet />
    </main>
  );
};

export default Page;
