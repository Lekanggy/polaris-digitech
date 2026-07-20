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

import lad from '../../../assets/lad.png';
import alBeach from '../../../assets/al-beach.png';
import asm1 from '../../../assets/asm1.png';
import asm2 from '../../../assets/asm2.png';
import asm3 from '../../../assets/asm3.png';
import asm4 from '../../../assets/asm4.png';
import gv1 from '../../../assets/gv1.png';
import gv2 from '../../../assets/gv2.png';
import gv3 from '../../../assets/gv3.png';
import gv4 from '../../../assets/gv4.png';
import gv5 from '../../../assets/gv5.png';
import lag1 from '../../../assets/lag1.png';
import lag2 from '../../../assets/lag2.png';
import lag3 from '../../../assets/lag3.png';
import lag4 from '../../../assets/lag4.png';
import lag5 from '../../../assets/lag5.png';
import lag6 from '../../../assets/lag6.png';
import lag7 from '../../../assets/lag7.png';
import lag8 from '../../../assets/lag8.png';
import lag9 from '../../../assets/lag9.png';
import mtn1 from '../../../assets/mtn1.png';
import mtn2 from '../../../assets/mtn2.png';
import mtn3 from '../../../assets/mtn3.png';
import mtn4 from '../../../assets/mtn4.png';
import mtn5 from '../../../assets/mtn5.png';
import mtn6 from '../../../assets/mtn6.png';
import mtn7 from '../../../assets/mtn7.png';
import mtn8 from '../../../assets/mtn8.png';
import mtn9 from '../../../assets/mtn9.png';
import geo1 from '../../../assets/geo1.jpg';
import geo2 from '../../../assets/geo2.png';
import geo3 from '../../../assets/geo3.jpg';
import geo4 from '../../../assets/geo4.png';
import geo5 from '../../../assets/geo5.jpg';
import prk1 from '../../../assets/prk1.png';
import prk2 from '../../../assets/prk2.png';
import prk3 from '../../../assets/prk3.png';
import prk4 from '../../../assets/prk4.png';
import project3 from '../../../assets/project3.png';
import geo6 from '../../../assets/geo6.png';
import geo7 from '../../../assets/geo7.png';

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
  heroBgImage?: string;
  metaFields: { label: string; value: string }[];
  metaImage?: string;
  descText?: string;
  descImageLeft?: string;
  descImageRight?: string;
  descImageFull?: string;
  objectiveText?: string;
  objectiveImage?: string;
  features: { icon: IconName; title: string; description: string }[];
  galleryLarge?: string;
  galleryLeft?: string;
  galleryRight?: string;
}

