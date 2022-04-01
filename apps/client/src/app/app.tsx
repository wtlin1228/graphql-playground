import ReduxSagaDemo from './demos/api-race-conditions/redux-saga';
import ReduxObservableDemo from './demos/api-race-conditions/redux-observable';
import ApolloClientDemo from './demos/api-race-conditions/apollo-client';
import ReactQueryDemo from './demos/api-race-conditions/react-query';
import NoLibraryDemo from './demos/api-race-conditions/no-library';

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
