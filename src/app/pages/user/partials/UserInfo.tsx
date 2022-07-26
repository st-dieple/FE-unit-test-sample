import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserService } from '../../../core/serivces/user.service';
import { RootState } from '../../../app.reducers';
import { useDialog } from '../../../shared/contexts/dialog.contexts';
import { getAuthorsInfo } from '../../articles/article.actions';
import { Button } from '../../../shared/components/partials';
import { IUser } from '../../../shared/interfaces/user';
import Image from '../../../../assets/images';
import UserListFollowers from './UserListFollowers';
import UserListFollowing from './UserListFollowing';

interface IUserProps {
  userInfo: IUser;
}
const userService = new UserService();
const UserInfo = ({ userInfo }: IUserProps) => {
  const dispatch = useDispatch();
  const dialog = useDialog();
  const authorsInfo = useSelector((state: RootState) => state.authors.data);
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);

  const handleFollow = (id: number | string) => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      userService
        .handleUserFollow({ followingId: id })
        .then((res: any) => {
          setIsRequestingAPI(false);
          authorsInfo.isFollowed = res.followed;
          if (res.followed) {
            authorsInfo.followers = authorsInfo.followers + 1;
          } else {
            authorsInfo.followers = authorsInfo.followers - 1;
          }
          dispatch(getAuthorsInfo(authorsInfo));
        })
        .catch((error) => {
          setIsRequestingAPI(false);
        });
    }
  };

  const handleListFollowers = () => {
    dialog?.addDialog({ content: <UserListFollowers /> });
  }

  const handleListFollowing = () => {
    dialog?.addDialog({ content: <UserListFollowing /> });
  }

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
          <li className="author-item">{userInfo.Posts.length || 0} Posts</li>
          <li className="author-item" onClick={handleListFollowers}>{authorsInfo.followers} Followers</li>
          <li className="author-item" onClick={handleListFollowing}>{userInfo.followings} Following</li>
        </ul>
        <Button
          classBtn="btn btn-primary btn-follow"
          text={authorsInfo.isFollowed ? "Following" : "Follow"}
          onClick={() => handleFollow(userInfo.id)}
        />
      </div>
    </div>
  );
};

export default UserInfo;
