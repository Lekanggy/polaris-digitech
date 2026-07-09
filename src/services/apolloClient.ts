import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

// Export commonly used items
export { ApolloProvider } from '@apollo/client/react';
export { useQuery, useMutation, useSubscription } from '@apollo/client/react';
export { gql } from '@apollo/client';

// GraphQL endpoints — update based on your environment
const HTTP_ENDPOINT =
  import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://34.42.83.83:1337/graphql';

const WS_ENDPOINT =
  import.meta.env.VITE_GRAPHQL_WS_ENDPOINT ||
  HTTP_ENDPOINT.replace(/^http/, 'ws');

// 1. HTTP Link — for queries and mutations
const httpLink = new HttpLink({
  uri: HTTP_ENDPOINT,
  // credentials: 'include' removed — Strapi sends wildcard CORS (*) which the
  // browser blocks when credentials mode is 'include'.
});

// 2. WebSocket Link — only created when VITE_GRAPHQL_WS_ENABLED=true.
//    Strapi requires the graphql-ws plugin to be installed and configured
//    before the WS endpoint works. Until then, leave it disabled to avoid
//    the 400 handshake error that would appear in the console.
const wsEnabled = import.meta.env.VITE_GRAPHQL_WS_ENABLED === 'true';

const wsLink = wsEnabled
  ? new GraphQLWsLink(
      createClient({
        url: WS_ENDPOINT,
        retryAttempts: 3,
        // Uncomment to attach an auth token when Strapi auth is required:
        // connectionParams: () => ({
        //   authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
        // }),
      }),
    )
  : null;

// 3. Split Link — route subscriptions to WS when available, else HTTP for all
const splitLink =
  wsLink
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink,
        httpLink,
      )
    : httpLink;

// 4. Apollo Client instance
export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'cache-first',
    },
  },
});
