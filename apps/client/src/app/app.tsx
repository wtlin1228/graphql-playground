import ApolloClientDemo from './demos/api-race-conditions/apollo-client';
import ReactQueryDemo from './demos/api-race-conditions/react-query';
import ReduxObservableDemo from './demos/api-race-conditions/redux-observable';
import ReduxSagaDemo from './demos/api-race-conditions/redux-saga';

export function App() {
  return (
    <>
      <ApolloClientDemo />
      <ReactQueryDemo />
      <ReduxObservableDemo />
      <ReduxSagaDemo />
    </>
  );
}

export default App;