const FALLBACK_PROJECTS: Record<string, Partial<CmsProjectData>> = {
  '/projects/lag-ferry': {
    heroTitle: 'Lag Ferry',
    heroSubtitle: 'Deployment of Geo-enabled ICT Surveillance Centre for Boats, Ships in Lagos state.',
    heroBgImage: lag1,
    metaFields: [{ label: 'Industry', value: 'Government' }, { label: 'Service', value: 'Geo-enabled ICT Surveillance Centre' }, { label: 'Year', value: '2023' }, { label: 'Website', value: '-' }],
    metaImage: lag7,
    descText: 'A collaboration between the Lagos State Ferry Service and Polaris Digitech Limited to deploy a geo-enabled ICT surveillance center integrating CCTV, AIS, and geo-fencing to oversee boat and ship operations across Lagos State waters.',
    descImageLeft: lag4,
    descImageRight: lag6,
    descImageFull: lag5,
    objectiveText: 'modernize the water transport sector by enhancing the safety and security of passengers and crew, while providing a real-time data pipeline for maritime stakeholders.',
    objectiveImage: lag9,
    features: [
      { icon: 'geo', title: 'Geo-Enabled', description: 'LAGFerry has a location-based system that allows it to collect and analyse data from various sources and present it on a map.' },
      { icon: 'video', title: 'Video Surveillance', description: 'A network of video cameras strategically placed in different areas to monitor activities and alert authorities.' },
      { icon: 'emergency', title: 'Emergency Response', description: 'The surveillance center can quickly send alerts to relevant authorities, including police, fire department, and ambulance services.' },
      { icon: 'realtime', title: 'Real-Time Data Collection', description: 'LAGFerry collects and analyses real-time data from various sources to provide timely and accurate information.' },
      { icon: 'collaboration', title: 'Collaboration', description: 'LAGFerry promotes collaboration among different agencies to enhance security and emergency response.' },
      { icon: 'mobile', title: 'Mobile App', description: 'The centre has a mobile app that allows citizens to report suspicious activities and receive alerts.' },
    ],
    galleryLarge: lag2,
    galleryLeft: lag8,
    galleryRight: lag3,
  },
  '/projects/risk-geo-platform': {
    heroTitle: 'The Risk Geo-Platform',
    heroSubtitle: 'A tool for AXA Mansard to assess assets for insurance by current and potential customers.',
    heroBgImage: geo1,
    metaFields: [{ label: 'Industry', value: 'Insurance' }, { label: 'Service', value: 'Risk Geoplatform' }, { label: 'Year', value: '2016 - 2022' }, { label: 'Website', value: '-' }],
    metaImage: prk3,
    descText: 'The GEO-Risk Platform is a specialized geospatial tool developed for AXA Mansard in Lagos by Polaris Digitech Limited to evaluate and analyze assets within a geographic context to assist in insurance underwriting and risk assessment.',
    descImageLeft: prk4,
    descImageRight: prk2,
    descImageFull: prk1,
    objectiveText: 'build a platform that enables AXA Mansard to accurately evaluate both prospective and existing assets, ensuring customers are placed on the correct policies.',
    objectiveImage: geo4,
    features: [
      { icon: 'database', title: 'Centralized Repository', description: 'High-quality address data validates addresses in real-time, ensuring they are accurate and complete.' },
      { icon: 'globe', title: 'Geospatial analysis', description: 'The portal standardizes address data to conform to globally recognized formats.' },
      { icon: 'monitor', title: 'Real-time Monitoring', description: 'Geocoding technology assigns coordinates to each address, allowing businesses to plot locations on a map.' },
      { icon: 'geo', title: 'Customizable Alerts', description: 'The portal cleanses address data by removing duplicates, incorrect data, and incomplete records.' },
      { icon: 'collaboration', title: 'Collaboration Tools', description: 'The portal enriches address data by adding additional information such as demographic and property data.' },
    ],
    galleryLarge: geo2,
    galleryLeft: geo5,
    galleryRight: geo3,
  },
  '/projects/mtn-coverage-locator': {
    heroTitle: 'MTN Coverage Locator',
    heroSubtitle: 'The MTNN Coverage Locator helps users find network coverage and report weak areas, boosting 5G sales and adoption.',
    heroBgImage: mtn1,
    metaFields: [{ label: 'Industry', value: 'Telecommunication' }, { label: 'Service', value: 'EGIS & Coverage Locator' }, { label: 'Year', value: '2023 (v3.0)' }, { label: 'Website', value: 'coverage.mtn.ng' }],
    metaImage: mtn8,
    descText: 'The Coverage Locator Application developed by PDL for MTN Nigeria serves as a web-based map interface providing real-time visibility into network signal strength and availability across Nigeria.',
    descImageLeft: mtn4,
    descImageRight: mtn3,
    descImageFull: mtn6,
    objectiveText: 'enhance customer satisfaction and service delivery by providing transparent network information, driving 5G adoption, and assisting the network planning team in identifying high-value clusters for broadband expansion.',
    objectiveImage: mtn5,
    features: [
      { icon: 'geo', title: 'Location-based Intelligence', description: "MTNN coverage locator uses GPS to pinpoint the customer's location and show the coverage in that area." },
      { icon: 'globe', title: 'Map View', description: 'The application provides a map view showing the signal strength of all MTNN base stations in your area.' },
      { icon: 'monitor', title: 'Network Strength', description: "The application provides information about the strength of the network signal in the customer's area." },
      { icon: 'geo', title: 'Coverage Status', description: "The application shows the current status of the network coverage in the customer's area." },
      { icon: 'globe', title: 'Report a Problem', description: 'The application allows customers to report any network issues they encounter in their area.' },
      { icon: 'globe', title: 'Walk-in Stores', description: "Shows all the various MTN walk-in stores available in the country based on the user's location." },
    ],
    galleryLarge: mtn7,
    galleryLeft: mtn2,
    galleryRight: mtn9,
  },
  '/projects/asset-mapping': {
    heroTitle: 'Asset Mapping and Customer Enumeration',
    heroSubtitle: 'A comprehensive geospatial data collection and field enumeration project conducted for Eko Disco in Lagos.',
    heroBgImage: asm1,
    metaFields: [{ label: 'Industry', value: 'Energy / Utilities' }, { label: 'Service', value: 'Asset Mapping & Customer Enumeration' }, { label: 'Year', value: '2020' }, { label: 'Website', value: '-' }],
    metaImage: asm3,
    descText: 'A comprehensive geospatial data collection and field enumeration project conducted for Eko Disco in Lagos. The project involves identifying, locating, and mapping physical electrical assets (such as transformers and poles) and linking them directly to the customers they serve.',
    descImageLeft: asm2,
    descImageRight: asm4,
    objectiveText: 'ascertain the exact number of customers connected to each specific asset within the Eko Disco network, serving as a critical prerequisite for the deployment of their SCADA project.',
  },
  '/projects/land-parcel': {
    heroTitle: 'Land Parcel Information System',
    heroSubtitle: 'A state-of-the-art, automated land management and physical planning system for the Osun State Ministry of Land.',
    heroBgImage: lad,
    metaFields: [{ label: 'Industry', value: 'Government' }, { label: 'Service', value: 'Land Information System' }, { label: 'Year', value: '2020' }, { label: 'Website', value: '-' }],
    metaImage: lad,
    descText: 'A state-of-the-art, automated land management and physical planning system developed for the Osun State Ministry of Land and Physical Planning by Polaris Digitech Limited.',
    descImageLeft: lad,
    descImageRight: lad,
    descImageFull: lad,
    objectiveText: 'provide a user-friendly application that automates the Ministry\'s daily activities, enhances operational efficiency, and ensures accurate, up-to-date land ownership and physical planning data.',
  },
  '/projects/alma-beach': {
    heroTitle: 'Alma Beach',
    heroSubtitle: 'Evaluate survey plan and set out the proposed coastal road right of way',
    heroBgImage: alBeach,
    metaFields: [{ label: 'Industry', value: 'Real Estate' }, { label: 'Service', value: 'Land Surveying' }, { label: 'Client', value: 'ALMA Beach Estate' }, { label: 'Website', value: '-' }],
    metaImage: alBeach,
    descText: 'Alma Beach Estate is a high-end beachfront development in the Elegushi area of Lagos. Polaris Digitech Limited was engaged to evaluate the survey plan and set out the proposed coastal road right of way using advanced surveying techniques.',
    descImageLeft: alBeach,
    descImageRight: alBeach,
    objectiveText: 'evaluate the survey plan and set out the proposed coastal road right of way, accurately measuring and marking out the boundaries to ensure the road is located in the correct position and is of the required width.',
    objectiveImage: alBeach,
  },
  '/projects/googl-street-view': {
    heroTitle: 'Google Street View',
    heroSubtitle: 'Collection of street names, environmental features, and building/house/structure details to aid remote view of locations',
    heroBgImage: gv1,
    metaFields: [{ label: 'Industry', value: 'Technology' }, { label: 'Service', value: 'Street View Data Collection' }, { label: 'Year', value: '2016 - 2022' }, { label: 'Website', value: '-' }],
    metaImage: gv2,
    descText: 'A large-scale geospatial data acquisition project where Polaris Digitech Limited serves as a technical partner for Google in Nigeria, deploying specialized vehicles and cameras to capture 360-degree panoramic imagery across Southern Nigeria.',
    descImageLeft: gv3,
    descImageRight: gv4,
    descImageFull: gv5,
    objectiveText: 'provide Google Maps users with a "remote view" of locations, allowing for an immersive and interactive experience that aids navigation and improves location visibility for businesses.',
    objectiveImage: gv5,
  },
  '/projects/thematic-mapping': {
    heroTitle: 'Thematic Mapping of Restricted Areas for Mining',
    heroSubtitle: 'Production of Thematic Mapping of Areas Restricted From Mining Activities in Nigeria for Integration into the Nigeria Mining Cadastre Digital Database',
    heroBgImage: project3,
    metaFields: [{ label: 'Industry', value: 'Mining & Natural Resources' }, { label: 'Service', value: 'Geospatial Data Acquisition' }, { label: 'Client', value: 'Nigeria Mining Cadastre Office' }, { label: 'Website', value: '-' }],
    metaImage: geo2,
    descText: 'Polaris Digitech Limited was engaged to produce comprehensive thematic maps of areas restricted and protected from mining activities across Nigeria, designed for seamless integration into the Nigeria Mining Cadastre Digital Database.',
    descImageLeft: geo4,
    descImageRight: geo6,
    descImageFull: geo7,
    objectiveText: 'delineate and document all areas restricted from mining activities in Nigeria, producing accurate thematic maps that support regulatory compliance, environmental protection, and the modernisation of the Nigeria Mining Cadastre Digital Database.',
    objectiveImage: geo7,
  },
};

