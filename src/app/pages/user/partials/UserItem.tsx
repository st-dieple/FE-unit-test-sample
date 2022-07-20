import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../../assets/images";
import { Tag } from "../../../shared/components/partials";

const UserItem = () => {
  return (
    <>
      <li className="post-item">
        <article className="post">
          <div className="post-header">
            <Link to="/" className="post-user">
              <div className="post-user-image">
                <img
                  src={Image.Avatar}
                  alt="image"
                  // eslint-disable-next-line
                />
              </div>
              <h4 className="post-user-name">st-tuduong</h4>
            </Link>
            <p className="post-date">July 20, 2022</p>
          </div>
          <div className="post-body">
            <div className="post-content">
              <h3 className="post-title">
                <Link to="/" className="post-title-link">
                  The Surprising Truth About Pixels and Accessibility
                </Link>
              </h3>
              <p className="post-desc">
                “Should I use pixels or rems?”. In this comprehensive blog post,
                we'll answer this question once and for all. You'll learn about
                the accessibility implications, and how to determine the best
                unit to use in any scenario."
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuW53Dqv8tOcEp2sfOV6Ss03gPPkBCvYJqpw&usqp=CAU" alt="image" />
              </Link>
            </div>
          </div>
        </article>
      </li>
      <li className="post-item">
        <article className="post">
          <div className="post-header">
            <Link to="/" className="post-user">
              <div className="post-user-image">
                <img
                  src={Image.Avatar}
                  alt="image"
                  // eslint-disable-next-line
                />
              </div>
              <h4 className="post-user-name">st-tuduong</h4>
            </Link>
            <p className="post-date">July 20, 2022</p>
          </div>
          <div className="post-body">
            <div className="post-content">
              <h3 className="post-title">
                <Link to="/" className="post-title-link">
                  The Surprising Truth About Pixels and Accessibility
                </Link>
              </h3>
              <p className="post-desc">
                “Should I use pixels or rems?”. In this comprehensive blog post,
                we'll answer this question once and for all. You'll learn about
                the accessibility implications, and how to determine the best
                unit to use in any scenario."
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuW53Dqv8tOcEp2sfOV6Ss03gPPkBCvYJqpw&usqp=CAU" alt="image" />
              </Link>
            </div>
          </div>
        </article>
      </li>
      <li className="post-item">
        <article className="post">
          <div className="post-header">
            <Link to="/" className="post-user">
              <div className="post-user-image">
                <img
                  src={Image.Avatar}
                  alt="image"
                  // eslint-disable-next-line
                />
              </div>
              <h4 className="post-user-name">st-tuduong</h4>
            </Link>
            <p className="post-date">July 20, 2022</p>
          </div>
          <div className="post-body">
            <div className="post-content">
              <h3 className="post-title">
                <Link to="/" className="post-title-link">
                  The Surprising Truth About Pixels and Accessibility
                </Link>
              </h3>
              <p className="post-desc">
                “Should I use pixels or rems?”. In this comprehensive blog post,
                we'll answer this question once and for all. You'll learn about
                the accessibility implications, and how to determine the best
                unit to use in any scenario."
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuW53Dqv8tOcEp2sfOV6Ss03gPPkBCvYJqpw&usqp=CAU" alt="image" />
              </Link>
            </div>
          </div>
        </article>
      </li>
      <li className="post-item">
        <article className="post">
          <div className="post-header">
            <Link to="/" className="post-user">
              <div className="post-user-image">
                <img
                  src={Image.Avatar}
                  alt="image"
                  // eslint-disable-next-line
                />
              </div>
              <h4 className="post-user-name">st-tuduong</h4>
            </Link>
            <p className="post-date">July 20, 2022</p>
          </div>
          <div className="post-body">
            <div className="post-content">
              <h3 className="post-title">
                <Link to="/" className="post-title-link">
                  The Surprising Truth About Pixels and Accessibility
                </Link>
              </h3>
              <p className="post-desc">
                “Should I use pixels or rems?”. In this comprehensive blog post,
                we'll answer this question once and for all. You'll learn about
                the accessibility implications, and how to determine the best
                unit to use in any scenario."
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuW53Dqv8tOcEp2sfOV6Ss03gPPkBCvYJqpw&usqp=CAU" alt="image" />
              </Link>
            </div>
          </div>
        </article>
      </li>
    </>
  );
};

export default UserItem;
