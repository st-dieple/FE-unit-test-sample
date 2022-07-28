import React, { useEffect, useState } from 'react';
import { UserService } from '../../../core/serivces/user.service';
import withAuthChecking from '../../../shared/components/hoc/withAuthChecking';
import { Button } from '../../../shared/components/partials';

const userService = new UserService();
const ButtonFollow = ({
  userInfo,
  checkAuthBeforeAction,
  setUserInfo,
}: any) => {
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);

  const handleFollow = () => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      userService
        .handleUserFollow({ followingId: userInfo.id })
        .then((res: any) => {
          setIsRequestingAPI(false);
          userInfo.isFollowed = res.followed;
          if (res.followed) {
            setUserInfo((userInfo: any) => ({
              ...userInfo,
              followers: userInfo.followers + 1,
            }));
          } else {
            setUserInfo((userInfo: any) => ({
              ...userInfo,
              followers: userInfo.followers - 1,
            }));
          }
        })
        .catch((error) => {
          setIsRequestingAPI(false);
        });
    }
  };

  const doFollow = () => {
    checkAuthBeforeAction(handleFollow);
  };

  return (
    <Button
      classBtn="btn btn-primary btn-follow"
      text={userInfo?.isFollowed ? 'Following' : 'Follow'}
      onClick={doFollow}
    />
  );
};

export default withAuthChecking(ButtonFollow);
