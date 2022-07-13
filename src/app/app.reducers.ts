import React from 'react';
import { combineReducers } from 'redux';
import { postsReducer } from './pages/home/home.reducers';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
