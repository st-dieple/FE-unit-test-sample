import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../assets/images';

const Follower = () => {
  return (
    <li className="follower">
      <div className="follower-item">
        <div className="follower-image">
          <Link to='/' className="follower-image-link">
            <img src={Image.Avatar} alt="" />
          </Link>
        </div>
        <div className="follower-info">
          <Link to="/" className="follower-username">
            <span>st-longngo</span>
          </Link>
          <p className="follower-name">Quoc Long</p>
        </div>
      </div>
    </li>
  );
};

export default Follower;
