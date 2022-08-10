import React, { useEffect, useState } from 'react';
import { PostService } from '../../../core/serivces/post.service';

const postService = new PostService();
const RecycleBin = () => {
  const [isRequestingAPI, setIsRequestingAPI] = useState<boolean>(false);
  const [postsRecycleBin, setPostsRecycleBin] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  const getPostsRecycleBin = () => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      postService
        .getPostsReycleBin(page, 5)
        .then((res: any) => {
          setIsRequestingAPI(false);
          console.log(res);
          setPostsRecycleBin(res.data);
        })
        .catch((error: any) => {
          setIsRequestingAPI(false);
        });
    }
  };

  useEffect(() => {
    getPostsRecycleBin();
  }, []);

  return <div>This is RecycleBin</div>;
};

export default RecycleBin;
