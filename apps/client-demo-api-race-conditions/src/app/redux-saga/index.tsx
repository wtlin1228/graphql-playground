import type { RootState } from './store';

import { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { searchPosts } from './postsSlice';
import store from './store';

import Nav from '../Nav';
import Result from '../Result';

const SearchPosts = ({ keyword }: { keyword: string }) => {
  const { data, loading } = useSelector(
    (rootState: RootState) => rootState.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (keyword !== '') {
      dispatch(searchPosts({ keyword }));
    }
  }, [dispatch, keyword]);

  return <Result keyword={keyword} loading={loading} posts={data} />;
};

export default function ReduxSagaDemo() {
  const [keyword, setKeyword] = useState('');

  return (
    <Provider store={store}>
      <h1 style={{ paddingTop: 22, borderTop: 'solid 2px black' }}>
        Redux Saga
      </h1>

      <div style={{ background: '#ff45008c', marginBottom: 12 }}>
        Loading time: react = 1s, js = 5s, ts = 10s
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Nav setKeyword={setKeyword} />
        <SearchPosts keyword={keyword} />
      </div>
    </Provider>
  );
}
