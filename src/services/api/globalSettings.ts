import { strapi } from './global';
import type { StrapiResponse, GlobalNavLink, NavServiceItem, NavProductItem, NavProjectItem } from './global';

export interface GlobalSettings {
  id: number;
  siteTitle: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface GlobalNavigation {
  id: number;
  siteName: string;
  links: GlobalNavLink[];
  logo?: { url: string };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface GlobalFooter {
  id: number;
  footerLinks: Record<string, string[]>;
  companyName: string;
  copyrightText: string;
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export const globalApi = {
  getSettings: async () => {
    const { data } = await strapi.get<StrapiResponse<GlobalSettings>>('/global-settings');
    return data.data;
  },
  getNavigation: async () => {
    const { data } = await strapi.get<StrapiResponse<GlobalNavigation>>('/global-navigations');
    return data.data;
  },
  getFooter: async () => {
    const { data } = await strapi.get<StrapiResponse<GlobalFooter>>('/global-footers');
    return data.data;
  },
};
