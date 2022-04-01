import { useState } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { request, gql } from 'graphql-request';

import Nav from '../Nav';
import Result from '../Result';

const endpoint = 'http://localhost:3333/graphql';
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

const searchPosts = (keyword: string) =>
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

const SearchPosts = ({ keyword }: { keyword: string }) => {
  const { status, data } = useQuery(
    ['posts', keyword],
    () => searchPosts(keyword),
    {
      enabled: !!keyword,
    }
  );

  return (
    <Result
      keyword={keyword}
      loading={status === 'loading'}
      posts={data?.searchPosts}
    />
  );
};

export default function ReactQueryDemo() {
  const [keyword, setKeyword] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <h1 style={{ borderTop: 'solid 2px black' }}>React Query</h1>

      <div style={{ background: '#ff45008c', marginBottom: 12 }}>
        Loading time: react = 1s, js = 5s, ts = 10s
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Nav setKeyword={setKeyword} />
        <SearchPosts keyword={keyword} />
      </div>
    </QueryClientProvider>
  );
}
