import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { getData } from '../../../core/helpers/localstorage';
import Image from '../../../../assets/images';
import { parseJwt } from '../../../core/helpers/parseJwt';

export const Header = () => {
  const user = useSelector((state: RootState) => state.users.data);
  const token = getData('token', '');
  let id: any;
    if(token) {
      id = parseJwt(token).userId
    }

  const [sticky, setSticky] = useState<string>('');
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const handleClick = (e: any) => {
    if (container.current && !container.current.contains(e.target)) {
      setOpen(false);
    }
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
              <Link to="/" className="nav-link">
                Write
              </Link>
            </li>
            {getData("token", "") ? (
              <li className="nav-item">
                <div className="nav-image" ref={container} onClick={() => setOpen(!open)}>
                  <img
                    src={user.picture || Image.Avatar}
                    alt={user.displayName}
                  />
                </div>
                {open && (
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <Link to={`/users/${id}`}>
                        Profile
                        <i className="fa-solid fa-user"></i>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/">
                        Update Profile
                        <i className="fa-solid fa-file-pen"></i>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/">
                        Sign Out
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                      </Link>
                    </li>
                  </ul>
                )}
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
