const KEYWORD = {
  react: 'React',
  js: 'JavaScript',
  ts: 'TypeScript',
};

export default function Nav({
  setKeyword,
}: {
  setKeyword: (keyword: string) => void;
}) {
  return (
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
  );
}
