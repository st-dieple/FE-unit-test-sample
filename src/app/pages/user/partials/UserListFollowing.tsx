import React from 'react';
import Follower from '../../../shared/components/partials/Follower';

const UserListFollowing = () => {
  return (
    <>
      <h4 className="follower-title">Following</h4>
      <ul className="follower-list">
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
        <Follower />
      </ul>
    </>
  );
};

export default UserListFollowing;
