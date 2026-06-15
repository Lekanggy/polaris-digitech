import axios from 'axios';

export const STRAPI_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://34.42.83.83:1337';

export const strapi = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export type StrapiResponse<T> = {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiMedia = {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: Record<string, { url: string; width: number; height: number }>;
  url: string;
  hash?: string;
  mime: string;
  size: number;
  previewUrl?: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
};

export type StrapiUploadFile = {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: Record<string, { url: string; width: number; height: number }>;
  url: string;
  hash?: string;
  mime: string;
  size: number;
  previewUrl?: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
  folderPath?: string;
};

export interface GlobalNavLink {
  id: number;
  label: string;
  href: string;
  order: number;
  dropdown?: string[];
  services?: NavServiceItem[];
  products?: NavProductItem[];
  partnerProducts?: string[];
  projects?: NavProjectItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface NavServiceItem {
  id?: number;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface NavProductItem {
  id?: number;
  icon: string;
  title: string;
  description: string;
  bg: string;
  href?: string;
}

export interface NavProjectItem {
  id?: number;
  logo: string;
  title: string;
  description: string;
  href: string;
}

export interface GlobalNavigation {
  id: number;
  siteName: string;
  links: GlobalNavLink[];
  logo?: StrapiUploadFile;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface GlobalFooter {
  id: number;
  footerLinks: Record<string, string[]>;
  companyName: string;
  copyrightText: string;
  socialLinks?: { platform: string; url: string }[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

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
