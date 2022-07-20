import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import { SignaturesService } from './../../../core/serivces/signatures.service';
import { createPost } from '../../../pages/home/home.actions';
import { RootState } from '../../../app.reducers';

const signaturesService = new SignaturesService();
const FormPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);
  const [selectedImage, setSelectedImage] = useState<string>(
    'https://www.w3schools.com/css/img_5terre.jpg'
  );
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cover: 'https://www.w3schools.com/css/img_5terre.jpg',
      status: false,
      title: '',
      description: '',
      content: '',
    },
  });

  useEffect(() => {
    if(posts.createSuccess) {
      alert('Create post successfully.');
      navigate('/');
    }
  }, [posts.createSuccess]); 

  const onSubmitForm = (data: any) => {
    const dataPost = {...data};
    dataPost.status = data.status ? 'public' : 'private';    
    dispatch(createPost(dataPost));
  };

  const handleChangeFile = async (e: any) => {
    const file = e.target.files[0];
    const payload = {
      type_upload: 'cover-post',
      file_name: file.name,
      file_type: file.type,
    };
    try {
      signaturesService.getSignatures(payload).then(async (data: any) => {
        setValue('cover', data.url);
        await signaturesService.uploadImage(data, file);
      });
    } catch (err) {
      alert('error image');
    }
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
            rows={3}
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
                  height: 400,
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
