export { strapiUrl, STRAPI_BASE } from './homeQuery';

// ── TypeScript types mirroring the blogs GraphQL response ────────────────
export interface BlogImageData {
  url?: string;
  name?: string;
  documentId?: string;
}

export interface BlogParagraph {
  id?: string;
  text?: string;
}

export interface BlogArticleSection {
  id?: string;
  slug?: string;
  heading?: string;
  paragraph?: BlogParagraph[];
  articleImage?: BlogImageData | null;
}

export interface BlogPost {
  documentId?: string;
  slug?: string;
  title?: string;
  description?: string;
  date?: string;
  category?: string;
  author?: string;
  image?: BlogImageData;
  article?: BlogArticleSection[];
  publishedAt?: string;
}

export interface BlogsData {
  blogs?: BlogPost[];
}

export const blogsQuery = `
query BlogQuery {
  blogs {
    documentId
    slug
    title
    description
    date
    category
    author
    image {
      url
      name
      documentId
    }
    article {
      id
      slug
      heading
      paragraph {
        text
        id
      }
      articleImage {
        url
        name
        documentId
      }
    }
    publishedAt
  }
}
`
