import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = posts => {
  return (
    <div>
      <h2>Post components</h2>
      {posts.map(post => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          {post.id}
        </Link>
      ))}
      <Outlet></Outlet>
    </div>
  );
};

export default Posts;
