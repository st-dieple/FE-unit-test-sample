import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../assets/images";
import { Button } from "../../shared/components/partials";
import UserList from "./partials/UserList";

const User = () => {
  return (
    <div className="container">
      <section className="section section-post">
        <div className="author-info">
          <div className="author-image">
            <Link to="/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BFO1-9_B8owATZcfnZc6FwA8GJjr-RMwHg&usqp=CAU" alt="image" />
            </Link>
          </div>
          <div className="author-name">
            <Link to="/">st-tuduong</Link>
          </div>
          <span></span>
          <div className="author-follow">
            <Button classBtn="btn btn-follow" text="Followers"/>
            <Button classBtn="btn btn-follow" text="Following"/>
          </div>
        </div>
        <UserList />
      </section>
    </div>
  );
};

export default User;
