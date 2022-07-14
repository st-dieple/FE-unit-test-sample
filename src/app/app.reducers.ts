import React from 'react';
import { combineReducers } from 'redux';
import { registerReducer } from './auth/auth.reducers';
import { postsReducer } from './pages/home/home.reducers';

const rootReducer = combineReducers({
  posts: postsReducer,
  register: registerReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
