import React from 'react';
import Image from '../../../../assets/images';
import { checkUserId } from '../../../shared/common/checkUserId';
import { useDialog } from '../../../shared/contexts/dialog.contexts';
import { IUser } from '../../../shared/interfaces/user';
import ButtonFollow from '../../posts/partials/ButtonFollow';
import UserListFollow from './UserListFollow';

interface IUserProps {
  userInfo: IUser;
}

const UserInfo = ({ userInfo }: IUserProps) => {
  const dialog = useDialog();

  const handleListFollowers = () => {
    dialog?.addDialog({
      content: <UserListFollow id={userInfo.id} type="followers" />,
    });
  };

  const handleListFollowing = () => {
    dialog?.addDialog({
      content: <UserListFollow id={userInfo.id} type="followings" />,
    });
  };

  return (
    <div className="author-info-content">
      <div className="author-avatar">
        <img
          src={userInfo?.picture || Image.Avatar}
          alt={userInfo?.displayName}
        />
      </div>
      <div className="author-info">
        <h2 className="author-name">{userInfo?.displayName}</h2>
        <ul className="author-list">
          <li className="author-item">{userInfo.Posts?.length || 0} Posts</li>
          <li className="author-item" onClick={handleListFollowers}>
            {userInfo?.followers} Followers
          </li>
          <li className="author-item" onClick={handleListFollowing}>
            {userInfo?.followings} Following
          </li>
        </ul>
        {!checkUserId(userInfo.id) && (
          <ButtonFollow userInfo={userInfo} id={userInfo.id} />
        )}
      </div>
    </div>
  );
};

export default UserInfo;
