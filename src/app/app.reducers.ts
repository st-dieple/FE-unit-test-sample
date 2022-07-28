import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './auth/auth.reducers';
import {
  postsReducer,
  postsRecommendReducer,
  commentsReducer,
  authorsReducer,
  postsDetailReducer,
} from './pages/posts/posts.reducers';
import { userPostsReducer, usersReducer } from './pages/user/user.reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  postDetail: postsDetailReducer,
  register: registerReducer,
  login: loginReducer,
  users: usersReducer,
  authors: authorsReducer,
  usersPosts: userPostsReducer,
  postsRecommend: postsRecommendReducer,
  comments: commentsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
