import { strapi } from './global';
import type { StrapiResponse, StrapiMedia } from './global';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  body?: string;
  heroImage?: StrapiMedia;
  authorName?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

const base = '/blog-posts';

export const blogApi = {
  getAll: async (params?: { limit?: number; page?: number }) => {
    const { data } = await strapi.get<StrapiResponse<BlogPost[]>>(base, { params });
    return data.data;
  },
  getBySlug: async (slug: string) => {
    const { data } = await strapi.get<StrapiResponse<BlogPost[]>>(base, {
      params: { filters: { slug: { $eq: slug } }, populate: '*' },
    });
    return data.data[0];
  },
};
