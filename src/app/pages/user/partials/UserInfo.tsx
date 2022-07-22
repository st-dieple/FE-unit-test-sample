import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../../assets/images";
import { IUser } from "../../../shared/interfaces/user";

interface IUserProps {
  infoUser: IUser;
}

const UserInfo = ({ infoUser }: IUserProps) => {
  return (
    <div className="author-info-content">
      <div className="author-avatar">
        <img
          src={infoUser.picture || Image.Avatar}
          alt={infoUser.displayName}
        />
      </div>
      <div className="author-info">
        <h2 className="author-name">{infoUser.displayName}</h2>
        <ul className="author-list">
          <li className="author-item">{infoUser.Posts.length || 0} Posts</li>
          <li className="author-item">{infoUser.followers} Followers</li>
          <li className="author-item">{infoUser.followings} Following</li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
