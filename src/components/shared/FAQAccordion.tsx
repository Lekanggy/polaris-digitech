/**
 * FAQAccordion — Reusable FAQ section component
 *
 * Used on both the Projects page and the Contact Us page.
 * Accepts a list of FAQ items and an optional description.
 *
 * Design:
 *   • Two-column header: title (left) + description (right)
 *   • Full-width accordion list below
 *   • Each item: white card, rounded, question + +/- toggle
 *   • Background: #EBECF6
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const satoshi = 'Satoshi, Inter, sans-serif';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  description?: string;
}

// ── Plus / Minus toggle icon ──────────────────────────────────────────────
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

// ── Single accordion item ─────────────────────────────────────────────────
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
  isVisible,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.05 + index * 0.07 }}
      style={{
        background: '#FFFFFF',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid #D1D3E7',
      }}
    >
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
          minHeight: '72px',
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

// ── Main export ───────────────────────────────────────────────────────────
export default function FAQAccordion({ faqs, description }: FAQAccordionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      ref={ref}
      style={{
        background: '#FFFFFF',
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
        {/* Header row */}
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

          {description && (
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
                maxWidth: '360px',
              }}
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Accordion list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, i) => (
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
