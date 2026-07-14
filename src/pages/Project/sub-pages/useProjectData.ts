/**
 * useProjectData — finds a single project from the CMS array by its href,
 * then extracts each section's data so individual pages can use it cleanly.
 *
 * Usage:
 *   const cms = useProjectData('/projects/lag-ferry');
 *   cms.heroTitle ?? 'Lag Ferry'
 *   cms.metaFields.length > 0 ? cms.metaFields : FALLBACK_FIELDS
 */
import { useProjectsQuery } from '../../../hooks/useProjectsQuery';
import { strapiUrl } from '../../../services/queries/projectQuery';
import type { ProjectKeyFeatureData } from '../../../services/queries/projectQuery';
import type { IconName } from './ProjectKeyFeatures';

const ICON_MAP: Record<string, IconName> = {
  geo: 'geo', map: 'map', globe: 'globe', monitor: 'monitor', database: 'database',
  shield: 'shield', chart: 'chart', video: 'video', emergency: 'emergency',
  realtime: 'realtime', collaboration: 'collaboration', mobile: 'mobile',
};

function toIcon(raw?: string): IconName {
  return ICON_MAP[(raw ?? '').toLowerCase()] ?? 'globe';
}

export interface CmsProjectData {
  // Hero
  heroTitle?:    string;
  heroSubtitle?: string;
  heroBgImage?:  string;
  // Meta
  metaFields:    { label: string; value: string }[];
  metaImage?:    string;
  // Description
  descText?:       string;
  descImageLeft?:  string;
  descImageRight?: string;
  descImageFull?:  string;
  // Objective
  objectiveText?: string;
  objectiveImage?: string;
  // KeyFeatures
  features: { icon: IconName; title: string; description: string }[];
  // Gallery
  galleryLarge?: string;
  galleryLeft?:  string;
  galleryRight?: string;
}

export function useProjectData(href: string): CmsProjectData {
  const { projects } = useProjectsQuery();

  const entry = projects.find(p => p.project_item?.href === href);

  const raw = entry;

  // ── Hero ──────────────────────────────────────────────────────────────
  const heroTitle    = raw?.project_intro?.title       ?? undefined;
  const heroSubtitle = raw?.project_intro?.description ?? undefined;
  const heroBgImage  = strapiUrl(raw?.project_intro?.leftImage?.url);

  // ── Meta ──────────────────────────────────────────────────────────────
  const metaFields = (raw?.projectMeta?.project_meta ?? [])
    .map(f => ({ label: f.label ?? '', value: f.value ?? '' }))
    .filter(f => f.label);

  const metaImages = raw?.projectMeta?.image ?? [];
  const metaImage  = metaImages.length > 0 ? strapiUrl(metaImages[0].image?.url) : undefined;

  // ── Description ───────────────────────────────────────────────────────
  const descText       = raw?.projectDescription?.description ?? undefined;
  const descImageLeft  = strapiUrl(raw?.projectDescription?.leftImage?.url);
  const descImageRight = strapiUrl(raw?.projectDescription?.rightImage?.url);
  const descImageFull  = strapiUrl(raw?.projectDescription?.imageFull?.url);

  // ── Objective ─────────────────────────────────────────────────────────
  const objectiveText  = raw?.projectObjectives?.quote ?? undefined;
  const objectiveImage = strapiUrl(raw?.projectObjectives?.image?.url);

  // ── Key Features ──────────────────────────────────────────────────────
  const features = (raw?.KeyFeatures ?? [] as ProjectKeyFeatureData[])
    .map(f => ({
      icon:        toIcon(f.Icon),
      title:       f.title       ?? '',
      description: f.description ?? '',
    }))
    .filter(f => f.title);

  // ── Gallery ───────────────────────────────────────────────────────────
  const galleryLarge = strapiUrl(raw?.projectGallery?.ImageLarge?.url);
  const galleryLeft  = strapiUrl(raw?.projectGallery?.imageLeft?.url);
  const galleryRight = strapiUrl(raw?.projectGallery?.imageRight?.url);

  return {
    heroTitle, heroSubtitle, heroBgImage,
    metaFields, metaImage,
    descText, descImageLeft, descImageRight, descImageFull,
    objectiveText, objectiveImage,
    features,
    galleryLarge, galleryLeft, galleryRight,
  };
}
