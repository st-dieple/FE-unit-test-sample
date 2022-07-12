import React from 'react';

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
              <a href="#" className="nav-link">Our story</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Membership</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Write</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Sign In</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Get started</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
