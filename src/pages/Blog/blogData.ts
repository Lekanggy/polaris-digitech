/**
 * Shared blog article data.
 */
import blog1  from '../../assets/blog1.png';
import blog2  from '../../assets/blog2.png';
import blog3  from '../../assets/blog3.png';
import blog4  from '../../assets/blog4.png';
import blog5  from '../../assets/blog5.png';
import blog6  from '../../assets/blog6.png';
import blog7  from '../../assets/blog7.png';
import blog8  from '../../assets/blog8.png';
import blog9  from '../../assets/blog9.png';
import blog10 from '../../assets/blog10.png';
import blog11 from '../../assets/blog11.png';

// ── Types ─────────────────────────────────────────────────────────────────

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
  /** Optional inline image shown after the first paragraph */
  image?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  author?: string;
  authorAvatar?: string;
  /** Full article body — used on the detail page */
  sections?: BlogSection[];
}

// ── Featured article ──────────────────────────────────────────────────────

export const FEATURED_ARTICLE: BlogArticle = {
  id: 'power-of-gis',
  title: 'The Power of GIS: Leveraging its Advantages for Your Business',
  description:
    "Geospatial services refer to a wide range of services that utilize geospatial data, technology, and analysis to understand, manage, and visualize information related to the Earth's surface and its features. These services play a crucial role in various industries and applications.",
  date: 'December 12, 2025',
  category: 'GIS',
  image: blog1,
  author: 'Adebisi Adenakan',
  authorAvatar: '',
  sections: [
    {
      id: 'intro',
      heading: '',
      paragraphs: [
        "Just as the internet is changing the way we communicate and interact, GIS is quietly transforming the way businesses operate. From real estate to retail, from logistics to agriculture, GIS technology is helping companies make smarter decisions, optimize operations, and gain a competitive edge. In this article, we'll explore the power of GIS and how it can benefit your business.",
      ],
    },
    {
      id: 'benefits',
      heading: 'Benefits Of GIS For Businesses',
      paragraphs: [
        "GIS provides businesses with a powerful tool for visualizing, analyzing, and interpreting data to understand relationships, patterns, and trends. By integrating various data sources into a single platform, GIS enables businesses to make more informed decisions, improve operational efficiency, and enhance customer experiences.",
        "Businesses can leverage GIS to identify new market opportunities, optimize supply chains, and improve resource allocation. By analyzing spatial data, companies can gain insights into customer behavior, market trends, and competitive landscapes that would be difficult to obtain through traditional data analysis methods.",
      ],
      image: blog8,
    },
    {
      id: 'applications',
      heading: 'GIS Applications In Various Industries',
      paragraphs: [
        "GIS technology is being used across a wide range of industries to solve complex problems and drive innovation. In the retail sector, GIS is used to analyze customer demographics, identify optimal store locations, and optimize delivery routes. In the healthcare industry, GIS is used to track disease outbreaks, plan emergency response, and analyze health disparities.",
        "In the agriculture sector, GIS is used to monitor crop health, optimize irrigation, and plan land use. In the transportation industry, GIS is used to optimize route planning, monitor traffic conditions, and manage infrastructure assets. The applications of GIS are virtually limitless, and businesses in every industry can benefit from its capabilities.",
      ],
      image: blog9,
    },
    {
      id: 'data-sources',
      heading: 'GIS Data Sources And Collection Methods',
      paragraphs: [
        "GIS relies on a variety of data sources and collection methods to build comprehensive spatial databases. Remote sensing technologies, such as satellite imagery and aerial photography, provide valuable data for mapping land cover, monitoring environmental changes, and assessing natural disasters.",
        "Ground-based surveys, GPS technology, and mobile data collection tools are also used to gather precise location data for a wide range of applications. By combining data from multiple sources, GIS analysts can create detailed maps and models that provide valuable insights into complex spatial relationships.",
      ],
    },
    {
      id: 'tools',
      heading: 'GIS Software And Tools',
      paragraphs: [
        "There are a wide variety of GIS software and tools available to businesses, ranging from open-source platforms to enterprise-grade solutions. Popular GIS software includes ArcGIS, QGIS, and Google Earth Engine, each offering a range of features and capabilities for spatial analysis, data visualization, and map creation.",
        "In addition to desktop GIS software, there are also a growing number of cloud-based GIS platforms that enable businesses to access and analyze spatial data from anywhere, at any time. These platforms offer scalable, cost-effective solutions for businesses of all sizes, making GIS technology more accessible than ever before.",
      ],
      image: blog10,
    },
    {
      id: 'mapping',
      heading: 'GIS Mapping And Analysis',
      paragraphs: [
        "GIS mapping and analysis are at the core of what makes GIS such a powerful tool for businesses. By creating detailed maps and spatial models, businesses can visualize complex data in a way that is easy to understand and interpret. GIS analysis tools enable businesses to identify patterns, trends, and relationships in their data that would be difficult to detect through traditional data analysis methods.",
        "Whether you're analyzing customer demographics, monitoring environmental changes, or optimizing supply chain logistics, GIS mapping and analysis can provide valuable insights that drive better decision-making and improve business outcomes. With the right GIS tools and expertise, businesses can unlock the full potential of their spatial data and gain a competitive advantage in their industry.",
      ],
      image: blog11,
    },
  ],
};

