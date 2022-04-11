import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';

import postsReducer from './postsSlice';
import searchPostsEpic from './postsEpic';

const epicMiddleware = createEpicMiddleware();
const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: [epicMiddleware],
});
epicMiddleware.run(searchPostsEpic);

export type RootState = ReturnType<typeof store.getState>;

export default store;
