import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller, useForm } from 'react-hook-form';
import Image from '../../../../assets/images';

const FormPost = () => {
  const [selectedImage, setSelectedImage] = useState<string>(Image.Empty);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cover: "",
      status: false,
      title: "",
      description: "",
      content: "",
    },
  });

  const onSubmitForm = (data: any) => {};

  const handleChangeFile = (e: any) => {
    const file = e.target.files[0];    
    setValue('cover', file);
    setSelectedImage(URL.createObjectURL(file));    
  };

  return (
    <form className="form-post" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="form-post-group">
        <div className="form-post-image">
          <img src={selectedImage} alt="post cover" />
        </div>
        <div className="form-post-header">
          <div
            className={
              errors.cover ? "form-post-file form-post-error" : "form-post-file"
            }
          >
            <label htmlFor="cover">Upload file image</label>
            <input
              {...register("cover")}
              onChange={handleChangeFile}
              type="file"
              id="cover"
              className="form-post-input"
              accept="image/png, image/jpeg"
            />
          </div>
          <div className="form-post-status">
            <label htmlFor="status">
              Public
              <input
                {...register("status")}
                type="checkbox"
                id="status"
                className="form-post-checkbox"
              />
              <span className="check"></span>
            </label>
          </div>
        </div>
        <div
          className={
            errors.title ? "form-post-item form-post-error" : "form-post-item"
          }
        >
          <label htmlFor="title">Title</label>
          <input
            {...register("title", { required: true, minLength: 20 })}
            type="text"
            id="title"
            className="form-post-input"
          />
          {errors.title && <span>Title of post min 20 characters.</span>}
        </div>
        <div
          className={
            errors.description
              ? "form-post-item form-post-error"
              : "form-post-item"
          }
        >
          <label htmlFor="description">Description</label>
          <textarea
            {...register("description", { required: true, minLength: 50 })}
            id="description"
            className="form-post-input"
            rows={5}
          />
          {errors.title && <span>Description of post min 50 characters.</span>}
        </div>
        <div
          className={
            errors.content ? "form-post-item form-post-error" : "form-post-item"
          }
        >
          <label htmlFor="content">Content</label>
          <Controller
            control={control}
            name="content"
            rules={{ required: true, minLength: 100 }}
            render={({ field: { onChange } }) => (
              <Editor
                initialValue=""
                onEditorChange={(newText: string) => onChange(newText)}
                init={{
                  height: 500,
                  menubar: false,
                  content_css: "http://localhost:3000/css/tinymce.css",
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help | image code",
                }}
              />
            )}
          />
          {errors.content && <span>Content of post min 100 characters.</span>}
        </div>
        <div className="form-post-footer">
          <input
            type="submit"
            className="btn btn-primary form-post-btn"
            value="Publish"
          />
        </div>
      </div>
    </form>
  );
};

export default FormPost;
