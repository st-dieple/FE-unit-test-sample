import React from 'react';
// import { useDispatch } from 'react-redux';
import FormPost from '../../../shared/components/partials/FormPost';

const New = () => {
  // const dispatch = useDispatch();
  // const { data } = useSelector((state: RootState) => state.postDetail);

  // useEffect(() => {
  //   dispatch(resetPostDetailData());
  // }, []);

  // if (Object.keys(data).length) return <Loading />;
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
