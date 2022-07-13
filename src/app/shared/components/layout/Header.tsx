import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../assets/images';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <h1 className="logo">
            <Link to="/" className="logo-image">
              <img src={Image.Logo} alt="Lotus" />
            </Link>
          </h1>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Write</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="btn btn-primary">Get started</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
