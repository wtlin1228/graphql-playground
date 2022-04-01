import { useState } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { request, gql } from 'graphql-request';

import Nav from '../Nav';
import Result from '../Result';

const endpoint = 'http://localhost:3333/graphql';
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

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});

const SearchPosts = ({ keyword }: { keyword: string }) => {
  const { status, data } = useQuery(
    ['posts', keyword],
    () => searchPosts(keyword),
    {
      enabled: !!keyword,
    }
  );

  console.log(data);

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
