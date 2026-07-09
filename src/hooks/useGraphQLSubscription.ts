import type { DocumentNode, OperationVariables } from '@apollo/client';
import type { useSubscription as useSubscriptionType } from '@apollo/client/react';
import { useSubscription, gql } from '../services/apolloClient';
import { useGraphQLQuery } from './useGraphQLQuery';
import type { useQuery as useQueryType } from '@apollo/client/react';

// ---------------------------------------------------------------------------
// Re-exported v4 types for convenience
// ---------------------------------------------------------------------------

/**
 * The object passed to the `onData` callback.
 * Mirrors `useSubscription.OnDataOptions<TData>` from Apollo Client v4.
 */
export type OnDataOptions<TData = unknown> =
  useSubscriptionType.OnDataOptions<TData>;

// ---------------------------------------------------------------------------
// Standalone subscription hook
// ---------------------------------------------------------------------------

/**
 * Reusable hook for Apollo subscriptions (Apollo Client v4).
 *
 * Accepts either a pre-parsed DocumentNode or a raw GraphQL string,
 * plus the full set of Apollo v4 subscription options.
 *
 * Use the `onData` callback to react to incoming events — it fires *before*
 * the component re-renders, which avoids stale-closure issues you get with
 * `useEffect`. Inside `onData` you have access to the Apollo `client` so you
 * can read/write the cache for any query.
 *
 * Returns `useSubscription.Result<TData>`:
 *   `{ loading, data?, error?, restart }`
 *
 * @example — listen for new articles and update a list query cache
 * ```ts
 * useGraphQLSubscription(ARTICLE_CREATED_SUBSCRIPTION, {
 *   onData: ({ client, data }) => {
 *     const newArticle = data.data?.articleCreated;
 *     if (!newArticle) return;
 *
 *     const cached = client.readQuery<ArticlesQuery>({ query: GET_ARTICLES });
 *     if (!cached) return;
 *
 *     client.writeQuery<ArticlesQuery>({
 *       query: GET_ARTICLES,
 *       data: { articles: [...cached.articles, newArticle] },
 *     });
 *   },
 * });
 * ```
 */
export function useGraphQLSubscription<
  TData = unknown,
  TVariables extends OperationVariables = Record<string, never>,
>(
  subscription: DocumentNode | string,
  ...args: {} extends TVariables
    ? [options?: useSubscriptionType.Options<TData, TVariables>]
    : [options: useSubscriptionType.Options<TData, TVariables>]
): useSubscriptionType.Result<TData> {
  const parsedSubscription: DocumentNode =
    typeof subscription === 'string' ? gql(subscription) : subscription;

  const [options] = args;

  // The underlying useSubscription has a conditional rest-param signature;
  // we forward the options object with a cast since we already mirror that
  // same conditional constraint on our own signature above.
  return useSubscription<TData, TVariables>(
    parsedSubscription,
    options as useSubscriptionType.Options<TData, TVariables>,
  );
}

// ---------------------------------------------------------------------------
// Combined query + live-update hook
// ---------------------------------------------------------------------------

export interface UseQueryWithSubscriptionOptions<
  TQueryData = unknown,
  TQueryVariables extends OperationVariables = Record<string, never>,
  TSubscriptionData = unknown,
  TSubscriptionVariables extends OperationVariables = Record<string, never>,
> {
  /** Initial-fetch query (DocumentNode or raw string). */
  query: DocumentNode | string;
  queryOptions?: useQueryType.Options<TQueryData, TQueryVariables>;

  /** Real-time subscription (DocumentNode or raw string). */
  subscription: DocumentNode | string;
  /**
   * Subscription options *excluding* `onData` — the hook wires that up
   * internally. Pass `onExtraData` below if you need a side-effect callback.
   */
  subscriptionOptions?: Omit<
    useSubscriptionType.Options<TSubscriptionData, TSubscriptionVariables>,
    'onData'
  >;

  /**
   * Merge an incoming subscription event into the current query result.
   * Return the new query data object that should be written back to the cache.
   *
   * @example
   * ```ts
   * mergeData: (current, event) => ({
   *   articles: [...current.articles, event.articleCreated],
   * })
   * ```
   */
  mergeData: (current: TQueryData, event: TSubscriptionData) => TQueryData;

  /**
   * Optional callback fired on each subscription event *after* the cache
   * has been updated. Useful for toasts, logging, side effects, etc.
   */
  onExtraData?: (options: OnDataOptions<TSubscriptionData>) => void;
}

/**
 * Convenience hook that pairs an initial `useQuery` fetch with a live
 * `useSubscription` that automatically keeps the query cache up to date.
 *
 * You only describe *how* to merge new data (`mergeData`); all cache
 * read/write logic is handled internally.
 *
 * @example
 * ```ts
 * const { data, loading, error } = useQueryWithSubscription({
 *   query: GET_ARTICLES,
 *   subscription: ARTICLE_CREATED_SUBSCRIPTION,
 *   mergeData: (current, event) => ({
 *     articles: [...current.articles, event.articleCreated],
 *   }),
 * });
 * ```
 */
export function useQueryWithSubscription<
  TQueryData = unknown,
  TQueryVariables extends OperationVariables = Record<string, never>,
  TSubscriptionData = unknown,
  TSubscriptionVariables extends OperationVariables = Record<string, never>,
>({
  query,
  queryOptions,
  subscription,
  subscriptionOptions,
  mergeData,
  onExtraData,
}: UseQueryWithSubscriptionOptions<
  TQueryData,
  TQueryVariables,
  TSubscriptionData,
  TSubscriptionVariables
>): useQueryType.Result<TQueryData, TQueryVariables> {
  const parsedQuery: DocumentNode =
    typeof query === 'string' ? gql(query) : query;

  // Initial data fetch
  const queryResult = useGraphQLQuery<TQueryData, TQueryVariables>(
    parsedQuery,
    queryOptions,
  );

  // Live updates — merge each event into the query cache
  const subOptions: useSubscriptionType.Options<
    TSubscriptionData,
    TSubscriptionVariables
  > = {
    ...(subscriptionOptions as useSubscriptionType.Options<
      TSubscriptionData,
      TSubscriptionVariables
    >),
    onData: (options: OnDataOptions<TSubscriptionData>) => {
      const { client, data } = options;

      if (data.data) {
        const current = client.readQuery<TQueryData>({ query: parsedQuery });

        if (current) {
          client.writeQuery<TQueryData>({
            query: parsedQuery,
            data: mergeData(current, data.data),
          });
        }
      }

      onExtraData?.(options);
    },
  };

  useSubscription<TSubscriptionData, TSubscriptionVariables>(
    typeof subscription === 'string' ? gql(subscription) : subscription,
    subOptions,
  );

  return queryResult;
}
