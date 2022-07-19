import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../app.reducers';
import { Button } from '../../../shared/components/partials';
import { postComment } from '../article.actions';

const InteractComment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userInfo = useSelector((state: RootState) => state.users.data);
  const onSubmit = (data: any) => {
    dispatch(postComment({ id, data, userInfo }));
  };

  return (
    <form className="section-comment" onSubmit={handleSubmit(onSubmit)}>
      <div className="comment-content">
        <textarea
          className="txtArea form-control"
          placeholder="Write a comment"
          {...register("content", {
            required: true,
            maxLength: 800,
          })}
        />
        {errors.content && (
          <span className="error-comment">Please type comment</span>
        )}
      </div>
      <Button classBtn="btn btn-primary btn-comment" text="Comment" />
    </form>
  );
};

export default InteractComment;
