import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { getData } from '../../../core/helpers/localstorage';
import Image from '../../../../assets/images';

export const Header = () => {
  const user = useSelector((state: RootState) => state.users.data);
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

  return (
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
              <Link to="/write" className="nav-link">
                Write
              </Link>
            </li>
            {getData("token", "") ? (
              <li className="nav-item">
                <div className="nav-image">
                  <img
                    src={user.picture || Image.Avatar}
                    alt={user.displayName}
                  />
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/auth/sign-in" className="nav-link">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/auth/sign-up" className="btn btn-secondary">
                    Get started
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
