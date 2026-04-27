/**
 * Shared job data — used by both OpenPositions (list) and JobDetailPage (detail).
 * Each job has a unique `id` used as the URL slug.
 */

export type Category =
  | 'All'
  | 'Customer Address Verification'
  | 'Engineering'
  | 'Product'
  | 'Human Resource';

export interface JobSection {
  heading: string;
  /** If items is empty, the section renders only the heading + plain text */
  items: string[];
  /** Optional plain paragraph (used for "How to apply") */
  plainText?: string;
}

export interface Job {
  id: string;
  title: string;
  /** Short description shown on the card */
  description: string;
  type: string;
  mode: string;
  location: string;
  category: Exclude<Category, 'All'>;
  /** Intro paragraph shown at the top of the detail page */
  intro: string;
  /** Ordered sections rendered with the radio-bullet timeline */
  sections: JobSection[];
}

export const JOBS: Job[] = [
  {
    id: 'senior-product-manager',
    title: 'Senior Product Manager',
    description:
      'We are seeking a highly motivated and experienced Senior Product Manager with a proven track record of following up and closing comple...',
    type: 'Full-time',
    mode: 'On-site',
    location: 'Lagos',
    category: 'Product',
    intro:
      "We're looking for a Product Manager to help shape, build, and improve products that solve real user problems. You'll work closely with design, engineering, and business teams to define product direction, prioritise work, and ensure we're delivering value to users and the business. This role is ideal for someone who enjoys clarity, collaboration, and turning insights into practical outcomes.",
    sections: [
      {
        heading: "What You'll Do",
        items: [
          'Define product goals, roadmap, and priorities based on user needs and business objectives',
          'Write clear product requirements, user stories, and acceptance criteria',
          'Gather and analyse user feedback, data, and market insights to inform decisions',
          'Own backlog prioritisation and sprint planning with the development team',
          'Track product performance and iterate based on outcomes',
        ],
      },
      {
        heading: "What we're looking for",
        items: [
          '2–5 years of experience in product management or a related role',
          'Strong understanding of product discovery and delivery processes',
          'Ability to translate complex problems into clear, actionable requirements',
          'Experience working with cross-functional teams',
          'Strong communication and stakeholder management skills',
        ],
      },
      {
        heading: 'Benefits',
        items: [
          'Define product goals, roadmap, and priorities based on user needs and business objectives',
          'Write clear product requirements, user stories, and acceptance criteria',
          'Gather and analyse user feedback, data, and market insights to inform decisions',
        ],
      },
      {
        heading: 'How to apply',
        items: [],
        plainText:
          "Send your CV and a short note about your experience or products you've worked on to careers@company.com, or apply directly on this page.",
      },
    ],
  },
  {
    id: 'business-development-executive-engineering',
    title: 'Business Development Executive',
    description:
      'We are seeking a highly motivated and experienced Business Development Executive with a proven track record of following up and closing comple...',
    type: 'Full-time',
    mode: 'On-site',
    location: 'Lagos',
    category: 'Engineering',
    intro:
      "We're looking for a Business Development Executive to help grow our client base and expand our reach across Nigeria. You'll identify new business opportunities, build relationships with key stakeholders, and work closely with our technical teams to deliver tailored solutions.",
    sections: [
      {
        heading: "What You'll Do",
        items: [
          'Identify and pursue new business opportunities across target sectors',
          'Build and maintain strong relationships with clients and partners',
          'Prepare and deliver compelling proposals and presentations',
          'Collaborate with technical teams to scope and deliver solutions',
          'Track pipeline activity and report on business development metrics',
        ],
      },
      {
        heading: "What we're looking for",
        items: [
          '3+ years of experience in business development or sales',
          'Strong understanding of technology solutions and client needs',
          'Excellent communication and negotiation skills',
          'Ability to work independently and as part of a team',
          'Experience in the geospatial or tech industry is a plus',
        ],
      },
      {
        heading: 'Benefits',
        items: [
          'Competitive salary and performance bonuses',
          'Health insurance and wellness benefits',
          'Flexible working arrangements',
        ],
      },
      {
        heading: 'How to apply',
        items: [],
        plainText:
          'Send your CV and a short note about your experience to careers@company.com, or apply directly on this page.',
      },
    ],
  },
  {
    id: 'cav-agent-lagos-ogun-1',
    title: 'Customer Address Verification (CAV) Agent - Lagos/Ogun State',
    description:
      "We are looking for a customer address verification agent within the listed areas and it's environs, who will verify addresses from financial institutio...",
    type: 'Part-time',
    mode: 'Ogun',
    location: 'Lagos',
    category: 'Customer Address Verification',
    intro:
      "We are looking for a customer address verification agent within the listed areas and its environs, who will verify addresses from financial institutions and other organisations to ensure accuracy and completeness.",
    sections: [
      {
        heading: "What You'll Do",
        items: [
          'Visit customer addresses to verify accuracy of information provided',
          'Collect and document field data using mobile applications',
          'Report findings accurately and in a timely manner',
          'Liaise with supervisors on any discrepancies found in the field',
        ],
      },
      {
        heading: "What we're looking for",
        items: [
          'Familiarity with Lagos and Ogun State geography',
          'Ability to use smartphones and mobile data collection apps',
          'Strong attention to detail and integrity',
          'Good communication skills',
        ],
      },
      {
        heading: 'Benefits',
        items: [
          'Competitive pay per verified address',
          'Flexible working hours',
          'Training and onboarding provided',
        ],
      },
      {
        heading: 'How to apply',
        items: [],
        plainText:
          'Send your CV to careers@company.com or apply directly on this page.',
      },
    ],
  },
  {
    id: 'cav-agent-lagos-ogun-2',
    title: 'Customer Address Verification (CAV) Agent - Lagos/Ogun State',
    description:
      "We are looking for a customer address verification agent within the listed areas and it's environs, who will verify addresses from financial institutio...",
    type: 'Part-time',
    mode: 'Ogun',
    location: 'Lagos',
    category: 'Customer Address Verification',
    intro:
      "We are looking for a customer address verification agent within the listed areas and its environs, who will verify addresses from financial institutions and other organisations to ensure accuracy and completeness.",
    sections: [
      {
        heading: "What You'll Do",
        items: [
          'Visit customer addresses to verify accuracy of information provided',
          'Collect and document field data using mobile applications',
          'Report findings accurately and in a timely manner',
          'Liaise with supervisors on any discrepancies found in the field',
        ],
      },
      {
        heading: "What we're looking for",
        items: [
          'Familiarity with Lagos and Ogun State geography',
          'Ability to use smartphones and mobile data collection apps',
          'Strong attention to detail and integrity',
          'Good communication skills',
        ],
      },
      {
        heading: 'Benefits',
        items: [
          'Competitive pay per verified address',
          'Flexible working hours',
          'Training and onboarding provided',
        ],
      },
      {
        heading: 'How to apply',
        items: [],
        plainText:
          'Send your CV to careers@company.com or apply directly on this page.',
      },
    ],
  },
  {
    id: 'business-development-executive-hr',
    title: 'Business Development Executive',
    description:
      'We are seeking a highly motivated and experienced Business Development Executive with a proven track record of following up and closing comple...',
    type: 'Full-time',
    mode: 'On-site',
    location: 'Lagos',
    category: 'Human Resource',
    intro:
      "We're looking for a Business Development Executive to help grow our client base and expand our reach across Nigeria.",
    sections: [
      {
        heading: "What You'll Do",
        items: [
          'Identify and pursue new business opportunities across target sectors',
          'Build and maintain strong relationships with clients and partners',
          'Prepare and deliver compelling proposals and presentations',
        ],
      },
      {
        heading: "What we're looking for",
        items: [
          '3+ years of experience in business development or sales',
          'Strong understanding of technology solutions and client needs',
          'Excellent communication and negotiation skills',
        ],
      },
      {
        heading: 'Benefits',
        items: [
          'Competitive salary and performance bonuses',
          'Health insurance and wellness benefits',
        ],
      },
      {
        heading: 'How to apply',
        items: [],
        plainText:
          'Send your CV to careers@company.com or apply directly on this page.',
      },
    ],
  },
  {
    id: 'business-development-executive-engineering-2',
    title: 'Business Development Executive',
    description:
      'We are seeking a highly motivated and experienced Business Development Executive with a proven track record of following up and closing comple...',
    type: 'Full-time',
    mode: 'On-site',
    location: 'Lagos',
    category: 'Engineering',
    intro:
      "We're looking for a Business Development Executive to help grow our client base and expand our reach across Nigeria.",
    sections: [
      {
        heading: "What You'll Do",
        items: [
          'Identify and pursue new business opportunities across target sectors',
          'Build and maintain strong relationships with clients and partners',
          'Prepare and deliver compelling proposals and presentations',
        ],
      },
      {
        heading: "What we're looking for",
        items: [
          '3+ years of experience in business development or sales',
          'Strong understanding of technology solutions and client needs',
          'Excellent communication and negotiation skills',
        ],
      },
      {
        heading: 'Benefits',
        items: [
          'Competitive salary and performance bonuses',
          'Health insurance and wellness benefits',
        ],
      },
      {
        heading: 'How to apply',
        items: [],
        plainText:
          'Send your CV to careers@company.com or apply directly on this page.',
      },
    ],
  },
];
