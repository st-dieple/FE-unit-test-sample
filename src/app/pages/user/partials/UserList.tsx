import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../assets/images';

const UserList = ({ postList }: any) => {
  return (
    <ul className="post-user-list">
      {postList?.Posts?.map((item: any) => {
        return (
          <li key={item.id} className="post-item">
            <article className="post">
              <div className="post-body">
                <div className="post-content">
                  <h3 className="post-title">
                    <Link to="/" className="post-title-link">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="post-desc">{item.description}</p>
                </div>
                <div className="post-image">
                  <Link to="/" className="post-image-link">
                    <img
                      src={item.cover || Image.Empty}
                      alt={item.title}
                      onError={(e: any) => {
                        e.target["onerror"] = null;
                        e.target["src"] = Image.Empty;
                      }}
                    />
                  </Link>
                </div>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
