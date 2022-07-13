import { all } from 'redux-saga/effects';
import { watchHome } from './pages/home/home.middlewares';

export default function* appMiddleware() {
  yield all([watchHome()]);
};
