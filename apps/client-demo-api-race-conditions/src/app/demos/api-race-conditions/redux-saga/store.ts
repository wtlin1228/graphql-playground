import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import postsReducer from './postsSlice';
import searchPostsSaga from './postsSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(searchPostsSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
