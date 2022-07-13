import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Image from '../../../../assets/images';

export const Header = () => {
  const location = useLocation();
  const [sticky, setSticky] = useState<string>('');

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 100 ? 'header-sticky' : '';
    setSticky(stickyClass);
  };

  return location.pathname.includes('/auth') ? null : (
    <header className={`header ${sticky}`}>
      <div className="container">
        <div className="header-inner">
          <h1 className="logo">
            <Link to="/" className="logo-image">
              <img src={Image.Logo} alt="Lotus" />
            </Link>
          </h1>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Write
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/auth" className="nav-link">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/auth/register" className="btn btn-primary">
                Get started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
