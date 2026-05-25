/**
 * OpenPositions — Section 2
 * Filter tabs + 2-column job card grid.
 * Clicking a filter tab shows only cards in that category.
 */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { JOBS } from '../jobsData';
import type { Category, Job } from '../jobsData';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Category counts ───────────────────────────────────────────────────────
const CATEGORIES: Category[] = [
  'All',
  'Customer Address Verification',
  'Engineering',
  'Product',
  'Human Resource',
];

function getCategoryCount(cat: Category): number {
  if (cat === 'All') return JOBS.length;
  return JOBS.filter((j) => j.category === cat).length;
}

// ── Chevron icon ──────────────────────────────────────────────────────────
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4,2 10,7 4,12" />
    </svg>
  );
}

// ── Single job card ───────────────────────────────────────────────────────
function JobCard({ job, index, isVisible }: { job: Job; index: number; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.06 + index * 0.07 }}
      style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        padding: '24px',
        boxShadow: '0px 0px 40px 0px rgba(2, 10, 71, 0.10)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        minHeight: '188px',
      }}
    >
      {/* Title */}
      <h3
        style={{
          fontFamily: satoshi,
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '150%',
          letterSpacing: '0',
          color: '#283172',
          margin: 0,
        }}
      >
        {job.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: satoshi,
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '140%',
          letterSpacing: '0',
          color: '#46485F',
          margin: 0,
          flex: 1,
        }}
      >
        {job.description}
      </p>

      {/* Footer row: meta + button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginTop: 'auto',
        }}
      >
        {/* Work mode / location */}
        <p
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '140%',
            letterSpacing: '0',
            color: '#46485F',
            margin: 0,
          }}
        >
          {job.type} • {job.mode} • {job.location}
        </p>

        {/* Read More button — navigates to job detail */}
        <Link
          to={`/careers/${job.id}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '16px',
            paddingRight: '16px',
            borderRadius: '10px',
            background: '#0B1353',
            color: '#FFFFFF',
            fontFamily: satoshi,
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '140%',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            minWidth: '125px',
            height: '37px',
            transition: 'opacity 200ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Read More
          <ChevronRight />
        </Link>
      </div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────
export default function OpenPositions() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredJobs =
    activeCategory === 'All'
      ? JOBS
      : JOBS.filter((j) => j.category === activeCategory);

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
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
            style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: isMobile ? 'clamp(28px, 6vw, 40px)' : '40px',
              lineHeight: '150%',
              letterSpacing: '-0.02em',
              color: '#010527',
              marginBottom: '24px',
            }}
        >
          Open Positions
        </motion.h2>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                  height: '37px',
                  borderRadius: '10px',
                  border: `1px solid ${isActive ? '#0B1353' : '#B0B8D0'}`,
                  background: isActive ? '#0B1353' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#46485F',
                  fontFamily: satoshi,
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#0B1353';
                    (e.currentTarget as HTMLButtonElement).style.color = '#0B1353';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#B0B8D0';
                    (e.currentTarget as HTMLButtonElement).style.color = '#46485F';
                  }
                }}
              >
                {cat} {getCategoryCount(cat)}
              </button>
            );
          })}
        </motion.div>

        {/* Job cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '24px',
          }}
        >
          {filteredJobs.map((job, i) => (
            <JobCard
              key={job.title + i}
              job={job}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredJobs.length === 0 && (
          <p
            style={{
              fontFamily: satoshi,
              fontSize: '16px',
              color: '#46485F',
              textAlign: 'center',
              paddingTop: '40px',
            }}
          >
            No open positions in this category right now. Check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