// ── Article grid list (each with full body sections) ─────────────────────

export const ARTICLES: BlogArticle[] = [
  // ── 1. Google Workspace for Business ─────────────────────────────────────
  {
    id: 'google-workspace-business',
    title: 'Google Workspace for Business',
    description:
      'Polaris Digitech Limited offers a platform for integrating cloud-native apps with Google Workspace for seamless business collaboration.',
    date: 'December 11, 2025',
    category: 'Technology',
    image: blog2,
    author: 'Polaris Team',
    authorAvatar: '',
    sections: [
      {
        id: 'intro',
        heading: '',
        paragraphs: [
          "Google Workspace for Business is a comprehensive suite of cloud-based productivity and collaboration tools designed to help organizations of all sizes work smarter and more efficiently. From Gmail and Google Drive to Meet and Docs, the platform brings everything a modern business needs into one integrated environment.",
        ],
      },
      {
        id: 'what-is-workspace',
        heading: 'What Is Google Workspace for Business?',
        paragraphs: [
          "Google Workspace for Business is Google's premium offering for organizations that need enterprise-grade tools with advanced security, administration, and collaboration features. It replaces the older G Suite brand and brings together communication, storage, and productivity apps under a single subscription.",
          "Polaris Digitech Limited is an authorized Google Workspace reseller and implementation partner, helping businesses in Nigeria and across Africa migrate to and maximize the platform.",
        ],
        image: blog2,
      },
      {
        id: 'key-features',
        heading: 'Key Features And Benefits',
        paragraphs: [
          "Google Workspace includes Gmail with custom domain email, Google Meet for video conferencing, Google Drive for cloud storage, and the full suite of Docs, Sheets, and Slides for real-time document collaboration. All tools are deeply integrated, meaning you can start a video call directly from a document or schedule a meeting from your inbox.",
          "For businesses, the admin console provides centralized control over user accounts, security policies, and data governance. Advanced features like Vault for eDiscovery, endpoint management, and audit logs give IT teams the visibility they need to keep the organization secure.",
        ],
      },
      {
        id: 'why-polaris',
        heading: 'Why Choose Polaris Digitech For Your Workspace Deployment',
        paragraphs: [
          "As a certified Google partner, Polaris Digitech provides end-to-end Google Workspace deployment — from license procurement and domain setup to user migration, training, and ongoing technical support. Our team ensures a smooth transition with minimal disruption to your operations.",
          "We tailor the deployment to your organization's specific needs, configuring security settings, shared drives, and collaboration workflows that align with how your teams actually work.",
        ],
        image: blog8,
      },
      {
        id: 'getting-started',
        heading: 'Getting Started',
        paragraphs: [
          "Getting started with Google Workspace for Business through Polaris Digitech is straightforward. Contact our team for a needs assessment, and we'll recommend the right plan — Business Starter, Business Standard, Business Plus, or Enterprise — based on your team size, storage requirements, and security needs.",
          "Once onboarded, your team will have access to world-class productivity tools backed by Google's infrastructure and Polaris Digitech's local support expertise.",
        ],
      },
    ],
  },

  // ── 2. Google Workspace for Education ────────────────────────────────────
  {
    id: 'google-workspace-education',
    title: 'Google Workspace for Education',
    description:
      'Google Workspace for Education is a platform that provides educational tools and services to students and educators worldwide.',
    date: 'December 11, 2025',
    category: 'Technology',
    image: blog3,
    author: 'Polaris Team',
    authorAvatar: '',
    sections: [
      {
        id: 'intro',
        heading: '',
        paragraphs: [
          "Google Workspace for Education is a purpose-built suite of tools that empowers schools, universities, and educational institutions to deliver better learning experiences. It provides students and educators with the collaboration and communication tools they need — all in a safe, managed environment.",
        ],
      },
      {
        id: 'overview',
        heading: 'Overview Of The Platform',
        paragraphs: [
          "The platform includes Google Classroom, Gmail, Meet, Drive, Docs, Sheets, Slides, and Forms — all configured with education-specific privacy and safety controls. Google Classroom serves as the central hub where teachers can create assignments, share resources, and track student progress.",
          "Google Workspace for Education is available in four editions: Education Fundamentals (free), Education Standard, Teaching and Learning Upgrade, and Education Plus — each offering progressively more advanced features for larger or more demanding institutions.",
        ],
        image: blog3,
      },
      {
        id: 'benefits-students',
        heading: 'Benefits For Students',
        paragraphs: [
          "Students gain access to a consistent set of tools across devices — whether they're on a Chromebook, tablet, or smartphone. Real-time collaboration on Docs and Slides means group projects no longer require everyone to be in the same room, and Google Meet enables virtual classes and office hours.",
          "Google Drive provides ample cloud storage so students never lose their work, and the integration with Classroom means assignments, feedback, and grades are all in one place.",
        ],
      },
      {
        id: 'benefits-educators',
        heading: 'Benefits For Educators',
        paragraphs: [
          "Teachers can create and distribute assignments, collect submissions, and provide feedback — all within Google Classroom. Forms makes it easy to build quizzes with automatic grading, freeing up time for more meaningful instruction.",
          "The admin console gives IT administrators full control over user accounts, app access, and security settings, ensuring the platform remains safe and compliant with educational data privacy requirements.",
        ],
        image: blog9,
      },
      {
        id: 'polaris-support',
        heading: 'Polaris Digitech Education Support',
        paragraphs: [
          "Polaris Digitech helps educational institutions in Nigeria deploy and manage Google Workspace for Education. Our team handles domain verification, user provisioning, and staff training to ensure a smooth rollout.",
          "We also provide ongoing support and professional development workshops to help educators get the most out of the platform's features for their specific teaching contexts.",
        ],
      },
    ],
  },

  // ── 3. Google Cloud Platform ──────────────────────────────────────────────
  {
    id: 'google-cloud-platform',
    title: 'Google Cloud Platform',
    description:
      'Cloud computing provides on-demand resources like hardware and software accessible via the internet, enabling scalable and flexible solutions.',
    date: 'December 11, 2025',
    category: 'Technology',
    image: blog4,
    author: 'Polaris Team',
    authorAvatar: '',
    sections: [
      {
        id: 'intro',
        heading: '',
        paragraphs: [
          "Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products. It offers a wide range of services including computing, storage, databases, machine learning, and networking — all accessible on demand over the internet.",
        ],
      },
      {
        id: 'what-is-gcp',
        heading: 'What Is Google Cloud Platform?',
        paragraphs: [
          "GCP provides infrastructure as a service (IaaS), platform as a service (PaaS), and serverless computing environments. Businesses can use GCP to host applications, store and analyze data, build machine learning models, and run virtually any workload without managing physical hardware.",
          "Key services include Compute Engine for virtual machines, Cloud Storage for object storage, BigQuery for data analytics, Cloud Run for containerized applications, and Vertex AI for machine learning workflows.",
        ],
        image: blog4,
      },
      {
        id: 'advantages',
        heading: 'Advantages Of Moving To GCP',
        paragraphs: [
          "One of the primary advantages of GCP is its global network infrastructure, which provides low-latency access to services from anywhere in the world. Google's network is one of the largest and most reliable in existence, ensuring high availability and performance for mission-critical applications.",
          "GCP's pay-as-you-go pricing model means businesses only pay for what they use, eliminating the need for large upfront capital expenditure on hardware. Automatic scaling ensures applications can handle traffic spikes without manual intervention.",
        ],
      },
      {
        id: 'security',
        heading: 'Security And Compliance',
        paragraphs: [
          "Google Cloud is built with security at its core. Data is encrypted at rest and in transit by default, and Google's security team monitors the infrastructure around the clock. GCP complies with a wide range of international standards including ISO 27001, SOC 2, and GDPR.",
          "Identity and Access Management (IAM) gives organizations granular control over who can access what resources, and Cloud Audit Logs provide a complete record of all activity for compliance and forensic purposes.",
        ],
        image: blog10,
      },
      {
        id: 'polaris-gcp',
        heading: 'Polaris Digitech And Google Cloud',
        paragraphs: [
          "Polaris Digitech is a Google Cloud partner with expertise in helping Nigerian businesses migrate workloads to GCP, architect cloud-native applications, and optimize their cloud spending. Our certified engineers guide clients through every stage of the cloud journey.",
          "Whether you're lifting and shifting existing applications or building new cloud-native solutions, our team provides the technical expertise and local support to make your GCP deployment a success.",
        ],
      },
    ],
  },

  // ── 4. Google Maps ────────────────────────────────────────────────────────
  {
    id: 'google-maps',
    title: 'Google Maps',
    description:
      'At Polaris Digitech Limited, we create software to analyse geospatial data and interpret spatial patterns for mapping and navigation.',
    date: 'December 11, 2025',
    category: 'GIS',
    image: blog5,
    author: 'Polaris Team',
    authorAvatar: '',
    sections: [
      {
        id: 'intro',
        heading: '',
        paragraphs: [
          "Google Maps is one of the most powerful and widely used mapping platforms in the world. Beyond consumer navigation, the Google Maps Platform provides a rich set of APIs and SDKs that developers and businesses can use to embed maps, geocoding, routing, and place data into their own applications.",
        ],
      },
      {
        id: 'maps-platform',
        heading: 'Google Maps Platform For Businesses',
        paragraphs: [
          "The Google Maps Platform consists of three product areas: Maps (for displaying maps and street view), Routes (for directions and distance calculations), and Places (for location search and place details). Together, these APIs enable businesses to build location-aware applications that serve millions of users.",
          "Common use cases include delivery tracking, store locator features, field service management, real estate search, and logistics optimization. Any application that needs to show, search, or route between locations can benefit from the Google Maps Platform.",
        ],
        image: blog5,
      },
      {
        id: 'polaris-maps',
        heading: 'How Polaris Digitech Uses Google Maps',
        paragraphs: [
          "At Polaris Digitech, we integrate Google Maps APIs into custom software solutions for our clients. From building address verification tools that validate customer locations in real time, to creating field data collection apps that capture GPS coordinates and display them on interactive maps, we leverage the full power of the platform.",
          "Our GIS team uses Google Maps alongside other geospatial tools to create comprehensive location intelligence solutions that help clients understand their geographic data and make better decisions.",
        ],
      },
      {
        id: 'street-view',
        heading: 'Street View And Imagery',
        paragraphs: [
          "Polaris Digitech has worked directly with Google on Street View data collection projects in Nigeria, capturing street-level imagery that enriches the Google Maps dataset for Nigerian cities and towns. This work improves navigation accuracy and provides valuable context for location-based services.",
          "Our team is equipped with the specialized cameras and data collection workflows required for Street View capture, and we have the expertise to process and submit imagery that meets Google's quality standards.",
        ],
        image: blog9,
      },
      {
        id: 'getting-started',
        heading: 'Getting Started With Google Maps Integration',
        paragraphs: [
          "If your business needs location functionality — whether it's showing your offices on a website, building a delivery tracking system, or creating a field data collection app — Polaris Digitech can help you integrate Google Maps into your solution.",
          "Contact our team to discuss your requirements, and we'll recommend the right APIs, estimate usage costs, and build the integration for you.",
        ],
      },
    ],
  },

  // ── 5. MapInfo ────────────────────────────────────────────────────────────
  {
    id: 'mapinfo',
    title: 'MapInfo',
    description:
      'At PDL, our experts leverage MapInfo for effective mapping and location analysis across various industries.',
    date: 'December 11, 2025',
    category: 'GIS',
    image: blog6,
    author: 'Polaris Team',
    authorAvatar: '',
    sections: [
      {
        id: 'intro',
        heading: '',
        paragraphs: [
          "MapInfo Pro is a powerful desktop GIS application developed by Precisely (formerly Pitney Bowes). It has been a cornerstone of the GIS industry for decades, providing professionals with the tools they need to visualize, analyze, and present geographic data in a meaningful way.",
        ],
      },
      {
        id: 'what-is-mapinfo',
        heading: 'What Is MapInfo Pro?',
        paragraphs: [
          "MapInfo Pro is a full-featured GIS platform that allows users to create maps, perform spatial analysis, and manage geographic databases. It supports a wide range of data formats and provides a rich set of analytical tools for understanding location-based patterns and relationships.",
          "The software is widely used in telecommunications, utilities, government, insurance, and retail — any industry where understanding the geographic distribution of assets, customers, or events is critical to decision-making.",
        ],
        image: blog6,
      },
      {
        id: 'capabilities',
        heading: 'Key Capabilities',
        paragraphs: [
          "MapInfo Pro's core capabilities include thematic mapping, which allows users to visualize data distributions using color, size, and symbol variations. Spatial queries enable users to find features that meet specific geographic criteria — for example, all customers within 5km of a store.",
          "The platform also supports network analysis for routing and service area calculations, raster analysis for working with satellite and aerial imagery, and 3D visualization for terrain and building models.",
        ],
      },
      {
        id: 'polaris-mapinfo',
        heading: 'Polaris Digitech And MapInfo',
        paragraphs: [
          "Polaris Digitech's GIS team has extensive experience with MapInfo Pro, using it for a wide range of client projects including network coverage analysis for telecommunications companies, land use mapping for government agencies, and customer territory management for insurance and financial services firms.",
          "We provide MapInfo licensing, implementation, training, and ongoing support to help our clients get the most out of this powerful platform.",
        ],
        image: blog11,
      },
      {
        id: 'training',
        heading: 'MapInfo Training And Support',
        paragraphs: [
          "Our training programs cover everything from MapInfo basics for new users to advanced spatial analysis techniques for experienced GIS professionals. We offer both classroom and on-site training, tailored to the specific workflows and data types used by each client.",
          "Post-training support ensures that your team can apply what they've learned to real projects, with our experts available to answer questions and troubleshoot issues as they arise.",
        ],
      },
    ],
  },

  // ── 6. High Resolution Imagery ────────────────────────────────────────────
  {
    id: 'high-resolution-imagery',
    title: 'High Resolution Imagery',
    description:
      'We offer satellite imagery and geospatial analytics for decision-makers needing precise remote views of our environment.',
    date: 'December 11, 2025',
    category: 'GIS',
    image: blog7,
    author: 'Polaris Team',
    authorAvatar: '',
    sections: [
      {
        id: 'intro',
        heading: '',
        paragraphs: [
          "High resolution satellite and aerial imagery has transformed the way organizations understand and monitor the physical world. From tracking urban development to assessing agricultural conditions, modern imagery products provide an unprecedented level of detail that enables better decisions across a wide range of industries.",
        ],
      },
      {
        id: 'what-is-hri',
        heading: 'What Is High Resolution Imagery?',
        paragraphs: [
          "High resolution imagery refers to satellite or aerial photographs with a ground sample distance (GSD) of 50cm or less — meaning each pixel in the image represents an area of 50cm × 50cm or smaller on the ground. At this resolution, individual vehicles, buildings, and even trees are clearly distinguishable.",
          "Leading providers of high resolution satellite imagery include Maxar (WorldView series), Airbus Defence & Space (Pléiades), and Planet Labs. Polaris Digitech works with these providers to source and deliver imagery products tailored to client requirements.",
        ],
        image: blog7,
      },
      {
        id: 'applications',
        heading: 'Applications Of High Resolution Imagery',
        paragraphs: [
          "High resolution imagery is used across a wide range of sectors. In urban planning, it enables city authorities to monitor construction activity, assess infrastructure conditions, and plan land use. In agriculture, it supports crop health monitoring, yield estimation, and irrigation management.",
          "For insurance and risk assessment, imagery provides an objective record of asset conditions before and after events such as floods or fires. In oil and gas, it supports pipeline monitoring and facility inspection. The applications are virtually limitless wherever a precise, up-to-date view of the physical world is needed.",
        ],
      },
      {
        id: 'polaris-imagery',
        heading: 'Polaris Digitech Imagery Services',
        paragraphs: [
          "Polaris Digitech provides end-to-end imagery services — from tasking satellites to capture new imagery of specific areas, to processing and analyzing the data to extract actionable insights. Our team of remote sensing specialists has the expertise to work with multispectral, panchromatic, and stereo imagery products.",
          "We also offer change detection analysis, which compares imagery from different dates to identify what has changed in an area — invaluable for monitoring construction, deforestation, or infrastructure development over time.",
        ],
        image: blog8,
      },
      {
        id: 'getting-imagery',
        heading: 'How To Access Imagery Through Polaris Digitech',
        paragraphs: [
          "To access high resolution imagery through Polaris Digitech, simply provide us with the area of interest, the required resolution, and the timeframe. We'll source the best available imagery from our network of providers and deliver it in the format that works best for your GIS or analysis workflow.",
          "For ongoing monitoring requirements, we can set up automated tasking and delivery pipelines that ensure you always have the latest imagery of your areas of interest.",
        ],
      },
    ],
  },
];

