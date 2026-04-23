import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const satoshi = 'Satoshi, Inter, sans-serif';

const FAQS = [
  { question: 'How does Polaris Digitech approach new project requirements?',   answer: 'We begin every project with a thorough discovery phase — understanding your goals, constraints, and data requirements. Our team then designs a tailored geospatial solution, iterating with stakeholders throughout the process to ensure the final product meets your exact needs.' },
  { question: 'How do you ensure data accuracy in your mapping projects?',       answer: 'We use a combination of satellite imagery, field surveys, and validated data sources. All collected data goes through rigorous quality assurance processes including cross-referencing with authoritative datasets and on-ground verification where necessary.' },
  { question: 'Do you work with government agencies?',                           answer: 'Yes. We have extensive experience working with federal and state government agencies across Nigeria, delivering projects in land management, infrastructure mapping, surveillance systems, and address verification.' },
  { question: 'How long does a typical project take?',                           answer: 'Project timelines vary based on scope and complexity. Small-scale projects can be completed in 4–8 weeks, while large enterprise or government deployments may span 3–12 months. We provide detailed project plans with milestones at the outset.' },
  { question: 'Do you provide post-project support?',                            answer: 'Absolutely. We offer comprehensive post-deployment support including system maintenance, user training, data updates, and technical assistance to ensure your solution continues to deliver value long after launch.' },
];

// ── Plus / Minus icon ──────────────────────────────────────────────────────
function ToggleIcon({ open }: { open: boolean }) {
  return (
    <div
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: `1.5px solid ${open ? '#283172' : '#D1D5DB'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: open ? '#283172' : '#6B7280',
        transition: 'border-color 200ms, color 200ms',
      }}
    >
      {open ? (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="2" y1="7" x2="12" y2="7" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="7" y1="2" x2="7" y2="12" />
          <line x1="2" y1="7" x2="12" y2="7" />
        </svg>
      )}
    </div>
  );
}

// ── Single accordion item ──────────────────────────────────────────────────
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isVisible: boolean;
}

function AccordionItem({ question, answer, isOpen, onToggle, index, isVisible }: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.05 + index * 0.07 }}
      style={{
        background: '#FFFFFF',
        borderRadius: '24px',
        overflow: 'hidden',
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          minHeight: '80px',
        }}
      >
        <span
          style={{
            fontFamily: satoshi,
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '150%',
            color: '#010527',
          }}
        >
          {question}
        </span>
        <ToggleIcon open={isOpen} />
      </button>

      {/* Answer — animated */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily: satoshi,
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '165%',
                color: '#46485F',
                padding: '0 24px 24px',
                margin: 0,
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function ProjectsFAQ() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      ref={ref}
      style={{
        background: '#EBECF6',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Header row — title and description inline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 6vw, 100px)',
            alignItems: 'start',
            marginBottom: '40px',
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 700,
              fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#010527',
              margin: 0,
            }}
          >
            Frequently Asked Question
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '165%',
              color: '#46485F',
              margin: 0,
              paddingTop: '8px',
              maxWidth: '320px',
            }}
          >
            Find answers to common questions about our projects, processes, and how we deliver geospatial solutions that make a real difference.
          </motion.p>
        </div>

        {/* Accordion list — full width below header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
