import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './auth/auth.reducers';
import {
  postsReducer,
  commentsReducer,
  authorsReducer,
} from './pages/posts/posts.reducers';
import { userPostsReducer, usersReducer } from './pages/user/user.reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  register: registerReducer,
  login: loginReducer,
  users: usersReducer,
  authors: authorsReducer,
  usersPosts: userPostsReducer,
  comments: commentsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
