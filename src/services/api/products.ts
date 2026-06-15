import { strapi } from './global';
import type { StrapiResponse, StrapiMedia } from './global';

export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  bgColor: string;
  icon: string;
  heroTitle?: string;
  heroSubtitle?: string;
  detailedDescription?: string;
  keyFeatures?: { id: number; title: string; description: string; icon?: string }[];
  heroImage?: StrapiMedia;
  gallery?: StrapiMedia[];
  order: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

const base = '/products';

export const productApi = {
  getAll: async (params?: { limit?: number; page?: number }) => {
    const { data } = await strapi.get<StrapiResponse<Product[]>>(base, {
      params: { ...params, sort: ['order:asc'] },
    });
    return data.data;
  },
  getBySlug: async (slug: string) => {
    const { data } = await strapi.get<StrapiResponse<Product[]>>(base, {
      params: { filters: { slug: { $eq: slug } }, populate: '*' },
    });
    return data.data[0];
  },
  getHeroItems: async () => {
    const { data } = await strapi.get<StrapiResponse<Product[]>>(base, {
      params: {
        fields: ['id', 'title', 'description', 'bgColor', 'icon'],
        sort: ['order:asc'],
        pagination: { limit: 3 },
      },
    });
    return data.data;
  },
};
