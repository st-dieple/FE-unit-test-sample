import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { signOut } from '../../../auth/auth.actions';
import { useDialog } from '../../contexts/dialog.contexts';
import { getData } from '../../../core/helpers/localstorage';
import PopUpLogin from '../partials/PopupLogin';
import Image from '../../../../assets/images';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dialog = useDialog();
  const user = useSelector((state: RootState) => state.users.data);
  const [showHeaderSignIn, setShowHeaderSignIn] = useState<boolean>(false);
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

  const handleWrite = (e: any) => {
    e.preventDefault();
    if(getData('token', '')) {
      navigate('/posts/new');
    } else {
      dialog?.addDialog({ content: <PopUpLogin /> });
      setShowHeaderSignIn(!showHeaderSignIn);
    }
  };

  const handleSignOut = () => {
    dispatch(signOut());
    setShowHeaderSignIn(!showHeaderSignIn);
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
              <Link to="/posts/new" className="nav-link" onClick={handleWrite}> 
                Write
              </Link>
            </li>
            {getData('token', '') && !showHeaderSignIn ? (
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
                      <Link to="/">
                        <i className="fa-solid fa-file-pen"></i>
                        Update Profile
                      </Link>
                    </li>
                    <li className="dropdown-item" onClick={handleSignOut}>
                      <Link to="">
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
