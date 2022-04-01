import { request, gql } from 'graphql-request';
import { call, put, takeLatest } from 'redux-saga/effects';

import { searchPosts, searchPostsSuccess, searchPostsFail } from './postsSlice';

const endpoint = 'http://localhost:3333/graphql';
const fetchPosts = (keyword: string) =>
  request(
    endpoint,
    gql`
      query SearchPostsQuery {
        searchPosts(keyword: "${keyword}") {
          id
          title
        }
      }
    `
  );

// @ts-expect-error ignore type error for demo
function* searchPostsWorker(action) {
  try {
    // @ts-expect-error ignore type error for demo
    const data = yield call(fetchPosts, action.payload.keyword);
    yield put(searchPostsSuccess({ posts: data.searchPosts }));
  } catch {
    yield put(searchPostsFail());
  }
}

function* mySaga() {
  yield takeLatest(searchPosts.type, searchPostsWorker);
}

export default mySaga;
