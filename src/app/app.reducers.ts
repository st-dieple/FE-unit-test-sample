import { combineReducers } from 'redux';
import {
  postsReducer,
  postsRecommendReducer,
  commentsReducer,
  likesReducer,
  authorsReducer,
  postsDetailReducer,
} from './pages/posts/posts.reducers';
import { usersReducer } from './pages/user/user.reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  postDetail: postsDetailReducer,
  users: usersReducer,
  authors: authorsReducer,
  postsRecommend: postsRecommendReducer,
  comments: commentsReducer,
  likes: likesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
