import { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';

import Nav from '../Nav';
import Result from '../Result';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

const SEARCH_POSTS = gql`
  query SearchPostsQuery($keyword: String!) {
    searchPosts(keyword: $keyword) {
      id
      title
    }
  }
`;

const SearchPosts = ({ keyword }: { keyword: string }) => {
  const isNoKeyword = keyword === '';

  const { loading, data } = useQuery(SEARCH_POSTS, {
    variables: { keyword },
    skip: isNoKeyword,
  });

  return (
    <Result keyword={keyword} loading={loading} posts={data?.searchPosts} />
  );
};

export default function ApolloClientDemo() {
  const [keyword, setKeyword] = useState('');

  return (
    <ApolloProvider client={client}>
      <div style={{ background: '#ff45008c', marginBottom: 12 }}>
        Loading time: react = 1s, js = 5s, ts = 10s
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Nav setKeyword={setKeyword} />
        <SearchPosts keyword={keyword} />
      </div>
    </ApolloProvider>
  );
}
