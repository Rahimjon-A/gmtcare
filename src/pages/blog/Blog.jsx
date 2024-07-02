import React from 'react';
import { Outlet } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Blog;