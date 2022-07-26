import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app.reducers';
import { resetPostId } from '../posts.actions';
import FormPost from '../../../shared/components/partials/FormPost';
import Loading from '../../../shared/components/partials/Loading';

const New = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.postDetail);

  useEffect(() => {
    dispatch(resetPostId());
  }, []);

  if (Object.keys(data).length) return <Loading />;
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
