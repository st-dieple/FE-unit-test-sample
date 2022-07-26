import React from 'react';
import UserPostItem from './UserPostItem';

const UserPosts = ({ postList }: any) => {
  return (
    <ul className="post-user-list">
      {postList?.map((post: any) => (
        <UserPostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default UserPosts;
