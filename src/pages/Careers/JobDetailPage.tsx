/**
 * JobDetailPage
 * Layout:
 *   • Navbar
 *   • "< Back to Careers" back link
 *   • Two-column layout:
 *       Left (flex:1): job title, meta tags, intro, sections with radio-bullet timeline
 *       Right (sticky, ~320px): "Interested in this role?" application form
 *   • Footer
 *
 * Radio-bullet design:
 *   First section heading:
 *     Outer circle bg #0B1353 → inner ring bg #D7B56D → dot bg #0B1353
 *   Other section headings:
 *     Outer circle bg = section bg (#FFFFFF) → inner ring bg #B9CFE2 → dot bg #0B1353
 *   Bullet items:
 *     Outer ring bg #B9CFE2 → inner dot bg #0B1353
 *
 * Data: fetches the career query and finds the job by href === :id param.
 * Falls back to static JOBS if CMS data is unavailable or job not found there.
 */
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import { JOBS } from './jobsData';
import type { JobSection } from './jobsData';
import { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useGraphQLQuery } from '../../hooks/useGraphQLQuery';
import { careerQuery } from '../../services/queries/careerQuery';
import type { CareerData, CareerJob } from '../../services/queries/careerQuery';
import { gql } from '../../services/apolloClient';

const CAREER_QUERY = gql(careerQuery);
const satoshi = 'Satoshi, Inter, sans-serif';

// ── Normalise a CMS job into the JobSection[] shape used by the renderer ──
function cmsJobToSections(job: CareerJob): JobSection[] {
  if (!job.sections || job.sections.length === 0) return [];
  return job.sections.map((s) => {
    const items = (s.items ?? []).map((it) => (it.text ?? '').trim()).filter(Boolean);
    // "How to apply" sections typically have a single item that acts as plain text
    const isApply = (s.heading ?? '').toLowerCase().includes('apply');
    return {
      heading:   s.heading ?? '',
      items:     isApply ? [] : items,
      plainText: isApply ? items[0] : undefined,
    };
  });
}

// ── Build display job from CMS or static fallback ─────────────────────────
interface DisplayDetail {
  id: string;
  title: string;
  mode: string;
  type: string;
  location: string;
  category: string;
  intro: string;
  sections: JobSection[];
}

