export type NavServiceItem = {
  icon: string;
  title: string;
  description: string;
  href: string
};

export type NavProductItem = {
  icon: string;
  title: string;
  description: string;
  bg: string;
  href?: string;
};

export type NavProjectItem = {
  logo: string;   // asset import key
  title: string;
  description: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  dropdown?: string[];
  services?: NavServiceItem[];
  products?: NavProductItem[];
  partnerProducts?: string[];
  projects?: NavProjectItem[];
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About Us', href: '/about' },
  {
    label: 'Products',
    href: '/solutions',
    products: [
      {
        icon: 'database',
        title: 'Polaris Data Collector (PDC)',
        description: 'A digital tool for real-time data gathering using custom forms, enabling efficient electronic data collection and storage.',
        bg: '#F0E2FF',
        href: "/solutions/pdc"
      },
      {
        icon: 'risk',
        title: 'Risk Geo-Platform',
        description: 'An advanced tool that analyzes and visualizes geospatial data to help organizations manage risks proactively and support business growth.',
        bg: '#DAE4FF',
        href: "/projects/risk-geo-platform"
      },
      {
        icon: 'address',
        title: 'Address Management Portal',
        description: 'A user-friendly platform that streamlines address verification and management, improving data accuracy and customer experience.',
        bg: '#CCECFF',
        href: "/solutions/amp"
      },
    ],
    partnerProducts: [
      'MapInfo',
      'Google Maps',
      'Google Cloud Platform',
      'High Resolution Imagery',
      'Google Workspace for Education',
      'Google Workspace for Business',
    ],
  },
  {
    label: 'Services',
    href: '/services',
    services: [
      {
        icon: 'monitor',
        title: 'Software Development',
        description: 'We build, deploy, and maintain custom software tailored to your business needs.',
        href: "/services/software-development"
      },
      {
        icon: 'survey',
        title: 'Land Surveying',
        description: 'We create accurate digital maps using satellite, aerial, and GIS technology.',
        href: "/services/land-surveying"
      },
      {
        icon: 'shield',
        title: 'Customer Address Verification',
        description: 'We help businesses ensure accurate deliveries and reliable customer data.',
        href: "/services/identity-intelligence"
      },
      {
        icon: 'bulb',
        title: 'Training and Technical Support',
        description: 'We offer tailored training and support to help clients get the most from our solutions.',
        href: "/services/training-support"
      },
      {
        icon: 'globe',
        title: 'Geospatial Data Acquisition Management',
        description: 'We provide precise mapping of land features for informed decision-making.',
        href: "/services/geospatial-data-acquisition"
      },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    projects: [
      { logo: 'mtn',     title: 'MTN Coverage Locator',                    description: 'A web app that lets MTNN staff and users check signal strength, report poor coverage...', href: "/projects/mtn-coverage-locator" },
      { logo: 'image23', title: 'Geo-enabled ICT Surveillance Center',      description: 'Deployment of Geo-enabled ICT Surveillance centre for Boats, Ships in Lagos state.', href: "/projects/lag-ferry" },
      { logo: 'partner7',title: 'Risk Geo-Platform',                        description: 'A platform that helps AXA Mansard assess insured assets to match customers with t...', href: "/projects/risk-geo-platform" },
      { logo: 'partner6',title: 'OLIS - Osun Land Information System',      description: 'An application to effectively manage the day-to-day activities of the Osun state ministry o...', href: "/projects/land-parcel" },
      { logo: 'goog',    title: 'Google Street View',                       description: 'Collect street names, environmental features, and building/house/structure details to ...', href: "/projects/googl-street-view" },
      { logo: 'alm',     title: 'Alma Beach',                               description: 'Evaluate survey plan and set out the proposed coastal road right of way', href: "/projects/alma-beach" },
      { logo: 'image27', title: 'Asset Mapping and Customer Enumeration',   description: 'To know the no of customers per asset of Eko electric in readiness for their SCADA project.', href: "/projects/asset-mapping" },
      { logo: 'image28', title: 'Thematic Mapping of restricted area for mining', description: 'Production Of Thematic Mapping of Areas Restricted (Protected) From Mining Activ...', href: "/projects/thematic-mapping" },
    ],
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Blogs', href: '/blog' },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Location Intelligence',
    description:
      'We specialize in location technology, providing you with tailor-made insights through services like ArcGIS and UAVs for data collection and high-end aerial photography.',
    icon: 'location',
  },
  {
    title: 'GIS Analysis',
    description:
      'We specialize in integrating high-performance GIS analysis and visualization tools to provide you with rich, client-specific geospatial data, imagery, and asset management information.',
    icon: 'globe',
  },
  {
    title: 'Innovative Tech Applications',
    description:
      "We're lead providers of innovative technological applications like Google Cloud Platform, Google Workspace, Airbus Imagery, data analysis, Google Maps, and change detection analytics.",
    icon: 'laptop',
  },
];

export const PRODUCTS = [
  {
    id: 1,
    title: 'Polaris Data Collector (PDC)',
    description:
      'A digital tool for real-time data gathering using custom forms, enabling efficient electronic data collection and storage.',
    bg: '#F0E2FF',
    icon: 'database',
  },
  {
    id: 2,
    title: 'Address Management Portal',
    description:
      'A user-friendly platform that streamlines address verification and management, improving data accuracy and customer experience.',
    bg: '#CCECFF',
    icon: 'address',
  },
  {
    id: 3,
    title: 'Google Workspace',
    description:
      'Polaris Digitech offers seamless integration of Google Workspace apps and Google Cloud Platform to enhance client productivity and experience.',
    bg: '#FFF2D7',
    icon: 'google',
  },
  {
    id: 4,
    title: 'Risk Geo-Platform',
    description:
      'An advanced tool that analyzes and visualizes geospatial data to help organizations manage risks proactively and support business growth.',
    bg: '#DAE4FF',
    icon: 'risk',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    text: 'Polaris Digitech delivered a powerful solution with the Coverage Locator Application, helping us bring network transparency closer to our customers and retail teams. The tool has been instrumental in accelerating 5G adoption by allowing users to check signal strength in real-time and make informed decisions. Their expertise in location intelligence and seamless execution made a real difference.',
    author: 'Senior Manager, Customer Experience & Technology',
    company: 'MTN Nigeria',
  },
  {
    id: 2,
    text: 'Polaris Digitech delivered a highly effective and professional surveillance solution that has enhanced safety and real-time vessel monitoring across Lagos waterways. Their expertise brought a modern, efficient upgrade to our marine operations.',
    author: 'General Manager',
    company: 'Lagos State Ferry Services (LagFerry)',
  },
  {
    id: 3,
    text: 'Polaris Digitech helped us assess risk with greater accuracy. Their professionalism and technical skill made all the difference.',
    author: 'Head of Risk & Underwriting',
    company: 'AXA Mansard',
  },
  {
    id: 4,
    text: "Polaris Digitech delivered a smart, efficient land management system that's transforming how we work.",
    author: 'Government Official',
    company: 'Osun State',
  },
];

export const FOOTER_LINKS: Record<string, string[]> = {
  Products: [
    'Polaris Data Collector',
    'Address Management Portal',
    'Risk-Geo Platform',
    'Digital Address Verification App',
  ],
  Services: [
    'Software Development',
    'Land Surveying Services',
    'Customer Address Verification',
    'Geo-Spatial Data Acquisition Management',
    'Training and Technical Support Services',
  ],
  Projects: [
    'MTN Coverage Locator',
    'Risk-Geo Platform',
    'LagFerry Surveillance System',
    'Geo-enabled ICT Surveillance Centre',
  ],
  Company: ['About Us', 'Careers', 'News & Updates', 'Contact'],
};