export const CATEGORIES = ['All', 'GIS', 'Technology', 'Surveying', 'Software'];

// ── CMS → BlogArticle normaliser ──────────────────────────────────────────
// Converts a raw API BlogPost into the BlogArticle shape used throughout the UI.
// Falls back gracefully when any field is missing.
import type { BlogPost } from '../../services/queries/blogQuery';
import { strapiUrl } from '../../services/queries/homeQuery';

export function normaliseBlog(post: BlogPost): BlogArticle {
  return {
    // Use slug as the URL id; fall back to documentId
    id:          post.slug ?? post.documentId ?? '',
    title:       post.title ?? '',
    description: post.description ?? '',
    // Format the ISO date string into a readable form; fallback to raw value
    date:        post.date
                   ? new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
                   : '',
    category:    post.category ?? '',
    image:       strapiUrl(post.image?.url) ?? '',
    author:      post.author ?? 'Polaris Team',
    authorAvatar: '',
    sections: (post.article ?? []).map((art) => ({
      // Use the article's own slug/id for TOC scroll-spy anchors
      id:         art.slug ?? art.id ?? '',
      // Strip surrounding quotes from headings like `""` → treat as empty (intro)
      heading:    (art.heading ?? '').replace(/^["']+|["']+$/g, '').trim(),
      paragraphs: (art.paragraph ?? []).map((p) => (p.text ?? '').trim()).filter(Boolean),
      image:      art.articleImage?.url ? strapiUrl(art.articleImage.url) : undefined,
    })),
  };
}
