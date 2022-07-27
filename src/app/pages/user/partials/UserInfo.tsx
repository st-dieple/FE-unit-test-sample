import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Image from '../../../../assets/images';
import { RootState } from '../../../app.reducers';
import { UserService } from '../../../core/serivces/user.service';
import { Button } from '../../../shared/components/partials';
import { IUser } from '../../../shared/interfaces/user';
import { getAuthorsInfoSuccess } from './../../posts/posts.actions';

interface IUserProps {
  userInfo: IUser;
}

const userService = new UserService();
const UserInfo = ({ userInfo }: IUserProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const authorsInfo = useSelector((state: RootState) => state.authors);
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);

  const handleFollow = (id: number | string) => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      setLoading(true);
      userService
        .handleUserFollow({ followingId: id })
        .then((res: any) => {
          setIsRequestingAPI(false);
          setLoading(false);
          authorsInfo.data.isFollowed = res.followed;
          if (res.followed) {
            authorsInfo.data.followers = authorsInfo.data.followers + 1;
          } else {
            authorsInfo.data.followers = authorsInfo.data.followers - 1;
          }
          dispatch(getAuthorsInfoSuccess(authorsInfo.data));
        })
        .catch((error) => {
          setIsRequestingAPI(false);
          setLoading(false);
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
          <li className="author-item">{authorsInfo.data.followers} Followers</li>
          <li className="author-item">{userInfo.followings} Following</li>
        </ul>
        <Button
          classBtn="btn btn-primary btn-follow"
          text={authorsInfo.data.isFollowed ? 'Following' : 'Follow'}
          onClick={() => handleFollow(userInfo.id)}
          isLoading={loading}
        />
      </div>
    </div>
  );
};

export default UserInfo;