function buildDetail(id: string, cmsData?: CareerData): DisplayDetail | null {
  // 1. Try CMS jobs first
  const cmsJob = cmsData?.career?.jobs?.find((j) => j.href === id || j.id === id);
  if (cmsJob) {
    return {
      id:       cmsJob.href ?? cmsJob.id ?? id,
      title:    cmsJob.title ?? '',
      mode:     (cmsJob.mode ?? '').replace(/_/g, '-'),
      type:     (cmsJob.type ?? '').replace(/_/g, '-'),
      location: (cmsJob.location ?? '').replace(/'/g, ''),
      category: cmsJob.Category ?? '',
      intro:    cmsJob.description ?? '',
      sections: cmsJobToSections(cmsJob),
    };
  }

  // 2. Fall back to static JOBS
  const staticJob = JOBS.find((j) => j.id === id);
  if (staticJob) {
    return {
      id:       staticJob.id,
      title:    staticJob.title,
      mode:     staticJob.mode,
      type:     staticJob.type,
      location: staticJob.location,
      category: staticJob.category,
      intro:    staticJob.intro,
      sections: staticJob.sections,
    };
  }

  return null;
}

// ── Radio circle for section headings ─────────────────────────────────────
function SectionRadio({ isFirst, isMobile }: { isFirst: boolean; isMobile: boolean }) {
  const outer = isMobile ? 24 : 28;
  const ring  = isMobile ? 15 : 18;
  const dot   = isMobile ? 7  : 8;

  if (isFirst) {
    return (
      <div
        style={{
          width: `${outer}px`,
          height: `${outer}px`,
          borderRadius: '50%',
          background: '#0B1353',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: `${ring}px`,
            height: `${ring}px`,
            borderRadius: '50%',
            background: '#D7B56D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: `${dot}px`, height: `${dot}px`, borderRadius: '50%', background: '#0B1353' }} />
        </div>
      </div>
    );
  }

  const ring2 = isMobile ? 12 : 14;
  const dot2  = isMobile ? 5  : 6;
  return (
    <div
      style={{
        width: `${outer}px`,
        height: `${outer}px`,
        borderRadius: '50%',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        zIndex: 1,
        border: '2px solid #B9CFE2',
      }}
    >
      <div
        style={{
          width: `${ring2}px`,
          height: `${ring2}px`,
          borderRadius: '50%',
          background: '#B9CFE2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: `${dot2}px`, height: `${dot2}px`, borderRadius: '50%', background: '#0B1353' }} />
      </div>
    </div>
  );
}

// ── Bullet circle for list items ──────────────────────────────────────────
function BulletCircle({ isMobile }: { isMobile: boolean }) {
  const size  = isMobile ? 14 : 16;
  const inner = isMobile ? 6  : 7;
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: '#B9CFE2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        marginTop: '4px',
      }}
    >
      <div style={{ width: `${inner}px`, height: `${inner}px`, borderRadius: '50%', background: '#0B1353' }} />
    </div>
  );
}

// ── Single section block ──────────────────────────────────────────────────
function SectionBlock({
  section,
  isFirst,
  isLast,
  isMobile,
}: {
  section: JobSection;
  isFirst: boolean;
  isLast: boolean;
  isMobile: boolean;
}) {
  return (
    <div style={{ display: 'flex', gap: isMobile ? '14px' : '20px', position: 'relative' }}>
      {/* Left: radio + vertical line */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
          width: '28px',
        }}
      >
        <SectionRadio isFirst={isFirst} isMobile={isMobile} />
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: '2px',
              background: '#E0E6EF',
              marginTop: '4px',
              minHeight: isMobile ? '28px' : '40px',
            }}
          />
        )}
      </div>

      {/* Right: heading + content */}
      <div style={{ flex: 1, paddingBottom: isLast ? 0 : (isMobile ? '28px' : '40px') }}>
        <h3
          style={{
            fontFamily: satoshi,
            fontWeight: 600,
            fontSize: isMobile ? '16px' : '18px',
            lineHeight: '150%',
            color: '#010527',
            margin: '0 0 12px 0',
            paddingTop: '2px',
          }}
        >
          {section.heading}
        </h3>

        {section.plainText && (
          <p
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: isMobile ? '14px' : '15px',
              lineHeight: '160%',
              color: '#46485F',
              margin: 0,
            }}
          >
            {section.plainText}
          </p>
        )}

        {section.items.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: isMobile ? '10px' : '12px' }}>
            {section.items.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: isMobile ? '10px' : '12px', alignItems: 'flex-start' }}>
                <BulletCircle isMobile={isMobile} />
                <span
                  style={{
                    fontFamily: satoshi,
                    fontWeight: 400,
                    fontSize: isMobile ? '14px' : '15px',
                    lineHeight: '160%',
                    color: '#46485F',
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// ── Application form (right sticky panel) ────────────────────────────────
function ApplicationForm() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E0E6EF',
        padding: isMobile ? '16px 12px' : '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '10px' : '16px',
      }}
    >
      <h3
        style={{
          fontFamily: satoshi,
          fontWeight: 600,
          fontSize: isMobile ? '15px' : '16px',
          color: '#010527',
          margin: 0,
        }}
      >
        Interested in this role?
      </h3>

      <input
        type="text"
        placeholder="Full Name"
        style={{
          width: '100%',
          padding: isMobile ? '10px 12px' : '10px 14px',
          borderRadius: '8px',
          border: '1px solid #D0D5E8',
          fontFamily: satoshi,
          fontSize: isMobile ? '13px' : '14px',
          color: '#010527',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />

      <input
        type="email"
        placeholder="Email"
        style={{
          width: '100%',
          padding: isMobile ? '10px 12px' : '10px 14px',
          borderRadius: '8px',
          border: '1px solid #D0D5E8',
          fontFamily: satoshi,
          fontSize: isMobile ? '13px' : '14px',
          color: '#010527',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      />

      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '6px' : '8px',
          padding: isMobile ? '10px 12px' : '10px 14px',
          borderRadius: '8px',
          border: '1px solid #D0D5E8',
          fontFamily: satoshi,
          fontSize: isMobile ? '13px' : '14px',
          color: '#46485F',
          cursor: 'pointer',
          background: '#F8F9FC',
          minHeight: isMobile ? '40px' : 'auto',
        }}
      >
        <svg width={isMobile ? '14' : '16'} height={isMobile ? '14' : '16'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        {fileName ?? 'Upload CV'}
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          style={{ display: 'none' }}
          onChange={e => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </label>

      <button
        style={{
          width: '100%',
          padding: isMobile ? '10px' : '12px',
          borderRadius: '8px',
          background: '#0B1353',
          color: '#FFFFFF',
          fontFamily: satoshi,
          fontWeight: 600,
          fontSize: isMobile ? '13px' : '15px',
          border: 'none',
          cursor: 'pointer',
          transition: 'opacity 200ms',
          minHeight: isMobile ? '40px' : 'auto',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        Apply Now
      </button>
    </div>
  );
}

// ── Meta tag pill ─────────────────────────────────────────────────────────
function MetaTag({ icon, label }: { icon: React.ReactNode; label: string }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isMobile ? '5px' : '6px',
        fontFamily: satoshi,
        fontWeight: 400,
        fontSize: isMobile ? '12px' : '13px',
        color: '#46485F',
      }}
    >
      {icon}
      {label}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function JobDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const { data } = useGraphQLQuery<CareerData>(CAREER_QUERY);

  const job = buildDetail(id ?? '', data);

  if (!job) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div style={{ padding: isMobile ? '100px 24px' : '160px 80px', textAlign: 'center' }}>
          <p style={{ fontFamily: satoshi, fontSize: '20px', color: '#46485F' }}>
            Job not found.
          </p>
          <button
            onClick={() => navigate('/careers')}
            style={{
              marginTop: '24px',
              padding: '10px 24px',
              borderRadius: '8px',
              background: '#0B1353',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontFamily: satoshi,
              fontSize: '14px',
            }}
          >
            Back to Careers
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <Navbar />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          paddingTop: isMobile ? '70px' : '140px',
          paddingBottom: isMobile ? '60px' : '80px',
        }}
      >
        {/* ── Back link ── */}
        <button
          onClick={() => navigate('/careers')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: '14px',
            color: '#46485F',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginBottom: isMobile ? '12px' : '32px',
            transition: 'color 200ms',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#0B1353')}
          onMouseLeave={e => (e.currentTarget.style.color = '#46485F')}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="10,2 4,8 10,14" />
          </svg>
          Back to Careers
        </button>

        {/* ── Two-column layout ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 340px',
            gap: isMobile ? '16px' : '60px',
            alignItems: 'start',
          }}
        >
          {/* ── LEFT: job content ── */}
          <div>
            {/* Title */}
            <h1
              style={{
                fontFamily: satoshi,
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: '115%',
                letterSpacing: '-0.02em',
                color: '#010527',
                marginBottom: '16px',
              }}
            >
              {job.title}
            </h1>

            {/* Meta tags */}
            <div
              style={{
                display: 'flex',
                gap: isMobile ? '12px' : '20px',
                flexWrap: 'wrap',
                marginBottom: isMobile ? '24px' : '32px',
              }}
            >
              <MetaTag
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                }
                label={`${job.mode}, ${job.location}`}
              />
              <MetaTag
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                }
                label={job.type}
              />
              <MetaTag
                icon={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                label={job.category}
              />
            </div>

            {/* Intro paragraph */}
            <p
              style={{
                fontFamily: satoshi,
                fontWeight: 400,
                fontSize: isMobile ? '14px' : '15px',
                lineHeight: '170%',
                color: '#46485F',
                marginBottom: isMobile ? '32px' : '48px',
              }}
            >
              {job.intro}
            </p>

            {/* Sections with radio-bullet timeline */}
            <div>
              {job.sections.map((section, i) => (
                <SectionBlock
                  key={section.heading + i}
                  section={section}
                  isFirst={i === 0}
                  isLast={i === job.sections.length - 1}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT: sticky application form ── */}
          <div style={{ position: isMobile ? 'static' : 'sticky', top: '120px' }}>
            <ApplicationForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
