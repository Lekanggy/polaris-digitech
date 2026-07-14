export { strapiUrl, STRAPI_BASE } from './homeQuery';

// ── Types ─────────────────────────────────────────────────────────────────
export interface CmsImage { url?: string; name?: string; documentId?: string; }

export interface ProjectItemCard {
  id?: string;
  logo?: string;
  title?: string;
  description?: string;
  href?: string;
  image?: CmsImage;
  cardLogo?: CmsImage;
}

export interface ProjectIntroData {
  leftImage?: CmsImage;
  title?: string;
  description?: string;
}

export interface ProjectMetaImageItem { image?: CmsImage; id?: string; }
export interface ProjectMetaField { value?: string; label?: string; id?: string; }
export interface ProjectMetaData {
  image?: ProjectMetaImageItem[];
  project_meta?: ProjectMetaField[];
}

export interface ProjectDescriptionData {
  id?: string; title?: string; description?: string;
  leftImage?: CmsImage; rightImage?: CmsImage; imageFull?: CmsImage;
}

export interface ProjectObjectiveData {
  id?: string; quote?: string; image?: CmsImage;
}

export interface ProjectKeyFeatureData {
  id?: string; title?: string; description?: string; Icon?: string;
}

export interface ProjectGalleryData {
  id?: string; ImageLarge?: CmsImage; imageLeft?: CmsImage; imageRight?: CmsImage;
}

/** One project entry from the projects array */
export interface ProjectEntry {
  documentId?: string;
  project_item?: ProjectItemCard;       // card data (title, description, href, cardLogo, image)
  project_intro?: ProjectIntroData;     // hero section
  projectMeta?: ProjectMetaData;        // meta fields + showcase image
  projectDescription?: ProjectDescriptionData;
  projectObjectives?: ProjectObjectiveData;
  KeyFeatures?: ProjectKeyFeatureData[];
  projectGallery?: ProjectGalleryData;
  publishedAt?: string;
}

export interface ProjectsData {
  projects?: ProjectEntry[];
}

export const projectQuery = `
query Projects {
  projects {
    documentId
    project_item {
      id
      logo
      title
      description
      href
      image {
        url
        name
        documentId
      }
      cardLogo {
        url
        name
        documentId
      }
    }
    project_intro {
      leftImage {
        url
        name
        documentId
      }
      title
      description
    }
    projectMeta {
      image {
        image {
          url
          name
          documentId
        }
        id
      }
      project_meta {
        value
        label
        id
      }
    }
    projectDescription {
      id
      title
      description
      leftImage {
        url
        name
        documentId
      }
      rightImage {
        url
        name
        documentId
      }
      imageFull {
        url
        name
        documentId
      }
    }
    projectObjectives {
      quote
      id
      image {
        url
        name
        documentId
      }
    }
    KeyFeatures {
      description
      title
      id
      Icon
    }
    projectGallery {
      id
      ImageLarge {
        documentId
        name
        url
      }
      imageLeft {
        name
        documentId
        url
      }
      imageRight {
        url
        name
        documentId
      }
    }
    publishedAt
  }
}
`;
