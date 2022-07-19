import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../shared/components/partials';

const InteractComment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form className="form-comment" onSubmit={handleSubmit(onSubmit)}>
      <textarea 
        className="comment-input form-control"
        placeholder="Write a comment"
        {...register("comment", {
          required: true,
          maxLength: 800,
        })}
      />
      {errors.comment && 
        <div className="error-box error-comment">
          <span className="txt-center txt-error">Please type comment</span>
        </div>
      }
      <Button classBtn="btn btn-primary btn-comment" text="Comment"/>
    </form> 
   );
}

export default InteractComment;
