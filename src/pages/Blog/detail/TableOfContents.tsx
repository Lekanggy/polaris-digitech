/**
 * TableOfContents — Sticky right-side card
 *
 * Design (matches attached image):
 *   • Dark navy card (#0B1353), rounded corners
 *   • "Table of Content" heading — white, bold, large
 *   • Each item: circle dot (left) + label (right)
 *   • Active item: outer ring (gold border) + inner filled dot (gold) + white bold text
 *   • Inactive items: outer ring (muted border) + inner dot (muted) + grey text
 *   • Dashed vertical line connecting all dots
 *   • Horizontal dashed separator between items
 *   • Card is sticky — does NOT scroll internally
 *   • Page scrolls freely; TOC stays fixed in its column
 */
import { useEffect, useRef, useState } from 'react';
import type { BlogSection } from '../blogData';

const satoshi = 'Satoshi, Inter, sans-serif';

const CARD_BG        = '#0B1353';
const ACTIVE_RING    = '#D7B56D';   // gold outer ring
const ACTIVE_DOT     = '#D7B56D';   // gold inner dot
const INACTIVE_RING  = '#2E3D7A';   // muted blue ring
const INACTIVE_DOT   = '#4A5A9A';   // muted inner dot
const DASH_LINE      = '#2A3870';   // dashed connector line
const SEPARATOR      = '#1E2D6A';   // horizontal dashed separator
const ACTIVE_TEXT    = '#FFFFFF';
const INACTIVE_TEXT  = '#7B8FC4';

interface TableOfContentsProps {
  sections: BlogSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const tocSectionsRef = useRef<BlogSection[]>([]);
  tocSectionsRef.current = sections.filter(s => s.heading.trim() !== '');
  const tocSections = tocSectionsRef.current;

  // ── Scroll-spy ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (tocSections.length === 0) return;
    setActiveId(tocSections[0].id);

    const visibleMap = new Map<string, boolean>();

    const observers = tocSections.map(section => {
      const el = document.getElementById(`section-${section.id}`);
      if (!el) return null;

      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(e => visibleMap.set(section.id, e.isIntersecting));
          const first = tocSections.find(s => visibleMap.get(s.id));
          if (first) setActiveId(first.id);
        },
        { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
      );

      obs.observe(el);
      return obs;
    });

    return () => observers.forEach(o => o?.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  // ── Smooth scroll on click ────────────────────────────────────────────────
  const scrollTo = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (tocSections.length === 0) return null;

  return (
    <div
      style={{
        background: CARD_BG,
        borderRadius: '20px',
        padding: '28px 22px 24px',
        // Sticky — stays in column, page scrolls freely, card does NOT scroll
        position: 'sticky',
        top: '120px',
        // No maxHeight, no overflowY — card never scrolls
      }}
    >
      {/* ── Heading ── */}
      <h3
        style={{
          fontFamily: satoshi,
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '130%',
          color: ACTIVE_TEXT,
          marginBottom: '28px',
        }}
      >
        Table of Content
      </h3>

      {/* ── Timeline list ── */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {tocSections.map((section, index) => {
          const isActive = activeId === section.id;
          const isLast   = index === tocSections.length - 1;

          return (
            <div key={section.id}>
              {/* ── Row: dot + label ── */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>

                {/* Left column: dot + dashed line below */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                    width: '22px',
                  }}
                >
                  {/* Outer ring + inner dot */}
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      border: `2px solid ${isActive ? ACTIVE_RING : INACTIVE_RING}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'border-color 300ms',
                      marginTop: '1px',
                    }}
                  >
                    <div
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: isActive ? ACTIVE_DOT : INACTIVE_DOT,
                        transition: 'background 300ms',
                      }}
                    />
                  </div>

                  {/* Dashed vertical line to next item */}
                  {!isLast && (
                    <div
                      style={{
                        width: '2px',
                        // Use a repeating gradient to simulate a dashed line
                        background: `repeating-linear-gradient(
                          to bottom,
                          ${DASH_LINE} 0px,
                          ${DASH_LINE} 4px,
                          transparent 4px,
                          transparent 8px
                        )`,
                        flex: 1,
                        minHeight: '20px',
                        marginTop: '4px',
                        marginBottom: '4px',
                      }}
                    />
                  )}
                </div>

                {/* Label */}
                <button
                  onClick={() => scrollTo(section.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0',
                    paddingBottom: isLast ? '0' : '4px',
                    textAlign: 'left',
                    fontFamily: satoshi,
                    fontWeight: isActive ? 700 : 400,
                    fontSize: '14px',
                    lineHeight: '150%',
                    color: isActive ? ACTIVE_TEXT : INACTIVE_TEXT,
                    transition: 'color 250ms',
                    flex: 1,
                    minWidth: 0,
                    marginTop: '2px',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = '#A8B8D8';
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = INACTIVE_TEXT;
                  }}
                >
                  {section.heading}
                </button>
              </div>

              {/* Horizontal dashed separator between items */}
              {!isLast && (
                <div
                  style={{
                    height: '1px',
                    margin: '12px 0 12px 36px',
                    background: `repeating-linear-gradient(
                      to right,
                      ${SEPARATOR} 0px,
                      ${SEPARATOR} 6px,
                      transparent 6px,
                      transparent 12px
                    )`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
