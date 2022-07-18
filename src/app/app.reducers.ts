import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './auth/auth.reducers';
import { postsReducer } from './pages/home/home.reducers';
import { usersReducer } from './pages/user/user.reducers';
import { articlesReducer, commentsReducer } from './pages/articles/article.reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  register: registerReducer,
  login: loginReducer,
  users: usersReducer,
  articles: articlesReducer,
  comments: commentsReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
