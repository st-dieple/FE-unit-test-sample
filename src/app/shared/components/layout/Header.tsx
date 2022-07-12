import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <h1 className="logo">
            Lotus
          </h1>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Our story</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Membership</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Write</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Get started</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
