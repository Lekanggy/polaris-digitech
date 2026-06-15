import { strapi } from './global';
import type { StrapiResponse } from './global';

export interface Job {
  id: number;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  description?: string;
  requirements?: { id: number; item: string }[];
  publishedAt: string;
  closingDate?: string;
  createdAt: string;
  updatedAt: string;
}

const base = '/jobs';

export const jobApi = {
  getAll: async (params?: { limit?: number; page?: number }) => {
    const { data } = await strapi.get<StrapiResponse<Job[]>>(base, { params });
    return data.data;
  },
  getBySlug: async (slug: string) => {
    const { data } = await strapi.get<StrapiResponse<Job[]>>(base, {
      params: { filters: { slug: { $eq: slug } }, populate: '*' },
    });
    return data.data[0];
  },
};
