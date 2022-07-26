import React from 'react';
import Follower from '../../../shared/components/partials/Follower';

const UserListFollowers = () => {
  return (
    <>
      <h4 className="follower-title">Followers</h4>
      <ul className="follower-list">
        <Follower />
        <Follower />
        <Follower />
        <Follower />
      </ul>
    </>
  );
};

export default UserListFollowers;
