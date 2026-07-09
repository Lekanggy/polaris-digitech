// Base URL for Strapi-hosted images (e.g. "/uploads/hero2.png" → full URL)
export const STRAPI_BASE = import.meta.env.VITE_STRAPI_API_URL || 'http://34.42.83.83:1337';

/** Prepend Strapi base URL to a relative path returned by the API */
export function strapiUrl(path?: string | null): string | undefined {
  if (!path) return undefined;
  if (path.startsWith('http')) return path;
  return `${STRAPI_BASE}${path}`;
}

export const homeQuery = `
  query Home {
    home {
      heroSection {
        id
        badage
        mainDescription
        bottomDescription
        bgImage {
          documentId
          url
          provider_metadata
        }
        scrolmage {
          documentId
          name
          provider_metadata
          url
        }
      }
      service {
        id
        title
        description
        serviceItem {
          id
          title
          bgImage {
            documentId
            name
            url
          }
          href
        }
      }
      aboutState {
        bgImage {
          name
          url
          documentId
        }
        badage
        description
        stats {
          id
          value
          label
        }
        chooseus
        KeyFeatures {
          id
          title
          description
          Icon
        }
      }
      product {
        id
        title
        description
        item {
          id
          title
          description
          icon
          href
          icons
        }
        projectItem {
          id
          logo
          description
          title
          image {
            name
            url
            documentId
          }
        }
      }
      Contacts {
        id
        label
        value
      }
      testimonial {
        id
        text
        author
        company
      }
      client {
        id
        clientImage {
          name
          documentId
          url
        }
      }
      publishedAt
    }
  }
`;

// Real-time subscription — fires when the Home single-type is updated in Strapi
export const homeSubscription = `
  subscription HomeUpdated {
    home {
      heroSection {
        id
        badage
        mainDescription
        bottomDescription
        bgImage {
          documentId
          url
          provider_metadata
        }
        scrolmage {
          documentId
          name
          provider_metadata
          url
        }
      }
      service {
        id
        title
        description
        serviceItem {
          id
          title
          bgImage {
            documentId
            name
            url
          }
          href
        }
      }
      aboutState {
        bgImage {
          name
          url
          documentId
        }
        badage
        description
        stats {
          id
          value
          label
        }
        chooseusKeyFeatures {
          id
          title
          description
          Icon
        }
      }
      product {
        id
        title
        description
        item {
          id
          title
          description
          icon
          href
          icons
        }
        projectItem {
          id
          logo
          description
          title
          image {
            name
            url
            documentId
          }
        }
      }
      Contacts {
        id
        label
        value
      }
      testimonial {
        id
        text
        author
        company
      }
      client {
        id
        clientImage {
          name
          documentId
          url
        }
      }
      publishedAt
    }
  }
`;

// ── TypeScript types mirroring the API response ─────────────────────────
// All fields are optional — Apollo v4 wraps results in DeepPartialObject
// (via MaybeMasked<T>) so every field may be absent at the type level.

export interface StrapiImage {
  documentId?: string;
  name?: string;
  url?: string;
  provider_metadata?: unknown;
}

export interface HeroSection {
  id?: string;
  badage?: string;
  mainDescription?: string;
  bottomDescription?: string;
  bgImage?: StrapiImage;
  scrolmage?: StrapiImage[];
}

export interface ServiceItem {
  id?: string;
  title?: string;
  bgImage?: StrapiImage[];
  href?: string;
}

export interface Service {
  id?: string;
  title?: string;
  description?: string;
  serviceItem?: ServiceItem[];
}

export interface Stat {
  id?: string;
  value?: string;
  label?: string;
}

export interface KeyFeature {
  id?: string;
  title?: string;
  description?: string;
  Icon?: string;
}

export interface AboutState {
  bgImage?: StrapiImage;
  badage?: string;
  description?: string;
  stats?: Stat[];
  chooseusKeyFeatures?: KeyFeature[];
}

export interface ProductItem {
  id?: string;
  title?: string;
  description?: string;
  icon?: string;
  href?: string;
  icons?: string;
}

export interface ProjectItem {
  id?: string;
  logo?: string;
  description?: string;
  title?: string;
  image?: StrapiImage;
}

export interface Product {
  id?: string;
  title?: string;
  description?: string;
  item?: ProductItem[];
  projectItem?: ProjectItem[];
}

export interface ContactItem {
  id?: string;
  label?: string;
  value?: string;
}

export interface Testimonial {
  id?: string;
  text?: string;
  author?: string;
  company?: string;
}

export interface ClientData {
  id?: string;
  clientImage?: StrapiImage[];
}

export interface HomeData {
  home?: {
    heroSection?: HeroSection;
    service?: Service;
    aboutState?: AboutState;
    product?: Product;
    Contacts?: ContactItem[];
    testimonial?: Testimonial[];
    client?: ClientData;
    publishedAt?: string;
  };
}
