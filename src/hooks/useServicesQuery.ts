import { useGraphQLQuery } from './useGraphQLQuery';
import { serviceQuery } from '../services/queries/serviceQuery';
import type { ServicesData, ServiceEntry } from '../services/queries/serviceQuery';
import { gql } from '../services/apolloClient';

const SERVICE_QUERY = gql(serviceQuery);

/**
 * Shared hook — fetches all services once.
 * Apollo cache means a single network request across all consumers.
 *
 * Find a specific service with:
 *   services.find(s => s.intro?.href === '/services/land-surveying')
 */
export function useServicesQuery(): {
  services: ServiceEntry[];
  loading: boolean;
  error: unknown;
} {
  const { data, loading, error } = useGraphQLQuery<ServicesData>(SERVICE_QUERY);
  return {
    services: (data?.services as ServiceEntry[]) ?? [],
    loading,
    error,
  };
}
