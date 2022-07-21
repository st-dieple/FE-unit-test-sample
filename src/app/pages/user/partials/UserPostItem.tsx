import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../home/home.actions";
import { checkUserId } from "../../../shared/common/checkUserId";
import { Link } from "react-router-dom";
import Image from "../../../../assets/images";

const UserPostItem = ({ post }: any) => {
  const dispatch = useDispatch();
  const handleDelete = (id: string) => {
    dispatch(deletePost({ id: id }));
  };

  return (
    <li className="post-item">
      <article className="post">
        <div className="post-body">
          <div className="post-content">
            <h3 className="post-title">
              <Link to="/" className="post-title-link">
                {post.title}
              </Link>
            </h3>
            <p className="post-desc">{post.description}</p>
          </div>
          <div className="post-image">
            <Link to="/" className="post-image-link">
              <img
                src={post.cover || Image.Empty}
                alt={post.title}
                onError={(e: any) => {
                  e.target["onerror"] = null;
                  e.target["src"] = Image.Empty;
                }}
              />
            </Link>
          </div>
          {checkUserId(post.userId) && (
            <div className="post-control">
              <i className="fa-solid fa-ellipsis"></i>
              <ul className="post-control-list post-control-wall-user">
                <li>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="post-control-item"
                  >
                    <i className="fa-solid fa-pen"></i>
                    Edit
                  </Link>
                </li>
                <li
                  className="post-control-item"
                  onClick={() => {
                    handleDelete(post.id);
                  }}
                >
                  <i className="fa-solid fa-trash-can"></i>
                  Delete
                </li>
              </ul>
            </div>
          )}

        </div>
      </article>
    </li>
  );
};
export default UserPostItem;
