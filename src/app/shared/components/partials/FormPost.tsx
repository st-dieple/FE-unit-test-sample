/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import { TagsInput } from 'react-tag-input-component'; 
import { SignaturesService } from './../../../core/serivces/signatures.service';
import { createPost, updatePost } from '../../../pages/home/home.actions';
import { getPostById } from './../../../pages/articles/article.actions';
import { RootState } from '../../../app.reducers';
import { COVER_POST_IMAGE } from '../../constants/constant';
import Loading from './Loading';
import Toast from './Toast';

const signaturesService = new SignaturesService();
const FormPost = () => {
  const [ selectedImage, setSelectedImage ] = useState<string>(COVER_POST_IMAGE);
  const [ checkSuccess, setCheckSuccess ] = useState<boolean>(false);
  const [ tags, setTags ] = useState<string[]>([]);
  const [ toast, setToast ] = useState<any>({ hasLoading: false, type: '', title: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const posts = useSelector((state: RootState) => state.posts);
  const { data, isLoading } = useSelector((state: RootState) => state.articles);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cover: COVER_POST_IMAGE,
      status: false,
      title: '',
      description: '',
      content: '',
    },
  });

  useEffect(() => {
    if(id) {
      dispatch(getPostById({ id }));
    };
  }, [id]);

  useEffect(() => {
    if(id) {
      setValue('cover', data.cover);
      setValue('title', data.title);
      setValue('description', data.description);
      setValue('content', data.content);
      setValue('status', data.status === 'public' ? false: true);
      setSelectedImage(data.cover);
    };
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    let myTimeout: any;
    if((posts.createData && checkSuccess) || (posts.updateData && checkSuccess)) {
      if(id) {
        setToast({ hasLoading: true, type: 'success', title: 'Update post successfully.' });
      } else {
        setToast({ hasLoading: true, type: 'success', title: 'Create post successfully.' });
      }
      myTimeout = setTimeout(() => { 
        navigate('/'); 
      }, 500);
    };
    return () => {
      clearTimeout(myTimeout);
    }
    // eslint-disable-next-line
  }, [posts.createData, posts.updateData]);

  const onSubmitForm = (data: any) => {
    const dataPost = {...data};
    dataPost.status = data.status ? 'private' : 'public';
    if(tags.length) {
      dataPost.tags = tags;
    }
    if(id) {
      dispatch(updatePost({ id: id, data: dataPost }));
    } else {
      dispatch(createPost(dataPost));
    } 
    setCheckSuccess(true);
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
      setToast({ hasLoading: true, type: 'error', title: 'Error! Upload image.' });
    }
    setSelectedImage(URL.createObjectURL(file));
  };

  if(id && isLoading) return <Loading/>;
  return (
    <>
      {toast.hasLoading && <Toast type={toast.type} title={toast.title}/>}
      <h2 className="write-title txt-center">{id ? "Edit Blog" : "Create New Blog"}</h2>
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
            {errors.title && <span>Title should be at least 20 characters.</span>}
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
            {errors.title && <span>Description should be at least 50 characters.</span>}
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
              render={({ field: { onChange, value } }) => (
                <Editor
                  initialValue={value}
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
            {errors.content && <span>Content should be at least 100 characters.</span>}
          </div>
          <div className="form-post-item">
            <label htmlFor="tags">Tags</label>
            <TagsInput value={data.tags || [] } onChange={setTags} name='tags' placeHolder='Enter tags'/>
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
    </>
  );
};

export default FormPost;
