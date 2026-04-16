import React from 'react';
import { Link } from 'react-router';
const NotFound = () => {
  return (
    <div className='text-center space-y-2 mt-10'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, The page you are looking for does not exist.</p>
      <Link to={'/'} className='bg-[#244D3F] text-white p-2 rounded-2xl'> Go Home Back </Link>
    </div>
  );
};

export default NotFound;