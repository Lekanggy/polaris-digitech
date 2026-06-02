import React from 'react';
import { motion } from 'framer-motion';
import type { NavProductItem } from '../../../utils/constants';
import ShortArrow from './ShortArrow';
import ProductIcon from './ProductIcon';
import productbg from '../../../assets/productbg.png';

interface ProductsMegaMenuProps {
  items: NavProductItem[];
  partnerProducts: string[];
}

export default function ProductsMegaMenu({ items, partnerProducts }: ProductsMegaMenuProps) {
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
      {/* Panel 1 — background image + overlay + CTA */}
      <div
        style={{
          width: 'min(220px, 28%)',
          flexShrink: 0,
          position: 'relative',
          backgroundImage: `url(${productbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '28px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(4,10,61,0.85) 0%, rgba(4,10,61,0.70) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 700, fontSize: '20px', lineHeight: '130%', color: '#fff', marginBottom: '14px' }}>
            Our Products
          </h3>
          <p style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 400, fontSize: '15px', lineHeight: '160%', color: 'rgba(255,255,255,0.82)' }}>
            Curious about how our products can help you get things done? Reach out and let's show you.
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <a
            href="#contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#fff', fontFamily: 'Satoshi, Inter, sans-serif', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
          >
            <span>Get in touch</span>
            <span style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#D7B56D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff' }}>
              <ShortArrow />
            </span>
          </a>
        </div>
      </div>

      {/* Panel 2 — product cards (single column, colored bg) */}
      <div
        style={{
          width: 'min(300px, 38%)',
          flexShrink: 0,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          borderRight: '1px solid #F0F1F5',
        }}
      >
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '14px',
              borderRadius: '10px',
              backgroundColor: item.bg,
              textDecoration: 'none',
              transition: 'opacity 200ms, box-shadow 200ms',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ color: '#010527', display: 'flex', alignItems: 'center' }}>
                <ProductIcon name={item.icon} />
              </span>
              <span style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 600, fontSize: '16px', color: '#010527', lineHeight: '140%' }}>
                {item.title}
              </span>
            </div>
            <p style={{ fontFamily: 'Satoshi, Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#46485F', lineHeight: '155%', margin: 0 }}>
              {item.description}
            </p>
          </a>
        ))}
      </div>

      {/* Panel 3 — partners list */}
      <div style={{ flex: 1, padding: '20px 22px' }}>
        <h4
          style={{
            fontFamily: 'Satoshi, Inter, sans-serif',
            fontWeight: 700,
            fontSize: '13.5px',
            color: '#010527',
            marginBottom: '16px',
            letterSpacing: '0',
          }}
        >
          Our Partners' Product
        </h4>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {partnerProducts.map((name) => (
            <li key={name}>
              <a
                href="#"
                style={{
                  fontFamily: 'Satoshi, Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#46485F',
                  textDecoration: 'none',
                  transition: 'color 150ms',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#010527'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#46485F'; }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
