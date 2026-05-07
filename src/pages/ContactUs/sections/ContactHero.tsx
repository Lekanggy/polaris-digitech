/**
 * ContactHero — Section 1 of Contact Us Page
 *
 * Design: Large heading on left, form card overlay on right over a background image
 * Background: Customer service representative image (blurred)
 * Form: White card with "Let's Work Together" heading + name, email, message fields
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
// ct.png should be placed in src/assets/ — using bgpro.png as fallback until added
import ctBg from '../../../assets/bgpro.png';

const satoshi = 'Satoshi, Inter, sans-serif';

export default function ContactHero() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      style={{
        background: '#FFFFFF',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: satoshi,
            fontWeight: 500,
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            color: '#010527',
            marginBottom: '48px',
            maxWidth: '720px',
          }}
        >
          Interested in our services, products, or a potential partnership?
        </motion.h1>

        {/* Image container with form overlay */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(400px, 50vw, 600px)',
            borderRadius: '32px',
            overflow: 'hidden',
            background: `url(${ctBg}) center/cover no-repeat`,
          }}
        >
          {/* Form card overlay — positioned on the left */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '48px',
              transform: 'translateY(-50%)',
              width: 'clamp(300px, 35%, 420px)',
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '32px 28px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            <h3
              style={{
                fontFamily: satoshi,
                fontWeight: 700,
                fontSize: '20px',
                color: '#010527',
                marginBottom: '8px',
              }}
            >
              Let's Work Together
            </h3>
            <p
              style={{
                fontFamily: satoshi,
                fontSize: '13px',
                color: '#6B7280',
                marginBottom: '24px',
                lineHeight: '1.5',
              }}
            >
              We're here to answer your questions and explore new possibilities.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontFamily: satoshi, fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: '#F5F6FA',
                    border: '1px solid transparent',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#1a1a1a',
                    fontFamily: satoshi,
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontFamily: satoshi, fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                  E-mail address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your e-mail address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: '#F5F6FA',
                    border: '1px solid transparent',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#1a1a1a',
                    fontFamily: satoshi,
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontFamily: satoshi, fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Let us know what you are interested in"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  required
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    background: '#F5F6FA',
                    border: '1px solid transparent',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#1a1a1a',
                    fontFamily: satoshi,
                    outline: 'none',
                    resize: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px',
                  background: '#283172',
                  color: '#fff',
                  fontFamily: satoshi,
                  fontWeight: 600,
                  fontSize: '14px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 200ms',
                  marginTop: '4px',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Send a message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
