import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useCounter } from '../../hooks/useCounter';
import Badge from '../ui/Badge';

function StatItem({ value, label, start }: { value: number; label: string; start: boolean }) {
  const count = useCounter(value, 2000, start);
  return (
    <div className="text-center">
      <p className="text-5xl font-bold text-secondary mb-2">{count}+</p>
      <p className="text-white/70 text-sm">{label}</p>
    </div>
  );
}

export default function AboutStats() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" ref={ref} className="relative py-24">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6">About Polaris Digitech Limited</Badge>
          <h2 className="text-white font-bold text-2xl md:text-4xl leading-snug mb-8 max-w-3xl mx-auto">
            We help organizations make smarter decisions with geospatial technology, trusted expertise, and solutions built for impact.
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary-2 font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:scale-[1.02] mb-16"
          >
            Schedule a meeting →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 border-t border-white/20 pt-12"
        >
          <StatItem value={40} label="No of Corporate Clients" start={isVisible} />
          <StatItem value={300} label="Full-time & Field Employees" start={isVisible} />
          <StatItem value={85} label="Projects, Products, Services" start={isVisible} />
        </motion.div>
      </div>
    </section>
  );
}
