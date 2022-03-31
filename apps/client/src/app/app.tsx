import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

const KEYWORD = {
  react: 'React',
  js: 'JavaScript',
  ts: 'TypeScript',
};

const SEARCH_POSTS = gql`
  query SearchPostsQuery($keyword: String!) {
    searchPosts(keyword: $keyword) {
      id
      title
    }
  }
`;

export function App() {
  const [keyword, setKeyword] = useState(KEYWORD.react);
  const { loading, data } = useQuery(SEARCH_POSTS, {
    variables: { keyword },
  });

  return (
    <>
      <div style={{ background: '#ff45008c', marginBottom: 12 }}>
        Loading time: react = 3s, js = 2s, ts = 1s
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {Object.entries(KEYWORD).map(([key, value]) => (
            <div
              style={{
                padding: 10,
                marginBottom: 6,
                background: 'pink',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              key={key}
              onClick={() => setKeyword(value)}
            >
              {key}
            </div>
          ))}
        </div>
        <div
          style={{
            marginLeft: 40,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {loading && <h3>Loading {keyword} ...</h3>}
          {!loading &&
            data.searchPosts.map((post: { title: string }) => (
              <p>{post.title}</p>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
