export { strapiUrl, STRAPI_BASE } from './homeQuery';

// ── Types ─────────────────────────────────────────────────────────────────
export interface SvcImage { url?: string; name?: string; documentId?: string; }

export interface ServiceIntroItem {
  id?: string;
  title?: string;
  description?: string;
  href?: string;
  image?: SvcImage;
  icons?: string;
}

export interface ServiceStat {
  id?: string;
  value?: string;
  label?: string;
}

export interface ServiceKeyFeature {
  id?: string;
  title?: string;
  description?: string;
  Icon?: string;
}

export interface ServiceQuote {
  id?: string;
  quote?: string;
  image?: SvcImage;
}

export interface FeatureImageItem {
  id?: string;
  image?: SvcImage;
}

export interface ServiceDetailsItem {
  id?: string;
  title?: string;
  top_description?: string;
  image?: SvcImage;
  bottom_text?: string;
  Stats?: ServiceStat[];
  KeyFeatures?: ServiceKeyFeature[];
  Service_quote?: ServiceQuote;
  Feature_Image?: FeatureImageItem[];
  feature_images?: SvcImage[];
}

export interface ServiceEntry {
  documentId?: string;
  intro?: ServiceIntroItem;
  details?: ServiceDetailsItem;
  publishedAt?: string;
}

export interface ServicesData {
  services?: ServiceEntry[];
}

export const serviceQuery = `
query Services {
  services {
    documentId
    intro {
      id
      title
      description
      href
      image {
        url
        name
        documentId
      }
      icons
    }
    details {
      Feature_Image {
        id
        image {
          url
          name
          documentId
        }
      }
      id
      title
      top_description
      image {
        url
        name
        documentId
      }
      bottom_text
      Stats {
        id
        value
        label
      }
      KeyFeatures {
        id
        title
        description
        Icon
      }
      Service_quote {
        quote
        id
        image {
          url
          name
          documentId
        }
      }
      feature_images {
        url
        name
        documentId
      }
    }
    publishedAt
  }
}
`;
