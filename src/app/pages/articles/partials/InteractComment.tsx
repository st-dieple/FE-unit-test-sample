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