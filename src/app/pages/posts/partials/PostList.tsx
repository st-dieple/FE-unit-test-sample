import React, { useEffect, useState } from 'react';
import { IPost } from './../../../shared/interfaces/post';
import { Post } from './../../../shared/components/partials/Post';
import { PostService } from '../../../core/serivces/post.service';

const PostList = (props: any) => {
  const { posts } = props;
  const [postList, setPost] = useState<any>(props.posts);
  const [loading, setLoading] = useState<boolean>(false);
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);
  const postService = new PostService();

  useEffect(() => {
    setPost(posts);
  }, [posts]);

  const handleDelete = (id: string) => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      setLoading(true);
      postService
        .deletePostService(id)
        .then((res: any) => {
          setPost([...postList].filter((item: any) => item.id !== id));
          setIsRequestingAPI(false);
          setLoading(false);
        })
        .catch((error) => {
          setIsRequestingAPI(false);
        });
    }
  };

  return (
    <ul className="post-list">
      {postList.map((post: IPost, index: number) => {
        return <Post key={index} post={post} handleDelete={handleDelete} />;
      })}
    </ul>
  );
};

export default PostList;
