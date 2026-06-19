import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Export commonly used items
export { ApolloProvider } from '@apollo/client/react';
export { useQuery, useMutation, useSubscription } from '@apollo/client/react';
export { gql } from '@apollo/client';

// GraphQL endpoint - update based on your environment
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://34.42.83.83:1337/graphql';

// Create HTTP link to your GraphQL server
const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
  credentials: 'include', // Send cookies with requests if needed
});

// Create Apollo Client instance
export const apolloClient = new ApolloClient({
  link: httpLink,
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