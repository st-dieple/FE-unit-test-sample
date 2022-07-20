import React, { useEffect } from 'react';
import UserItem from './UserItem';

const UserList = ({postList}: any) => {
  return ( 
    <ul className="post-user-list">
      {postList.Posts.map((postItem: any) => (
        <UserItem key={postItem.id} postItem={postItem}/>
      ))}
    </ul>
   );
}

export default UserList;
