/**
 * useProjectData — finds a single project from the CMS array by its href,
 * then extracts each section's data so individual pages can use it cleanly.
 *
 * Image fields return `undefined` when not provided by the CMS — the
 * consuming components hide themselves when their image prop is absent.
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

function normalizeText(value?: string | null): string | undefined {
  const text = value?.trim();
  return text ? text : undefined;
}

function normalizeImage(value?: string | null): string | undefined {
  const text = value?.trim();
  return text ? strapiUrl(text) : undefined;
}

function normalizeMetaFields(rawFields?: Array<{ label?: string; value?: string }> | null): { label: string; value: string }[] {
  return (rawFields ?? [])
    .map((f) => ({ label: normalizeText(f.label) ?? '', value: normalizeText(f.value) ?? '' }))
    .filter((f) => f.label && f.value);
}

function normalizeFeatures(rawFeatures?: Array<Pick<ProjectKeyFeatureData, 'title' | 'description' | 'Icon'>> | null) {
  return (rawFeatures ?? [])
    .map((f) => ({
      icon: toIcon(f.Icon),
      title: normalizeText(f.title) ?? '',
      description: normalizeText(f.description) ?? '',
    }))
    .filter((f) => f.title && f.description);
}

export interface CmsProjectData {
  heroTitle?: string;
  heroSubtitle?: string;
  /** undefined when not in CMS — hero renders without a background image */
  heroBgImage?: string;
  metaFields: { label: string; value: string }[];
  /** undefined when not in CMS — showcase area is hidden */
  metaImage?: string;
  descText?: string;
  /** undefined when not in CMS — image slot is hidden */
  descImageLeft?: string;
  /** undefined when not in CMS — image slot is hidden */
  descImageRight?: string;
  /** undefined when not in CMS — full-width image is hidden */
  descImageFull?: string;
  objectiveText?: string;
  /** undefined when not in CMS — objective image is hidden */
  objectiveImage?: string;
  features: { icon: IconName; title: string; description: string }[];
  /** undefined when not in CMS — gallery large slot is hidden */
  galleryLarge?: string;
  /** undefined when not in CMS — gallery bottom-left slot is hidden */
  galleryLeft?: string;
  /** undefined when not in CMS — gallery bottom-right slot is hidden */
  galleryRight?: string;
}

export function useProjectData(href: string): CmsProjectData {


  const { projects } = useProjectsQuery();
  const entry = projects.find((p) => normalizeText(p.project_item?.href) === href);

  

  console.log("entry", projects);

  // ── Hero ──────────────────────────────────────────────────────────────
  const heroTitle    = normalizeText(entry?.project_intro?.title);
  const heroSubtitle = normalizeText(entry?.project_intro?.description);
  // project_intro.leftImage is the primary hero bg; fall back to the card
  // image (project_item.image) which is always populated for every project.
  const heroBgImage  =
    normalizeImage(entry?.project_intro?.leftImage?.url) ??
    normalizeImage(entry?.project_item?.image?.url);




  // ── Meta ──────────────────────────────────────────────────────────────
  const rawMetaFields = Array.isArray(entry?.projectMeta?.project_meta)
    ? entry?.projectMeta?.project_meta ?? []
    : [];
  const metaFields = normalizeMetaFields(rawMetaFields);

  const metaImagesRaw = entry?.projectMeta?.image;
  const metaImages    = Array.isArray(metaImagesRaw) ? metaImagesRaw : [];
  const metaImage     = metaImages.length > 0
    ? normalizeImage(metaImages[0].image?.url)
    : undefined;

  // ── Description ───────────────────────────────────────────────────────
  const descText       = normalizeText(entry?.projectDescription?.description);
  const descImageLeft  = normalizeImage(entry?.projectDescription?.leftImage?.url);
  const descImageRight = normalizeImage(entry?.projectDescription?.rightImage?.url);
  const descImageFull  = normalizeImage(entry?.projectDescription?.imageFull?.url);

  // ── Objective ─────────────────────────────────────────────────────────
  const objectiveText  = normalizeText(entry?.projectObjectives?.quote);
  const objectiveImage = normalizeImage(entry?.projectObjectives?.image?.url);

  // ── Key Features ──────────────────────────────────────────────────────
  const rawFeatures = Array.isArray(entry?.KeyFeatures) ? entry.KeyFeatures : [];
  const features    = normalizeFeatures(rawFeatures);

  // ── Gallery ───────────────────────────────────────────────────────────
  const galleryLarge = normalizeImage(entry?.projectGallery?.ImageLarge?.url);
  const galleryLeft  = normalizeImage(entry?.projectGallery?.imageLeft?.url);
  const galleryRight = normalizeImage(entry?.projectGallery?.imageRight?.url);

  return {
    heroTitle,
    heroSubtitle,
    heroBgImage,
    metaFields,
    metaImage,
    descText,
    descImageLeft,
    descImageRight,
    descImageFull,
    objectiveText,
    objectiveImage,
    features,
    galleryLarge,
    galleryLeft,
    galleryRight,
  };
}
