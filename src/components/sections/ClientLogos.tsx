import cli1 from '../../assets/cli1.png';
import cli2 from '../../assets/cli2.png';
import cli3 from '../../assets/cli3.png';
import cli4 from '../../assets/cli4.png';
import cli5 from '../../assets/cli5.png';
import cli6 from '../../assets/cli6.png';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import type { ClientData } from '../../services/queries/homeQuery';
import { strapiUrl } from '../../services/queries/homeQuery';

// Hardcoded fallback logos — preserved
const fallbackLogos = [
  { src: cli1, alt: 'Google' },
  { src: cli2, alt: 'Precisely' },
  { src: cli3, alt: 'Here' },
  { src: cli4, alt: 'Oracle' },
  { src: cli5, alt: 'SuperMap' },
  { src: cli6, alt: 'Airbus' },
];

interface ClientLogosProps {
  data?: ClientData;
}

export default function ClientLogos({ data }: ClientLogosProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Use CMS images when available, otherwise fall back to local assets
  const logos =
    data?.clientImage && data.clientImage.length > 0
      ? data.clientImage.map((img) => ({
          src: strapiUrl(img.url) ?? img.url,
          alt: img.name ?? 'Client logo',
        }))
      : fallbackLogos;

  // Triple for seamless infinite loop
  const track = [...logos, ...logos, ...logos];
  return (
    /* Section: height 172px, bg #EBECF6, px 122px, py 47px */
    <section
      aria-label="Client logos"
      className="overflow-hidden"
      style={{
        backgroundColor: '#EBECF6',
        paddingTop: isMobile ? '24px' : '40px',
        paddingBottom: isMobile ? '24px' : '40px',
      }}
    >
      {/* Scrolling track — no padding on the track itself, padding is on the section */}
      <div
        className="flex items-center animate-scroll"
        style={{ width: 'max-content', gap: '10px' }}
      >
        {track.map((logo, i) => (
          <div
            key={i}
            className="flex items-center justify-center shrink-0 client-logo-item"
            style={{ paddingLeft: isMobile ? '30px' : '60px', paddingRight: isMobile ? '30px' : '60px' }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ width: isMobile ? '64px' : '87px', height: isMobile ? '38px' : '52px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
