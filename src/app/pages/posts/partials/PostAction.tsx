import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PostService } from '../../../core/serivces/post.service';
import { checkUserId } from '../../../shared/common/checkUserId';
import { useDialog } from '../../../shared/contexts/dialog.contexts';
import { useToast } from '../../../shared/contexts/toast.contexts';

interface IPostAction {
  post: any;
  setPost?: any;
}

const postService = new PostService();
const PostAction = ({ post, setPost }: IPostAction) => {
  const navigate = useNavigate();
  const toast = useToast();
  const [isRequestingAPI, setIsRequestingAPI] = useState<boolean>(false);
  const [showAction, setShowAction] = useState<boolean>(false);
  const dialog = useDialog();

  const handleDelete = (id: string) => {
    if (!isRequestingAPI) {
      setIsRequestingAPI(true);
      postService
        .deletePostService(id)
        .then((res: any) => {
          if (setPost) {
            setPost((pre) => {
              return pre.filter((item) => {
                return item.id !== +id;
              });
            });
          } else {
            navigate('/posts');
          }
          setIsRequestingAPI(false);
          toast?.addToast({
            type: 'success',
            title: 'Delete post successfully',
          });
        })
        .catch((error) => {
          setIsRequestingAPI(false);
        });
    }
    setShowAction(false);
  };

  const doDelete = () => {
    dialog?.addDialog({
      title: 'Delete Post',
      content: 'Are you sure you want to delete this post?',
      button: {
        confirm: {
          text: 'Delete',
          confirmCallback: () => handleDelete(post.id),
        },
        cancel: {
          text: 'Cancel',
          cancelCallback: () => dialog.closeDialog(),
        },
      },
    });
  };

  return (
    <>
      {checkUserId(post.userId) && (
        <div
          className="post-control"
          onClick={() => setShowAction(!showAction)}
        >
          <i className="fa-solid fa-ellipsis"></i>
          <ul
            className={`dropdown-menu dropdown-menu-action ${
              showAction ? '' : 'dropdown-menu-hide'
            }`}
          >
            <li className="dropdown-item">
              <Link to={`/posts/${post.id}/edit`}>
                <i className="fa-solid fa-pen"></i>
                Edit
              </Link>
            </li>
            <li
              className="dropdown-item dropdown-item-trash"
              onClick={doDelete}
            >
              <i className="fa-solid fa-trash-can"></i>
              Delete
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default PostAction;
