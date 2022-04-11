export default function Result({
  keyword,
  loading,
  posts = [],
}: {
  keyword: string;
  loading: boolean;
  posts: { id: string; title: string }[];
}) {
  const isNoKeyword = keyword === '';

  return (
    <div
      style={{
        marginLeft: 40,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {isNoKeyword && <h2>Click a category to search</h2>}
      {loading && <h3>Loading {keyword} ...</h3>}
      {!loading &&
        posts &&
        posts.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>
  );
}
