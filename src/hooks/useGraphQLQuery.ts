import type { DocumentNode, OperationVariables } from '@apollo/client';
import type { useQuery as useQueryType } from '@apollo/client/react';
import { useQuery, gql } from '../services/apolloClient';

/**
 * Reusable hook for Apollo queries (Apollo Client v4).
 *
 * Accepts either a pre-parsed DocumentNode or a raw GraphQL string,
 * plus the full set of Apollo v4 query options.
 *
 * Returns the full useQuery.Result so callers have access to
 * refetch, fetchMore, startPolling, networkStatus, etc.
 *
 * @example — basic fetch
 * ```ts
 * const { data, loading, error } = useGraphQLQuery(GET_ARTICLES);
 * ```
 *
 * @example — with variables and skip
 * ```ts
 * const { data, loading, error } = useGraphQLQuery(PRODUCT_QUERY, {
 *   variables: { documentId: id },
 *   skip: !id,
 * });
 * ```
 */
export function useGraphQLQuery<
  TData = unknown,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode | string,
  options: useQueryType.Options<TData, TVariables> = {} as useQueryType.Options<TData, TVariables>,
): useQueryType.Result<TData, TVariables> {
  const parsedQuery: DocumentNode =
    typeof query === 'string' ? gql(query) : query;

  return useQuery<TData, TVariables>(parsedQuery, options);
}
