/**
 * useServiceData — finds a single service by href and extracts detail fields.
 *
 * Usage:
 *   const svc = useServiceData('/services/land-surveying');
 *   svc.title ?? 'Land Surveying'
 */
import { useServicesQuery } from '../../../hooks/useServicesQuery';
import { strapiUrl } from '../../../services/queries/serviceQuery';
import type { IconName } from '../../Project/sub-pages/ProjectKeyFeatures';

const ICON_MAP: Record<string, IconName> = {
  geo: 'geo', map: 'map', globe: 'globe', monitor: 'monitor', database: 'database',
  shield: 'shield', chart: 'chart', video: 'video', emergency: 'emergency',
  realtime: 'realtime', collaboration: 'collaboration', mobile: 'mobile',
};
function toIcon(raw?: string): IconName {
  return ICON_MAP[(raw ?? '').toLowerCase()] ?? 'globe';
}

export interface CmsServiceData {
  // Hero
  title?:         string;
  description?:   string;
  heroImage?:     string;
  bottomText?:    string;
  // Stats
  stats:          { value: string; label: string }[];
  // Features
  features:       { icon: IconName; title: string; description: string }[];
  // Quote
  quoteText?:     string;
  quoteImage?:    string;
  // Showcase images (Feature_Image array + feature_images array merged)
  showcaseImages: string[];
}

export function useServiceData(href: string): CmsServiceData {
  const { services } = useServicesQuery();
  const entry = services.find(s => s.intro?.href === href);
  const d     = entry?.details;

  const stats = (Array.isArray(d?.Stats) ? d!.Stats! : [])
    .map(s => ({ value: s.value ?? '', label: s.label ?? '' }))
    .filter(s => s.label);

  const features = (Array.isArray(d?.KeyFeatures) ? d!.KeyFeatures! : [])
    .map(f => ({ icon: toIcon(f.Icon), title: f.title ?? '', description: f.description ?? '' }))
    .filter(f => f.title);

  // Merge Feature_Image[].image.url + feature_images[].url
  const fi1 = (Array.isArray(d?.Feature_Image) ? d!.Feature_Image! : [])
    .map(fi => strapiUrl(fi.image?.url)).filter(Boolean) as string[];
  const fi2 = (Array.isArray(d?.feature_images) ? d!.feature_images! : [])
    .map(fi => strapiUrl(fi?.url)).filter(Boolean) as string[];
  const showcaseImages = [...fi1, ...fi2];

  return {
    title:          d?.title          ?? undefined,
    description:    d?.top_description ?? undefined,
    heroImage:      strapiUrl(d?.image?.url),
    bottomText:     d?.bottom_text    ?? undefined,
    stats,
    features,
    quoteText:      d?.Service_quote?.quote ?? undefined,
    quoteImage:     strapiUrl(d?.Service_quote?.image?.url),
    showcaseImages,
  };
}
