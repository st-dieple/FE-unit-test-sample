import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { signOut } from '../../../auth/auth.actions';
import Image from '../../../../assets/images';
import { clearUserInfo } from '../../../pages/user/user.actions';
import withAuthChecking from '../hoc/withAuthChecking';

const WriteTemplate = ({checkAuthBeforeAction}: any) => {
  const navigate = useNavigate();
  const handleWrite = (e: any) => {
    e.preventDefault();
    checkAuthBeforeAction(() => navigate('/posts/new'));
  };
  return (
    <li className="nav-item">
      <Link to="/posts/new" className="nav-link" onClick={handleWrite}>
        Write
      </Link>
    </li>
  );
};

const Write = withAuthChecking(WriteTemplate);

export const Header = () => {
  const dispatch = useDispatch();
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

  const handleSignOut = () => {
    dispatch(signOut());
    dispatch(clearUserInfo());
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
            <Write />
            {Object.keys(user).length ? (
              <li className="nav-item">
                <div className="nav-image">
                  <img
                    src={user.picture || Image.Avatar}
                    alt={user.displayName}
                    onError={(e: any) => {
                      e.target['onerror'] = null;
                      e.target['src'] = Image.Avatar;
                    }}
                  />
                </div>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link to={`/profile/me`}>
                      <i className="fa-solid fa-user"></i>
                      Profile
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/profile/update">
                      <i className="fa-solid fa-file-pen"></i>
                      Update Profile
                    </Link>
                  </li>
                  <li className="dropdown-item" onClick={handleSignOut}>
                    <Link to="/">
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                      Sign Out
                    </Link>
                  </li>
                </ul>
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
