export { strapiUrl, STRAPI_BASE } from './homeQuery';

// ── TypeScript types mirroring the partnersProducts GraphQL response ────────
export interface PartnerProductImage {
  url?: string;
  name?: string;
  documentId?: string;
}

export interface PartnerProductIntroSection {
  id?: string;
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
    documentId
    title
    description
    image {
      url
      name
      documentId
    }
    route
    introsection {
      id
      leftImage {
        url
        name
        documentId
      }
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
    pricing {
      description
      title
      id
      plans {
        highlighted
        period
        price
        name
        id
        features {
          text
          id
        }
      }
    }
    features {
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
    }
    publishedAt
  }
}
`
