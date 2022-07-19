import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './auth/auth.reducers';
import { postsReducer } from './pages/home/home.reducers';
import { usersReducer } from './pages/user/user.reducers';
import { articlesReducer, postsRecommendReducer, commentsReducer, signaturesReducer } from './pages/articles/article.reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  register: registerReducer,
  login: loginReducer,
  users: usersReducer,
  articles: articlesReducer,
  postsRecommend: postsRecommendReducer,
  comments: commentsReducer,
  signatures: signaturesReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
