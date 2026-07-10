// Re-export helpers so About components don't need a cross-import from homeQuery
export { strapiUrl, STRAPI_BASE } from './homeQuery';

// ── TypeScript types mirroring the aboutUs GraphQL response ─────────────
export interface AboutImage {
  url?: string;
  name?: string;
  documentId?: string;
}

export interface AboutStat {
  id?: string;
  value?: string;
  label?: string;
}

export interface AboutSection {
  id?: string;
  badage?: string;
  description?: string;
  image?: AboutImage;
  rightText?: string;
  bgImage?: AboutImage;
  stats?: AboutStat[];
}

export interface VisionItem {
  id?: string;
  title?: string;
  description?: string;
}

export interface SetusApartItem {
  id?: string;
  title?: string;
  description?: string;
  image?: AboutImage;
}

export interface SetusApart {
  id?: string;
  title?: string;
  description?: string;
  items?: SetusApartItem[];
}

export interface KeyAchievement {
  id?: string;
  title?: string;
  year?: number;
  body?: string;
  logo?: AboutImage;
}

export interface AboutUsData {
  aboutUs?: {
    about?: AboutSection;
    vision?: VisionItem[];
    cultureImage?: AboutImage;
    setusApart?: SetusApart;
    keyAchievement?: KeyAchievement[];
    publishedAt?: string;
  };
}

export const aboutusQuery = `
query AboutusQuery {

  aboutUs {
    about {
      id
      badage
      description
      image {
        url
        name
        documentId
      }
      rightText
      bgImage {
        url
        name
        documentId
      }
      stats {
        id
        value
        label
      }
    }
    vision {
      id
      title
      description
    }
    cultureImage {
      url
      name
    }
    setusApart {
      id
      title
      description
      items {
        id
        title
        description
        image {
          url
          name
        }
      }
    }
    keyAchievement {
      id
      title
      year
      body
      logo {
        url
        name
        documentId
      }
    }
    publishedAt
  }
}

`