import { useEffect, useState } from 'react';

import Nav from '../Nav';
import Result from '../Result';

const endpoint = 'http://localhost:3333/graphql';

const SearchPosts = ({ keyword }: { keyword: string }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!keyword) {
      return;
    }

    setLoading(true);
    setPosts([]);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(endpoint, {
      method: 'POST',
      signal,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query SearchPostsQuery {
            searchPosts(keyword: "${keyword}") {
              id
              title
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setPosts(res.data.searchPosts);
      });

    return () => {
      controller.abort();
    };
  }, [keyword]);

  return <Result keyword={keyword} loading={loading} posts={posts} />;
};

export default function NoFrameworkDemo() {
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <h1 style={{ paddingTop: 22, borderTop: 'solid 2px black' }}>
        No Framework
      </h1>

      <div style={{ background: '#ff45008c', marginBottom: 12 }}>
        Loading time: react = 1s, js = 5s, ts = 10s
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Nav setKeyword={setKeyword} />
        <SearchPosts keyword={keyword} />
      </div>
    </>
  );
}
