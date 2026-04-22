interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-block px-4 py-1.5 text-sm font-medium border border-secondary text-secondary rounded-full ${className}`}>
      {children}
    </span>
  );
}
