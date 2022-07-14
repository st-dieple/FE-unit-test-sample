import { all } from 'redux-saga/effects';
import { watchAuth } from './auth/auth.middleware';
import { watchHome } from './pages/home/home.middlewares';

export default function* appMiddleware() {
  yield all([watchHome(), watchAuth()]);
};
