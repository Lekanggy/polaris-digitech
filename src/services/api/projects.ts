import { strapi } from './global';
import type { StrapiResponse, StrapiMedia } from './global';

export interface Project {
  id: number;
  title: string;
  slug: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: StrapiMedia;
  description?: string;
  keyFeatures?: { id: number; title: string; description: string; icon?: string }[];
  gallery?: StrapiMedia[];
  metaDescription?: string;
  location?: string;
  client?: string;
  startDate?: string;
  endDate?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

const base = '/projects';

export const projectApi = {
  getAll: async (params?: { limit?: number; page?: number }) => {
    const { data } = await strapi.get<StrapiResponse<Project[]>>(base, { params });
    return data.data;
  },
  getBySlug: async (slug: string) => {
    const { data } = await strapi.get<StrapiResponse<Project[]>>(base, {
      params: { filters: { slug: { $eq: slug } }, populate: '*' },
    });
    return data.data[0];
  },
};
