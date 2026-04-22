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
    <div style={{ textAlign: 'right' }}>
      <p
        style={{
          fontFamily: satoshi,
          fontWeight: 400,
          fontSize: 'clamp(56px, 7vw, 96px)',
          lineHeight: '100%',
          letterSpacing: '0',
          color: '#D7B56D',
          textAlign: 'right',
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
          textAlign: 'right',
        }}
      >
        {label}
      </p>
    </div>
  );
}
