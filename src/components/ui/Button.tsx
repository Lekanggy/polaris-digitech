import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  href,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 cursor-pointer';

  const variants = {
    primary: 'bg-[#D7B56D] text-[#010527] hover:bg-[#c9a55d]',
    secondary: 'bg-[#283172] text-white hover:bg-[#1e2558]',
    outline: 'border border-white text-white hover:bg-white hover:text-[#010527]',
    ghost: 'text-[#283172] hover:text-[#D7B56D]',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
