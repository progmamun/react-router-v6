import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  return (
    <div>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <Link to="/friends">Friends</Link>
        <CustomLink to="/about">About</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
