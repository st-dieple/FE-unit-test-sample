import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../../../../assets/images';
import { RootState } from '../../../app.reducers';
import { IUser } from '../../../shared/interfaces/user';
import ButtonFollow from '../../posts/partials/ButtonFollow';

interface IUserProps {
  userInfo: IUser;
}

const UserInfo = ({ userInfo }: IUserProps) => {
  const authorsInfo = useSelector((state: RootState) => state.authors.data);

  return (
    <div className="author-info-content">
      <div className="author-avatar">
        <img
          src={userInfo.picture || Image.Avatar}
          alt={userInfo.displayName}
        />
      </div>
      <div className="author-info">
        <h2 className="author-name">{userInfo.displayName}</h2>
        <ul className="author-list">
          <li className="author-item">{userInfo.Posts?.length || 0} Posts</li>
          <li className="author-item">{authorsInfo.followers} Followers</li>
          <li className="author-item">{userInfo.followings} Following</li>
        </ul>
        <ButtonFollow authorsInfo={authorsInfo} id={userInfo.id} />
      </div>
    </div>
  );
};

export default UserInfo;
