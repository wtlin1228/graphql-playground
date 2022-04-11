import ReduxSagaDemo from './redux-saga';
import ReduxObservableDemo from './redux-observable';
import ApolloClientDemo from './apollo-client';
import ReactQueryDemo from './react-query';
import NoLibraryDemo from './no-library';

export function App() {
  return (
    <>
      <ReduxSagaDemo />
      <ReduxObservableDemo />
      <ApolloClientDemo />
      <ReactQueryDemo />
      <NoLibraryDemo />
    </>
  );
}

export default App;
