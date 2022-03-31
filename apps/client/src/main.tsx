import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './app/app';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);
