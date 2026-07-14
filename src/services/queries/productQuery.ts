export { strapiUrl, STRAPI_BASE } from './homeQuery';

// ── TypeScript types mirroring the products GraphQL response ─────────────
export interface ProductImage {
  url?: string;
  name?: string;
  documentId?: string;
}

export interface ProductFeatureItem {
  id?: string;
  text?: string;
}

export interface ProductIntroData {
  leftImage?: ProductImage;
  title?: string;
  description?: string;
}

export interface ProductQuoteData {
  id?: string;
  image?: ProductImage;
  quote?: string;
}

export interface KeyFeatureItem {
  id?: string;
  title?: string;
  description?: string;
  Icon?: string;
}

export interface KeyFeaturesData {
  id?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  features?: KeyFeatureItem[];
}

export interface ProductShowcaseData {
  id?: string;
  image?: ProductImage;
}

export interface ProductItem {
  documentId?: string;
  title?: string;
  slug?: string;
  features?: ProductFeatureItem[];
  shortDescription?: string;
  boxPosition?: 'left' | 'right' | string;
  overlayImage?: ProductImage;
  route?: string;
  cardImage?: ProductImage;
  intro?: ProductIntroData;
  quote?: ProductQuoteData;
  KeyFeatures?: KeyFeaturesData;
  showcase?: ProductShowcaseData;
  Icons?: string;
  publishedAt?: string;
}

export interface ProductsData {
  products?: ProductItem[];
}

export const productQuery = `
 query Products {
  products {
    documentId
    title
    slug
    features {
      id
      text
    }
    shortDescription
    boxPosition
    overlayImage {
      url
      name
      documentId
    }
    route
    cardImage {
      url
      name
      documentId
    }
    intro {
      leftImage {
        url
        name
        documentId
      }
      title
      description
    }
    quote {
      image {
        url
        name
        documentId
      }
      quote
      id
    }
    KeyFeatures {
      id
      sectionTitle
      sectionDescription
      features {
        title
        description
        Icon
        id
      }
    }
    showcase {
      image {
        url
        name
        documentId
      }
      id
    }
    Icons
    publishedAt
  }
}
`;
