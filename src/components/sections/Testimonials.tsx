import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import type { Testimonial } from '../../services/queries/homeQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Hardcoded fallback testimonials — preserved ────────────────────────────
const fallbackTestimonials = [
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

interface TestimonialsProps {
  data?: Testimonial[];
}

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="#D7B56D">
    <path d="M9.333 21.333c-3.68 0-6.666-2.986-6.666-6.666C2.667 10.987 5.653 8 9.333 8c.747 0 1.467.12 2.134.347C10.4 9.6 9.333 11.52 9.333 13.333v8zm13.334 0c-3.68 0-6.667-2.986-6.667-6.666C16 10.987 18.987 8 22.667 8c.746 0 1.466.12 2.133.347C23.733 9.6 22.667 11.52 22.667 13.333v8z" />
  </svg>
);

interface TestimonialCardProps {
  testimonial: {
    id?: string | number;
    text?: string;
    author?: string;
    company?: string;
  };
  delay: number;
  isVisible: boolean;
  large?: boolean;
}

function TestimonialCard({ testimonial, delay, isVisible, large = false }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{
        background: '#fff',
        borderRadius: '16px',
        padding: large ? '32px' : '24px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: large ? '16px' : '12px',
        height: '100%',
      }}
    >
      <QuoteIcon />
      <p
        style={{
          fontFamily: satoshi,
          fontSize: '14px',
          lineHeight: '1.6',
          color: '#6b7280',
          flex: 1,
          paddingTop: '8px',
        }}
      >
        {testimonial.text}
      </p>
      <div
        style={{
          borderTop: '1px solid #f3f4f6',
          paddingTop: large ? '16px' : '12px',
        }}
      >
        <p style={{ fontFamily: satoshi, fontSize: '12px', color: '#9ca3af', marginBottom: '4px' }}>
          {testimonial.author}
        </p>
        <p style={{ fontFamily: satoshi, fontSize: '14px', fontWeight: 700, color: '#283172' }}>
          {testimonial.company}
        </p>
      </div>
    </motion.div>
  );
}

export default function Testimonials({ data }: TestimonialsProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Use CMS testimonials when available; fall back to hardcoded list.
  // The layout expects at least 4 slots — pad with fallbacks if CMS has fewer.
  const raw = data && data.length > 0 ? data : fallbackTestimonials;
  const testimonials = [
    raw[0] ?? fallbackTestimonials[0],
    raw[1] ?? fallbackTestimonials[1],
    raw[2] ?? fallbackTestimonials[2],
    raw[3] ?? fallbackTestimonials[3],
  ];

  return (
    <section id="testimonials" ref={ref} style={{ background: '#EBECF6' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          <h2
            style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: 'clamp(28px, 4vw, 48px)',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#010527',
              marginBottom: '12px',
            }}
          >
            Trusted By Industry Leaders
          </h2>
          <p
            style={{
              fontFamily: satoshi,
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '150%',
              letterSpacing: '0',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            See how our clients use geospatial technology to transform operations and make smarter decisions.
          </p>
        </motion.div>

        {/* Grid Layout: 2 columns - left narrower, right wider; stacks on mobile */}
        <div
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '0.85fr 1.15fr',
            gap: '20px',
          }}
        >
          {/* Left Column: MTN card (standalone, full height) */}
          <TestimonialCard testimonial={testimonials[0]} delay={0.1} isVisible={isVisible} large />

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Row 1: Large LagFerry card */}
            <TestimonialCard testimonial={testimonials[1]} delay={0.2} isVisible={isVisible} large />

            {/* Row 2: Two small cards side by side */}
            <div className="testimonials-inner-grid" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
              <TestimonialCard testimonial={testimonials[2]} delay={0.3} isVisible={isVisible} />
              <TestimonialCard testimonial={testimonials[3]} delay={0.4} isVisible={isVisible} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
