import React, { useEffect, useState } from 'react';
import { IComment } from '../../../shared/interfaces/comment';
import Comment from '../../../shared/components/partials/Comment';
import FormComment from './FormComment';
import { PostService } from '../../../core/serivces/post.service';
import { useParams } from 'react-router-dom';

const postService = new PostService();
const PostComment = () => {
  const [listcomments, setListComments] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isRequestingAPI, setIsRequestingAPI] = useState(false);
  const { id } = useParams();

  const getCommentPost = () => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      setLoading(true);
      postService
        .getCommentPostsDetail((String(id)))
        .then((res: any) => {
          setIsRequestingAPI(false);
          setListComments([...listcomments, ...res]);
          setLoading(false);
        })
        .catch((error) => {
          setIsRequestingAPI(false);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (id) {
      getCommentPost();
    }
  }, []);
  
  return (
    <>
      <FormComment postId={id} setListComments={setListComments}/>
      {listcomments.length ? (
        <ul className="comment-list">
          {listcomments.map((comment: IComment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      ) : (
        <p className="comment-empty">There are no comments yet</p>
      )}
    </>
  )
};

export default PostComment;
