import React from 'react';
import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.reducers';
import { postsReducer } from './pages/home/home.reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
