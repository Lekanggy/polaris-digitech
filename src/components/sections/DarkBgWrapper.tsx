import bgpro from '../../assets/bgpro.png';

interface DarkBgWrapperProps {
  children: React.ReactNode;
}

export default function DarkBgWrapper({ children }: DarkBgWrapperProps) {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${bgpro})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-primary-2/88" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
