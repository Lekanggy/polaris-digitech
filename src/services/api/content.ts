import { strapi } from './global';
import type { StrapiResponse } from './global';

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  company: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ValueProp {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: number;
  name: string;
  logo?: { url: string };
  website?: string;
  order: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category?: string;
  order: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export const contentApi = {
  getTestimonials: async (params?: { limit?: number; page?: number }) => {
    const { data } = await strapi.get<StrapiResponse<Testimonial[]>>('/testimonials', {
      params,
    });
    return data.data;
  },
  getValueProps: async () => {
    const { data } = await strapi.get<StrapiResponse<ValueProp[]>>('/value-props', {
      params: { sort: ['order:asc'] },
    });
    return data.data;
  },
  getClients: async () => {
    const { data } = await strapi.get<StrapiResponse<Client[]>>('/clients', {
      params: { sort: ['order:asc'] },
    });
    return data.data;
  },
  getFAQs: async (category?: string) => {
    const params: Record<string, string> = category ? { filters: { category: { $eq: category } } } : {};
    const { data } = await strapi.get<StrapiResponse<FAQ[]>>('/faq-items', { params });
    return data.data;
  },
};
