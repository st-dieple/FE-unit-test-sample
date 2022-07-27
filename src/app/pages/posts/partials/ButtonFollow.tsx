import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserService } from '../../../core/serivces/user.service';
import { getAuthorsInfoSuccess } from '../posts.actions';
import withAuthChecking from '../../../shared/components/hoc/withAuthChecking';
import { Button } from '../../../shared/components/partials';
import { checkUserId } from '../../../shared/common/checkUserId';

const userService = new UserService();
const ButtonFollow = ({ authorsInfo, id, checkAuthBeforeAction }: any) => {
  const dispatch = useDispatch();
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);

  const handleFollow = () => {
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

  const doFollow = () => {
    checkAuthBeforeAction(handleFollow);
  };

  return (
    !checkUserId(id) && (
      <Button
        classBtn="btn btn-primary btn-follow"
        text={authorsInfo.isFollowed ? 'Following' : 'Follow'}
        onClick={doFollow}
      />
    )
  );
};

export default withAuthChecking(ButtonFollow);
