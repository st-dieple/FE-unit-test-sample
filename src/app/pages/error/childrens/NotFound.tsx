import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../assets/images';

const NotFound = () => {
  return (
    <div className="error">
      <div className="error-image">
        <img src={Image.NotFound} alt="404 Not Found" />
      </div>
      <h1 className="error-desc">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </h1>
      <Link to="/" className="btn btn-primary error-btn">
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
