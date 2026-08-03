import { useCounter } from '../../hooks/useCounter';

const satoshi = 'Satoshi, Inter, sans-serif';

interface StatItemProps {
  value: number;
  label: string;
  start: boolean;
}

export default function StatItem({ value, label, start }: StatItemProps) {
  const count = useCounter(value, 2000, start);
  
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
      maxWidth: '320px', // Constrains width so it centers neatly in grid tracks
      margin: '0 auto',
    }}>
      <p
        style={{
          fontFamily: satoshi,
          fontWeight: 400,
          fontSize: 'clamp(48px, 7vw, 96px)',
          lineHeight: '100%',
          letterSpacing: '0',
          color: '#D7B56D',
        }}
      >
        {count}+
      </p>
      <p
        style={{
          fontFamily: satoshi,
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '150%',
          letterSpacing: '0',
          color: '#FFFFFF',
          marginTop: '12px',
        }}
      >
        {label}
      </p>
    </div>
  );
}