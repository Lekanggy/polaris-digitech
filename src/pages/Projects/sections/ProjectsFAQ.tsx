/**
 * ProjectsFAQ — FAQ section for the Projects page.
 * Uses the shared FAQAccordion component.
 */
import FAQAccordion from '../../../components/shared/FAQAccordion';
import type { FAQItem } from '../../../components/shared/FAQAccordion';

const FAQS: FAQItem[] = [
  {
    question: 'How does Polaris Digitech approach new project requirements?',
    answer: 'We begin every project with a thorough discovery phase — understanding your goals, constraints, and data requirements. Our team then designs a tailored geospatial solution, iterating with stakeholders throughout the process to ensure the final product meets your exact needs.',
  },
  {
    question: 'How do you ensure data accuracy in your mapping projects?',
    answer: 'We use a combination of satellite imagery, field surveys, and validated data sources. All collected data goes through rigorous quality assurance processes including cross-referencing with authoritative datasets and on-ground verification where necessary.',
  },
  {
    question: 'Do you work with government agencies?',
    answer: 'Yes. We have extensive experience working with federal and state government agencies across Nigeria, delivering projects in land management, infrastructure mapping, surveillance systems, and address verification.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Small-scale projects can be completed in 4–8 weeks, while large enterprise or government deployments may span 3–12 months. We provide detailed project plans with milestones at the outset.',
  },
  {
    question: 'Do you provide post-project support?',
    answer: 'Absolutely. We offer comprehensive post-deployment support including system maintenance, user training, data updates, and technical assistance to ensure your solution continues to deliver value long after launch.',
  },
];

export default function ProjectsFAQ() {
  return (
    <FAQAccordion
      faqs={FAQS}
      description="Find answers to common questions about our projects, processes, and how we deliver geospatial solutions that make a real difference."
    />
  );
}
