import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetPostId } from '../article.actions';
import FormPost from '../../../shared/components/partials/FormPost';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import Loading from '../../../shared/components/partials/Loading';

const New = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.articles);
  
  useEffect(() => {
    dispatch(resetPostId());
  } , []);  

  if(Object.keys(data).length) return <Loading />;
  return (
    <section className="section section-write">
      <div className="container">
        <div className="write-inner">
          <FormPost />
        </div>
      </div>
    </section>
  );
};

export default New;
