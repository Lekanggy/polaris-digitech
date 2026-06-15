import { strapi } from './global';
import type { StrapiResponse, StrapiMedia } from './global';

export interface Service {
  id: number;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription?: string;
  features?: { id: number; title: string; description: string }[];
  bgColor: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: StrapiMedia;
  order: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

const base = '/services';

export const serviceApi = {
  getAll: async (params?: { limit?: number; page?: number }) => {
    const { data } = await strapi.get<StrapiResponse<Service[]>>(base, {
      params: { ...params, sort: ['order:asc'] },
    });
    return data.data;
  },
  getBySlug: async (slug: string) => {
    const { data } = await strapi.get<StrapiResponse<Service[]>>(base, {
      params: { filters: { slug: { $eq: slug } }, populate: '*' },
    });
    return data.data[0];
  },
};
