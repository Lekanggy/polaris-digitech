/**
 * ProjectsFAQ — FAQ section for the Projects page.
 * Uses the shared FAQAccordion component and CMS-backed FAQ data.
 */
import FAQAccordion from '../../../components/shared/FAQAccordion';
import { useServicesQuery } from '../../../hooks/useServicesQuery';

export default function ProjectsFAQ() {
  const { faqs } = useServicesQuery();

  const mappedFaqs = (faqs ?? [])
    .map((faq) => ({
      question: faq.title?.trim() || 'FAQ',
      answer: faq.description?.trim() || '',
    }))
    .filter((faq) => faq.answer);

  return (
    <FAQAccordion
      faqs={mappedFaqs}
      description="Find answers to common questions about our projects, processes, and how we deliver geospatial solutions that make a real difference."
    />
  );
}
