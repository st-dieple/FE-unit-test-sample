import React from 'react';
import UserPostItem from './UserPostItem';

const UserPosts = ({ postList }: any) => {
  return (
    <ul className="post-user-list">
      {postList.Posts.map((post: any) => (
        <UserPostItem post={post}/>
      ))}
    </ul>
  );
};

export default UserPosts;
