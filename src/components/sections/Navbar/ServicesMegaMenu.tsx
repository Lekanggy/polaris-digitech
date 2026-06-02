import React from 'react';
import { motion } from 'framer-motion';
import type { NavServiceItem } from '../../../utils/constants';
import ShortArrow from './ShortArrow';
import ServiceIcon from './ServiceIcon';
import servicebg from '../../../assets/servicebg.png';

interface ServicesMegaMenuProps {
  items: NavServiceItem[];
}

export default function ServicesMegaMenu({ items }: ServicesMegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.18 }}
      style={{
        width: 'min(780px, 92vw)',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        border: '1px solid rgba(255,255,255,0.1)',
        overflow: 'hidden',
        display: 'flex',
        background: '#fff',
      }}
    >
      {/* Left panel — background image + text overlay + CTA */}
      <div
        style={{
          width: 'min(220px, 28%)',
          flexShrink: 0,
          position: 'relative',
          backgroundImage: `url(${servicebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '28px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(160deg, rgba(4,10,61,0.82) 0%, rgba(4,10,61,0.72) 100%)',
          }}
        />

        {/* Text content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '130%',
              color: '#fff',
              marginBottom: '14px',
            }}
          >
            Our Services
          </h3>
          <p
            style={{
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '160%',
              color: 'rgba(255,255,255,0.82)',
            }}
          >
            Curious about how our products can help you get things done? Reach out and let's show you.
          </p>
        </div>

        {/* CTA */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: '#fff',
              fontFamily: 'Satoshi, Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <span>Get in touch</span>
            <span
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#D7B56D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: '#fff',
              }}
            >
              <ShortArrow />
            </span>
          </a>
        </div>
      </div>

      {/* Right panel — service cards grid */}
      <div
        style={{
          flex: 1,
          padding: '16px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          alignContent: 'start',
          background: '#fff',
        }}
      >
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            style={{
              display: 'block',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #E8EAF0',
              textDecoration: 'none',
              transition: 'border-color 200ms, box-shadow 200ms',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = '#D7B56D';
              el.style.boxShadow = '0 2px 12px rgba(215,181,109,0.15)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = '#E8EAF0';
              el.style.boxShadow = 'none';
            }}
          >
            {/* Icon + title row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ color: '#010527', display: 'flex', alignItems: 'center' }}>
                <ServiceIcon name={item.icon} />
              </span>
              <span
                style={{
                  fontFamily: 'Satoshi, Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#010527',
                  lineHeight: '140%',
                }}
              >
                {item.title}
              </span>
            </div>
            {/* Description */}
            <p
              style={{
                fontFamily: 'Satoshi, Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                color: '#6B7280',
                lineHeight: '155%',
                margin: 0,
              }}
            >
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
