import React, { useEffect, useState } from 'react';
import { BookmarkService } from '../../core/serivces/bookmark.service';
import SekeletonPost from '../../shared/components/partials/SekeletonPost';
import PostList from '../posts/partials/PostList';

const bookmarkService = new BookmarkService();
const Bookmark = () => {
  const [posts, setPosts] = useState([]);
  const [isRequestingAPI, setIsRequestingAPI] = useState<boolean>(false);

  const getBookmark = () => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      bookmarkService
        .getBookmark()
        .then((res: any) => {
          setIsRequestingAPI(false);
          const newPost = res.map((item) => item.post);
          setPosts(newPost);
        })
        .catch((error) => {
          setIsRequestingAPI(false);
        });
    }
  };

  useEffect(() => {
    getBookmark();
  }, []);

  return (
    <section className="section-bookmark">
      <h2 className="section-title txt-center">My Bookmarks</h2>
      {isRequestingAPI ? <SekeletonPost /> : <PostList posts={posts} />}
    </section>
  );
};

export default Bookmark;
