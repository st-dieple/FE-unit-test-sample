import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserPosts from '../partials/UserPosts';
import UserInfo from '../partials/UserInfo';
import SekeletonPost from '../../../shared/components/partials/SekeletonPost';
import SekeletonUserInfo from '../../../shared/components/partials/SekeletonUserInfo';
import { getData } from '../../../core/helpers/localstorage';
import { UserService } from './../../../core/serivces/user.service';

const userService = new UserService();
const Profile = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<any>();
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);

  useEffect(() => {
    if (getData('token', '') && id) {
      setIsLoadingUser(true);
      userService
        .getUserPosts(id)
        .then((res: any) => {
          setIsLoadingUser(false);
          setUserInfo(res);
        })
        .catch((error: any) => {
          setIsLoadingUser(false);
        });
    } else {
      setIsLoadingUser(true);
      userService
        .getUserInfo(id!)
        .then((res: any) => {
          setIsLoadingUser(false);
          setUserInfo(res);
        })
        .catch((error: any) => {
          setIsLoadingUser(false);
        });
    }
  }, [id]);

  return (
    <div className="section-user-post">
      {isLoadingUser ? <SekeletonUserInfo /> : <UserInfo userInfo={userInfo} />}
      {isLoadingUser ? (
        <SekeletonPost />
      ) : (
        <>
          {getData('token', '') ? (
            <UserPosts postList={userInfo?.Posts} />
          ) : (
            <div className="message-post">
              Please
              <Link to={'/auth/sign-in'} className="message-link">
                Sign In
              </Link>
              to Lotus to view
              <span className="message-name"> {userInfo.displayName} </span>
              's posts!
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
