import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useForm } from "react-hook-form";
import { Button } from "./Button";

const Form = () => {
  const { register, handleSubmit } = useForm();
  
  const handleChange = (event: any, editor: any) => {
    const data = editor.getData();
    console.log({ event, editor, data });
  };

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <form className="form-post" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-post-group">
        <div className="form-post-header">
          <div className="form-post-file">
            <label htmlFor="cover">Upload file image</label>
            <input
              type="file"
              id="cover"
              className="form-post-input"
              {...register('cover', { required: true })}
            />
          </div>
          <div className="form-post-status">
            <label htmlFor="status">Public</label>
            <input
              type="radio"
              id="status"
              className="form-post-input"
              {...register('status', { required: true })}
            />
          </div>
        </div>
        <div className="form-post-item">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-post-input"
            {...register('title', { required: true })}
          />
        </div>
        <div className="form-post-item">
          <label htmlFor="description">Description</label>
          <input
            type="textarea"
            id="description"
            className="form-post-input"
            {...register('description', { required: true })}
          />
        </div>
        <div className="form-post-item">
          <CKEditor editor={ClassicEditor} onChange={handleChange} className="ckeditor"/>
        </div>
        <div className="form-post-footer">
          <Button classBtn="btn btn-primary" text="Save Draft" /> 
          <input type="submit" className="btn btn-primary" value="Publish"/>
        </div>
      </div>
    </form>
  );
};

export default Form;
