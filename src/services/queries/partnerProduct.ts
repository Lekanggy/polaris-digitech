export { strapiUrl, STRAPI_BASE } from './homeQuery';

// ── TypeScript types mirroring the partnersProducts GraphQL response ────────
export interface PartnerProductImage {
  url?: string;
  name?: string;
  documentId?: string;
}

export interface PartnerProductIntroSection {
  id?: string;
  description?: string;
  leftImage?: PartnerProductImage;
}

export interface PartnerProductQuote {
  id?: string;
  image?: PartnerProductImage;
  quote?: string;
}

export interface PricingFeatureItem {
  id?: string;
  text?: string;
}

export interface PricingPlan {
  id?: string;
  name?: string;
  price?: string;
  period?: string;
  highlighted?: boolean;
  features?: PricingFeatureItem[];
}

export interface PartnerPricing {
  id?: string;
  title?: string;
  description?: string;
  plans?: PricingPlan[];
}

export interface PartnerKeyFeatureItem {
  id?: string;
  title?: string;
  description?: string;
  Icon?: string;
}

export interface PartnerKeyFeatures {
  id?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  features?: PartnerKeyFeatureItem[];
}

export interface PartnerProductShowcase {
  image?: PartnerProductImage;
}

export interface PartnerProductItem {
  documentId?: string;
  title?: string;
  description?: string;
  image?: PartnerProductImage;
  route?: string;
  introsection?: PartnerProductIntroSection;
  quote?: PartnerProductQuote;
  pricing?: PartnerPricing | null;
  features?: PartnerKeyFeatures;
  showcase?: PartnerProductShowcase;
  publishedAt?: string;
}

export interface PartnersProductsData {
  partnersProducts?: PartnerProductItem[];
}

export const partnersProductQuery = `
query PartnersProducts {
  partnersProducts {
    description
    documentId
    features {
      features {
        Icon
        description
        id
        title
      }
      id
      sectionDescription
      sectionTitle
    }
    image {
      name
      url
    }
    introsection {
      description
      id
      leftImage {
        url
        name
      }
      title
    }
    pricing {
      description
      id
      plans {
        features {
          id
          text
        }
        highlighted
        id
        name
        period
        price
      }
      title
    }
    quote {
      id
      image {
        url
        name
      }
      quote
    }
    route
    showcase {
      id
      image {
        url
        name
        documentId
      }
    }
    title
    createdAt
  }
}
`
