import { useQuery, gql } from '../services/apolloClient';

export const useGraphQLQuery = <T = any>(query: string | any, variables: Record<string, any> = {}) => {
  const parsedQuery = typeof query === 'string' ? gql(query) : query;
  const { data, loading, error } = useQuery<T>(parsedQuery, { variables });
  return { data, loading, error };
};