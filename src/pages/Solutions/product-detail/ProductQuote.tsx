import { useMediaQuery } from '../../../hooks/useMediaQuery';

const satoshi = 'Satoshi, Inter, sans-serif';

interface ProductQuoteProps {
  image: string;
  quote: string;
}

export default function ProductQuote({ image, quote }: ProductQuoteProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: isMobile ? '400px' : '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(102, 102, 102, 0.6) 0%, rgba(0, 0, 0, 0.6) 62.5%)',
        }}
      />

      {/* Centered quote text */}
      <p
        style={{
          position: 'relative',
          zIndex: 1,
          fontFamily: satoshi,
          fontWeight: 500,
          fontSize: isMobile ? 'clamp(20px, 5vw, 28px)' : '36px',
          lineHeight: '150%',
          letterSpacing: '-0.02em',
          textAlign: 'center',
          color: '#FFFFFF',
          maxWidth: '900px',
          padding: '80px clamp(24px, 5vw, 80px)',
        }}
      >
        {quote}
      </p>
    </section>
  );
}