export function useProjectData(href: string): CmsProjectData {
  const { projects } = useProjectsQuery();
  const entry = projects.find((p) => normalizeText(p.project_item?.href) === href);
  const raw = entry;
  const fallback = FALLBACK_PROJECTS[href] ?? {};

  const heroTitle = normalizeText(raw?.project_intro?.title) ?? fallback.heroTitle;
  const heroSubtitle = normalizeText(raw?.project_intro?.description) ?? fallback.heroSubtitle;
  const heroBgImage = normalizeImage(raw?.project_intro?.leftImage?.url) ?? fallback.heroBgImage;

  const rawMetaFields = Array.isArray(raw?.projectMeta?.project_meta) ? raw.projectMeta?.project_meta ?? [] : [];
  const metaFields = normalizeMetaFields(rawMetaFields);
  const metaFieldsFinal = metaFields.length > 0 ? metaFields : (fallback.metaFields ?? []);

  const metaImagesRaw = raw?.projectMeta?.image;
  const metaImages = Array.isArray(metaImagesRaw) ? metaImagesRaw : [];
  const metaImage = (metaImages.length > 0 ? normalizeImage(metaImages[0].image?.url) : undefined) ?? fallback.metaImage;

  const descText = normalizeText(raw?.projectDescription?.description) ?? fallback.descText;
  const descImageLeft = normalizeImage(raw?.projectDescription?.leftImage?.url) ?? fallback.descImageLeft;
  const descImageRight = normalizeImage(raw?.projectDescription?.rightImage?.url) ?? fallback.descImageRight;
  const descImageFull = normalizeImage(raw?.projectDescription?.imageFull?.url) ?? fallback.descImageFull;

  const objectiveText = normalizeText(raw?.projectObjectives?.quote) ?? fallback.objectiveText;
  const objectiveImage = normalizeImage(raw?.projectObjectives?.image?.url) ?? fallback.objectiveImage;

  const rawFeatures = Array.isArray(raw?.KeyFeatures) ? raw.KeyFeatures : [];
  const features = normalizeFeatures(rawFeatures);
  const featuresFinal = features.length > 0 ? features : (fallback.features ?? []);

  const galleryLarge = normalizeImage(raw?.projectGallery?.ImageLarge?.url) ?? fallback.galleryLarge;
  const galleryLeft = normalizeImage(raw?.projectGallery?.imageLeft?.url) ?? fallback.galleryLeft;
  const galleryRight = normalizeImage(raw?.projectGallery?.imageRight?.url) ?? fallback.galleryRight;

  return {
    heroTitle,
    heroSubtitle,
    heroBgImage,
    metaFields: metaFieldsFinal,
    metaImage,
    descText,
    descImageLeft,
    descImageRight,
    descImageFull,
    objectiveText,
    objectiveImage,
    features: featuresFinal,
    galleryLarge,
    galleryLeft,
    galleryRight,
  };
}
