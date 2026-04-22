import cli1 from '../../assets/cli1.png';
import cli2 from '../../assets/cli2.png';
import cli3 from '../../assets/cli3.png';
import cli4 from '../../assets/cli4.png';
import cli5 from '../../assets/cli5.png';
import cli6 from '../../assets/cli6.png';

const logos = [
  { src: cli1, alt: 'Google' },
  { src: cli2, alt: 'Precisely' },
  { src: cli3, alt: 'Here' },
  { src: cli4, alt: 'Oracle' },
  { src: cli5, alt: 'SuperMap' },
  { src: cli6, alt: 'Airbus' },
];

// Triple for seamless infinite loop
const track = [...logos, ...logos, ...logos];

export default function ClientLogos() {
  return (
    /* Section: height 172px, bg #EBECF6, px 122px, py 47px */
    <section
      aria-label="Client logos"
      className="overflow-hidden"
      style={{
        backgroundColor: '#EBECF6',
        paddingTop: '40px',
        paddingBottom: '40px',
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
            className="flex items-center justify-center shrink-0"
            style={{ paddingLeft: '60px', paddingRight: '60px' }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ width: '87px', height: '52px', objectFit: 'contain' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
