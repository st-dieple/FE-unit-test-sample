import { all } from 'redux-saga/effects';
import { watchAuth } from './auth/auth.middleware';
import { watchPost } from './pages/posts/posts.middlewares';
import { watchUser } from './pages/user/user.middlewares';

export default function* appMiddleware() {
  yield all([watchPost(), watchAuth(), watchUser()]);
}
