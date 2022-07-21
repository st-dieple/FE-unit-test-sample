import React from 'react';
import { Link } from 'react-router-dom';
import UserPostItem from './UserPostItem';
import Image from '../../../../assets/images';

const UserPosts = ({ postList }: any) => {
  return (
    <ul className="post-user-list">
      {postList.Posts.map((post: any) => (
        <UserPostItem key={post.id} post={post}/>
      ))}
    </ul>
  );
};

export default UserPosts;
