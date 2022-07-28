import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserService } from '../../../core/serivces/user.service';
import { getAuthorsInfoSuccess } from '../posts.actions';
import withAuthChecking from '../../../shared/components/hoc/withAuthChecking';
import { Button } from '../../../shared/components/partials';

const userService = new UserService();
const ButtonFollow = ({ userInfo, id, checkAuthBeforeAction }: any) => {
  const dispatch = useDispatch();
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);

  const handleFollow = () => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      userService
        .handleUserFollow({ followingId: id })
        .then((res: any) => {
          setIsRequestingAPI(false);
          userInfo.isFollowed = res.followed;
          if (res.followed) {
            userInfo.followers = userInfo.followers + 1;
          } else {
            userInfo.followers = userInfo.followers - 1;
          }
          dispatch(getAuthorsInfoSuccess(userInfo));
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
      text={'Follow'}
      onClick={doFollow}
    />
  );
};

export default withAuthChecking(ButtonFollow);
