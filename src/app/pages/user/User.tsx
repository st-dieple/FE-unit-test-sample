import React from "react";
import { Link } from "react-router-dom";
import UserList from "./partials/UserList";

const User = () => {
  return (
    <div className="container">
      <section className="section section-post">
        <div className="author-info-content">
          <div className="author-avatar">
            <Link to="/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BFO1-9_B8owATZcfnZc6FwA8GJjr-RMwHg&usqp=CAU" alt="image" />
            </Link>
          </div>
          <div className="author-info">
            <h2 className="author-name">ST - Tu Duong</h2>
            <ul className="author-list">
              <li className="author-item">5 Posts</li>
              <li className="author-item">10 Followers</li>
              <li className="author-item">15 Following</li>
            </ul>
          </div>
        </div>
        <UserList />
      </section>
    </div>
  );
};

export default User;
