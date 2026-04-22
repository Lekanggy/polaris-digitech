import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import pol1 from '../../../assets/pol1.png';

const satoshi = 'Satoshi, Inter, sans-serif';

// ── Icons ──────────────────────────────────────────────────────────────────
function MissionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="8" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="2" y1="12" x2="8" y2="12" />
      <line x1="16" y1="12" x2="22" y2="12" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D7B56D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CultureIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#D7B56D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

// ── Mission / Vision card ──────────────────────────────────────────────────
interface VMCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  delay: number;
  isVisible: boolean;
}

function VMCard({ icon, title, body, delay, isVisible }: VMCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{
        width: '433px',
        minHeight: '334px',
        borderRadius: '40px',
        paddingTop: '26px',
        paddingRight: '22px',
        paddingBottom: '26px',
        paddingLeft: '22px',
        backgroundColor: '#F0F5FF',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        boxSizing: 'border-box',
        alignSelf: 'center',
      }}
    >
      {/* Icon + title row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {icon}
        </span>
        <h3
          style={{
            fontFamily: satoshi,
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '130%',
            color: '#010527',
            margin: 0,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Body text */}
      <p
        style={{
          fontFamily: satoshi,
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '150%',
          letterSpacing: '0',
          color: '#46485F',
          margin: 0,
        }}
      >
        {body}
      </p>
    </motion.div>
  );
}

// ── Center image card ──────────────────────────────────────────────────────
function CultureCard({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      style={{
        width: '433px',
        borderRadius: '40px',
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
        alignSelf: 'flex-start',
        marginTop: '-48px',
      }}
    >
      {/* Photo */}
      <img
        src={pol1}
        alt="Our Culture"
        style={{ width: '100%', display: 'block', objectFit: 'cover' }}
      />

      {/* Bottom overlay — icon + title + text */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: '25%',
          background: 'linear-gradient(180deg, rgba(11, 19, 83, 0) 10.58%, rgba(11, 19, 83, 0.850962) 52.4%, #01062F 100%)',
          padding: '28px 22px 26px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: '10px',
        }}
      >
        {/* Icon + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <CultureIcon size={32} />
          </span>
          <h3
            style={{
              fontFamily: satoshi,
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '140%',
              letterSpacing: '0',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Our Culture
          </h3>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: satoshi,
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '150%',
            letterSpacing: '0',
            color: 'rgba(255,255,255,0.82)',
            margin: 0,
          }}
        >
          Our culture revolves around harnessing the potential of location intelligence, Geo-spatial solutions, Software Development, and Geographic Information Systems. We are dedicated to delivering innovative, reliable, and User-Centric solutions that empower businesses and enables better decision making in a rapidly evolving technological landscape.
        </p>
      </div>
    </motion.div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────
export default function VisionMission() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      style={{
        background: 'rgba(1,5,39,1)',
        paddingBottom: '0',
      }}
    >
      {/* Full-width white container — top-left + top-right radius 40px creates the visible curve against the dark hero above */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '40px 40px 0 0',
          width: '100%',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Three-card row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {/* Mission */}
          <VMCard
            icon={<MissionIcon />}
            title="Our Mission"
            body="Our mission is to enhance the quality of relationships with our clients in order to promote a high level of integrity, customer satisfaction, and employee empowerment to achieve optimal organizational productivity. We are committed to building long-term relationships based on sustainable values, providing technical support, training, customized applications development and project consulting services."
            delay={0.1}
            isVisible={isVisible}
          />

          {/* Culture — center, taller, rises above */}
          <CultureCard isVisible={isVisible} />

          {/* Vision */}
          <VMCard
            icon={<VisionIcon />}
            title="Our Vision"
            body="Our Vision is to be a dominant Twenty-First Century Surveying and Geographical Information Technology Company, spearheading the growth of a new phenomenon in the Nigerian Geo-Spatial Data Industry by using Location and Information-rich Data to revolutionize the way individuals and organizations conduct business."
            delay={0.3}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
}
