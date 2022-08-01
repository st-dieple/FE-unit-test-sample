import { all } from 'redux-saga/effects';
import { watchPost } from './pages/posts/posts.middlewares';
import { watchUser } from './pages/user/user.middlewares';

export default function* appMiddleware() {
  yield all([watchPost(), watchUser()]);
}
