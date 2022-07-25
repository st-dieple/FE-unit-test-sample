import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Image from '../../../../assets/images';
import { RootState } from '../../../app.reducers';
import { UserService } from '../../../core/serivces/user.service';
import { Button } from '../../../shared/components/partials';
import { IUser } from '../../../shared/interfaces/user';
import { getAuthorsInfoSuccess } from '../../articles/article.actions';

interface IUserProps {
  userInfo: IUser;
}
const userService = new UserService();
const UserInfo = ({ userInfo }: IUserProps) => {
  const dispatch = useDispatch();
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
          dispatch(getAuthorsInfoSuccess(authorsInfo));
        })
        .catch((error) => {
          setIsRequestingAPI(false);
        });
    }
  };
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
          <li className="author-item">{authorsInfo.followers} Followers</li>
          <li className="author-item">{userInfo.followings} Following</li>
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
