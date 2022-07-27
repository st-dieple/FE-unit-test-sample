import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { postComment } from '../../posts/posts.actions';
import { Button } from '../../../shared/components/partials';

const FormComment = ({ checkAuthBeforeAction }: any) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const userInfo = useSelector((state: RootState) => state.users.data);
  const onSubmit = (data: any) => {
    checkAuthBeforeAction(handleComment(data));
  };

  const handleComment = (data: any) => {
    dispatch(postComment({ id, data, userInfo }));
    setValue('content', '');
  };

  return (
    <form className="form-comment" onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className="comment-input form-control"
        placeholder="Write a comment"
        {...register('content', {
          required: true,
          maxLength: 800,
        })}
      />
      {errors.content && (
        <div className="error-box error-comment">
          <span className="txt-center txt-error">Please type comment</span>
        </div>
      )}
      <Button classBtn="btn btn-primary btn-comment" text="Comment" />
    </form>
  );
};

export default FormComment;
