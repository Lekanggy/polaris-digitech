export { strapiUrl, STRAPI_BASE } from './homeQuery';

// ── TypeScript types mirroring the career GraphQL response ──────────────
export interface CareerImage {
  name?: string;
  documentId?: string;
  url?: string;
}

export interface CareerCategory {
  id?: string;
  text?: string;
}

export interface JobSectionItem {
  text?: string;
}

export interface JobSectionData {
  id?: string;
  heading?: string;
  items?: JobSectionItem[];
}

export interface CareerJob {
  id?: string;
  href?: string;
  title?: string;
  description?: string;
  mode?: string;
  type?: string;
  location?: string;
  Category?: string;
  sections?: JobSectionData[];
}

export interface CareerData {
  career?: {
    documentId?: string;
    header?: string;
    headerDescription?: string;
    images?: CareerImage[];
    Category?: CareerCategory[];
    jobs?: CareerJob[];
    publishedAt?: string;
  };
}

export const careerQuery = `
query CareerQuery {
  career {
    documentId
    header
    headerDescription
    images {
      name
      documentId
      url
    }
    Category {
      id
      text
    }
    jobs {
      id
      href
      title
      description
      mode
      type
      location
      Category
      sections {
        id
        heading
        items {
          text
        }
      }
    }
    publishedAt
  }
}
`