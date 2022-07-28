import { combineReducers } from 'redux';
import { authorsReducer } from './pages/posts/posts.reducers';
import { usersReducer } from './pages/user/user.reducers';

const rootReducer = combineReducers({
  users: usersReducer,
  authors: authorsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
