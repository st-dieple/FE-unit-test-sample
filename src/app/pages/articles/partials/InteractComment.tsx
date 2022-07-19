import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button } from '../../../shared/components/partials';
import { postComment } from '../article.actions';

const InteractComment = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    dispatch(postComment(data));
  }

  return (
    <form className="section-comment" onSubmit={handleSubmit(onSubmit)}>
      <div className="comment-content">
        <textarea 
          className="txtArea form-control"
          placeholder="Write a comment"
          {...register("txtArea", {
            required: true,
            maxLength: 800,
          })}
        />
        {errors.txtArea && 
          <span className="error-comment">Please type comment</span>
        }
      </div>
      <Button classBtn="btn btn-primary btn-comment" text="Comment"/>
    </form> 
   );
}

export default InteractComment;