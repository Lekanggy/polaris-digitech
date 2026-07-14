import { useGraphQLQuery } from './useGraphQLQuery';
import { projectQuery } from '../services/queries/projectQuery';
import type { ProjectsData, ProjectEntry } from '../services/queries/projectQuery';
import { gql } from '../services/apolloClient';

const PROJECT_QUERY = gql(projectQuery);

/**
 * Shared hook — fetches all projects once.
 * Apollo cache means a single network request across all consumers.
 *
 * projects[] — each entry is one project with card data + all detail sections.
 * Find a specific project with: projects.find(p => p.project_item?.href === '/projects/lag-ferry')
 */
export function useProjectsQuery(): {
  projects: ProjectEntry[];
  loading: boolean;
  error: unknown;
} {
  const { data, loading, error } = useGraphQLQuery<ProjectsData>(PROJECT_QUERY);
  return {
    projects: (data?.projects as ProjectEntry[]) ?? [],
    loading,
    error,
  };
}
