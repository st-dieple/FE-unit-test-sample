import { combineReducers } from 'redux';
import { loginReducer, registerReducer } from './auth/auth.reducers';
import { postsReducer } from './pages/home/home.reducers';
import { articlesReducer, postsRecommendReducer, commentsReducer, likesReducer, authorsReducer } from './pages/articles/article.reducers';
import { userPostsReducer, usersReducer } from './pages/user/user.reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  register: registerReducer,
  login: loginReducer,
  users: usersReducer,
  authors: authorsReducer,
  usersPosts: userPostsReducer,
  articles: articlesReducer,
  postsRecommend: postsRecommendReducer,
  comments: commentsReducer,
  likes: likesReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
