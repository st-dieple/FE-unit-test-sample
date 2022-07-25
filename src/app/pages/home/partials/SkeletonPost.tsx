import { Link } from "react-router-dom";

const SekeletonPost = () => {
  return ( 
    <li className="post-item">
      <article className="post">
        <div className="post-header">
          <div className="post-user">
            <Link to="" className="post-user-info"/>
            <p className="post-date">July 25, 2022</p>
          </div>
        </div>
        <div className="post-body">
          <div className="post-content">
            <h3 className="post-title"></h3>
            <p className="post-desc"></p>
            <div className="post-footer"></div>
          </div>
          <div className="post-image"></div>
        </div>
      </article>
    </li>
   );
}

export default SekeletonPost;