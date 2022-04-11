import { request, gql } from 'graphql-request';
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

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
export default function searchPostsEpic(action$) {
  return action$.pipe(
    ofType(searchPosts.type),
    switchMap((action) =>
      // @ts-expect-error ignore type error for demo
      from(fetchPosts(action.payload.keyword)).pipe(
        map((response) => searchPostsSuccess({ posts: response.searchPosts })),
        catchError(() => of(searchPostsFail()))
      )
    )
  );
}
