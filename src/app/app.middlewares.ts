import { all } from 'redux-saga/effects';
import { watchAuth } from './auth/auth.middleware';
import { watchHome } from './pages/home/home.middlewares';
import { watchUser } from './pages/user/user.middlewares';

export default function* appMiddleware() {
  yield all([watchHome(), watchAuth(), watchUser()]);
};
