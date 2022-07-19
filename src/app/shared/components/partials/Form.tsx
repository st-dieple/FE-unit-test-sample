import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useForm } from 'react-hook-form';
import Image from '../../../../assets/images';

const Form = () => {
  const { register, handleSubmit } = useForm();
  const editorRef = useRef<any>(null);

  const onSubmitForm = (data: any) => {
    const dataPost = {...data};
    if(editorRef.current) {
      dataPost.content = editorRef.current.getContent()
    }
  };

  return (
    <form className="form-post" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="form-post-group">
        <div className="form-post-image">
          <img src={Image.Empty} alt="post image" />
        </div>
        <div className="form-post-header">
          <div className="form-post-file">
            <label htmlFor="cover">Upload file image</label>
            <input
              type="file"
              id="cover"
              className="form-post-input"
              {...register("cover")}
            />
          </div>
          <div className="form-post-status">
            <label htmlFor="status">
              Public
              <input
                type="checkbox"
                id="status"
                className="form-post-checkbox"
                {...register("status")}
              />
              <span className="check"></span>
            </label>
          </div>
        </div>
        <div className="form-post-item">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-post-input"
            {...register("title")}
          />
        </div>
        <div className="form-post-item">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="form-post-input"
            rows={5}
            {...register("description")}
          />
        </div>
        <div className="form-post-item">
          <label htmlFor="content">Content</label>
          <Editor
            onInit={(evt: any, editor: any) => (editorRef.current = editor)}
            initialValue=""
            init={{
              height: 500,
              menubar: false,
              content_css: 'http://localhost:3000/css/tinymce.css',
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
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
        <div className="form-post-footer">
          <input type="submit" className="btn btn-primary form-post-btn" value="Publish" />
        </div>
      </div>
    </form>
  );
};

export default Form;
