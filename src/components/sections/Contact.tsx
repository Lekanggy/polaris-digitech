import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const satoshi = 'Satoshi, Inter, sans-serif';

const contactItems = [
  {
    label: 'You can email us here',
    value: 'info@polarisdigitech.net',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Give us a call',
    value: '+2348061515162, +2348074438880',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Get directions to our location',
    value: 'Suite C17, MKO Abiola Gardens Shopping Complex, Alausa Ikeja, Lagos, Nigeria.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M3 11L11 3M11 3H5M11 3V9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: '#F5F6FA',
    border: '1px solid transparent',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#1a1a1a',
    fontFamily: satoshi,
    outline: 'none',
    transition: 'border-color 200ms',
  };

  return (
    <section id="contact" ref={ref} style={{ background: '#EBECF6' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
        >

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontFamily: satoshi,
                fontWeight: 500,
                fontSize: 'clamp(28px, 4vw, 48px)',
                lineHeight: '120%',
                letterSpacing: '-0.02em',
                color: '#010527',
                marginBottom: '40px',
              }}
            >
              Interested in our services, products, or a potential partnership?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    background: '#EBECF6',
                    border: '1px solid #D1D3E7',
                    borderRadius: '12px',
                    padding: '16px',
                  }}
                >
                  {/* Left icon */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: '48px',
                      height: '48px',
                      minWidth: '48px',
                      background: '#D9DBEF',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#46485F',
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: satoshi, fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: satoshi, fontSize: '14px', fontWeight: 500, color: '#010527', lineHeight: '1.4' }}>
                      {item.value}
                    </p>
                  </div>

                  {/* Right arrow button */}
                  <button
                    aria-label="Open"
                    style={{
                      flexShrink: 0,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: '1px solid #D1D3E7',
                      background: 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                      cursor: 'pointer',
                    }}
                  >
                    <ArrowIcon />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column — form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              }}
            >
              <h3
                style={{
                  fontFamily: satoshi,
                  fontWeight: 700,
                  fontSize: '20px',
                  color: '#010527',
                  marginBottom: '6px',
                }}
              >
                Let's Work Together
              </h3>
              <p style={{ fontFamily: satoshi, fontSize: '14px', color: '#6b7280', marginBottom: '24px', lineHeight: '1.5' }}>
                We're here to answer your questions and explore new possibilities.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: satoshi, fontSize: '14px', color: '#374151' }}>Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: satoshi, fontSize: '14px', color: '#374151' }}>E-mail address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your e-mail address"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: satoshi, fontSize: '14px', color: '#374151' }}>Message</label>
                  <textarea
                    name="message"
                    placeholder="Let us know what you are interested in"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: '#283172',
                    color: '#fff',
                    fontFamily: satoshi,
                    fontWeight: 600,
                    fontSize: '14px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 200ms',
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
      </div>
    </section>
  );
}
