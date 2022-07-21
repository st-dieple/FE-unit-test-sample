import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Image from "../../../../assets/images";
import { RootState } from "../../../app.reducers";
import { checkUserId } from "../../../shared/common/checkUserId";
import { Tag } from "../../../shared/components/partials";
import { deletePost } from "../../home/home.actions";

const UserArticleItem = () => {

  return (
    <>
      <li className="post-item">
        <article className="post">
          <div className="post-header">
            <Link to="/" className="post-user">
              <div className="post-user-image">
                <img src={Image.Avatar} alt="Avartar" />
              </div>
              <h4 className="post-user-name">st-tuduong</h4>
            </Link>
            <p className="post-date">July 20, 2022</p>
          </div>
          <div className="post-body">
            <div className="post-content">
              <h3 className="post-title">
                <Link to="/" className="post-title-link">
                  How To Make API calls in React Applications — TypeScript
                  Version
                </Link>
              </h3>
              <p className="post-desc">
                In this post, we will see how to make API calls in React
                (Written in Typescript)
              </p>
              <div className="post-footer">
                <div className="post-meta">
                  <div className="post-meta-info post-like">
                    <i className="fa-regular fa-thumbs-up"></i>
                    <span className="post-like-number">0</span>
                  </div>
                  <div className="post-meta-info post-comment">
                    <i className="fa-regular fa-comment"></i>
                    <span className="post-comment-number">0</span>
                  </div>
                </div>
                <ul className="post-tags">
                  <Tag path="/" name="React" />
                </ul>
              </div>
            </div>
            <div className="post-image">
              <Link to="/" className="post-image-link">
                <img src={Image.Banner} alt="post" />
              </Link>
            </div>
          </div>
        </article>
      </li>
    </>
  );
};

export default UserArticleItem;
