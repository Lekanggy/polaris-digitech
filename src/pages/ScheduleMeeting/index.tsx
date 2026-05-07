import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/sections/Navbar';
import Footer from '../../components/sections/Footer';
import FAQAccordion from '../../components/shared/FAQAccordion';
import met from '../../assets/met.png';

const satoshi = 'Satoshi, Inter, sans-serif';

const SCHEDULE_FAQS = [
  {
    question: "How long does it take to schedule a meeting?",
    answer: "We typically respond to meeting requests within 24 hours. Once we confirm your availability, we'll send you a calendar invitation with all the details.",
  },
  {
    question: "What should I prepare for our meeting?",
    answer: "Please come prepared with your project goals, current challenges, and any specific requirements. Having a clear understanding of your objectives will help us provide the most relevant solutions.",
  },
  {
    question: "Can I reschedule or cancel a meeting?",
    answer: "Yes, you can reschedule or cancel up to 24 hours before the meeting. Please contact us directly through email or phone if you need to make changes.",
  },
  {
    question: "Do you offer virtual meetings?",
    answer: "Absolutely! We conduct meetings through various platforms including Zoom, Microsoft Teams, and Google Meet to accommodate your preferences.",
  },
  {
    question: "What happens after our meeting?",
    answer: "Following the meeting, we'll send you a summary of our discussion, proposed next steps, and any relevant documentation or proposals based on your project needs.",
  },
];

export default function ScheduleMeetingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyEmail: '',
    companyName: '',
    service: '',
    date: '',
    time: '',
    projectBrief: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.fullName || !formData.companyEmail || !formData.companyName || !formData.service) {
      alert('Please fill in all required fields');
      return;
    }
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Meeting scheduled successfully!');
  };

  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <Navbar />

      {/* Breadcrumb */}
      <div
        style={{
          paddingTop: '120px',
          paddingBottom: '40px',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#1E1E1E',
            fontFamily: 'General Sans, sans-serif',
            fontSize: '16px',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'color 200ms',
            lineHeight: '100%'
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#374151')}
          onMouseLeave={e => (e.currentTarget.style.color = '#1E1E1E')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          Back Home
        </Link>
      </div>

      {/* Main Content */}
      <div
        className="responsive-grid"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
          paddingBottom: '80px',
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '80px',
          alignItems: 'stretch'
        }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              .responsive-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
              .form-grid {
                grid-template-columns: 1fr !important;
                gap: 20px !important;
              }
              .image-section {
                minHeight: 400px !important;
                aspect-ratio: 632/724 !important;
              }
            }
          `
        }} />
        {/* Left Column: Image Section */}
        <div
          className="image-section"
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '600px',
            borderRadius: '40px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            backgroundImage: `url(${met})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingTop: '24px',
            paddingRight: '40px',
            paddingBottom: '24px',
            paddingLeft: '40px',
            gap: '10px',
            opacity: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 74%)'
            }}
          />

          {/* Headline text */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              color: '#FFFFFF',
              fontFamily: satoshi,
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 700,
              lineHeight: '1.1',
              maxWidth: '400px',
              zIndex: 1
            }}
          >
            Let's Map Out Your Project
          </div>
        </div>

        {/* Right Column: Form Section */}
        <div style={{ minWidth: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Form Header */}
          <div style={{ marginBottom: '32px' }}>
            <h1
              style={{
                fontFamily: satoshi,
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 700,
                color: '#1a1f3c',
                marginBottom: '8px'
              }}
            >
              Schedule a Meeting
            </h1>
            <p
              style={{
                fontFamily: satoshi,
                fontSize: '16px',
                fontWeight: 400,
                color: '#6B7280',
                lineHeight: '1.5'
              }}
            >
              Let's discuss your project and how our solutions can support your goals
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Full Name */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: satoshi,
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#3D3F58',
                  lineHeight: '150%',
                  marginBottom: '6px'
                }}
              >
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontFamily: satoshi,
                  fontSize: '14px',
                  color: '#374151',
                  backgroundColor: '#FFFFFF',
                  transition: 'border-color 200ms',
                  outline: 'none'
                }}
                onFocus={e => (e.target.style.borderColor = '#1a1f3c')}
                onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
              />
            </div>

            {/* Company Email and Company Name - Two Column */}
            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: satoshi,
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#374151',
                    marginBottom: '6px'
                  }}
                >
                  Company Email *
                </label>
                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  placeholder="Enter your company email"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontFamily: satoshi,
                    fontSize: '14px',
                    color: '#374151',
                    backgroundColor: '#FFFFFF',
                    transition: 'border-color 200ms',
                    outline: 'none'
                  }}
                  onFocus={e => (e.target.style.borderColor = '#1a1f3c')}
                  onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: satoshi,
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#374151',
                    marginBottom: '6px'
                  }}
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="What's your company name?"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontFamily: satoshi,
                    fontSize: '14px',
                    color: '#374151',
                    backgroundColor: '#FFFFFF',
                    transition: 'border-color 200ms',
                    outline: 'none'
                  }}
                  onFocus={e => (e.target.style.borderColor = '#1a1f3c')}
                  onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                />
              </div>
            </div>

            {/* Service of Interest */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: satoshi,
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#3D3F58',
                  lineHeight: '150%',
                  marginBottom: '6px'
                }}
              >
                Service of Interest *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontFamily: satoshi,
                  fontSize: '14px',
                  color: '#374151',
                  backgroundColor: '#FFFFFF',
                  transition: 'border-color 200ms',
                  outline: 'none',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 12px center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '16px',
                  paddingRight: '44px'
                }}
                onFocus={e => (e.target.style.borderColor = '#1a1f3c')}
                onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
              >
                <option value="">Select service</option>
                <option value="software-development">Software Development</option>
                <option value="land-surveying">Land Surveying</option>
                <option value="geospatial-data">Geospatial Data Acquisition</option>
                <option value="training-support">Training & Support</option>
                <option value="identity-intelligence">Identity Intelligence</option>
              </select>
            </div>

            {/* Preferred Meeting Date and Time - Two Column */}
            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: satoshi,
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#374151',
                    marginBottom: '6px'
                  }}
                >
                  Preferred Meeting Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontFamily: satoshi,
                    fontSize: '14px',
                    color: '#374151',
                    backgroundColor: '#FFFFFF',
                    transition: 'border-color 200ms',
                    outline: 'none'
                  }}
                  onFocus={e => (e.target.style.borderColor = '#1a1f3c')}
                  onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: satoshi,
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#374151',
                    marginBottom: '6px'
                  }}
                >
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontFamily: satoshi,
                    fontSize: '14px',
                    color: '#374151',
                    backgroundColor: '#FFFFFF',
                    transition: 'border-color 200ms',
                    outline: 'none'
                  }}
                  onFocus={e => (e.target.style.borderColor = '#1a1f3c')}
                  onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
                />
              </div>
            </div>

            {/* Project Brief */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: satoshi,
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#3D3F58',
                  lineHeight: '150%',
                  marginBottom: '6px'
                }}
              >
                Project Brief
              </label>
              <input
                type="text"
                name="projectBrief"
                value={formData.projectBrief}
                onChange={handleInputChange}
                placeholder="What project do you want to work on?"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontFamily: satoshi,
                  fontSize: '14px',
                  color: '#374151',
                  backgroundColor: '#FFFFFF',
                  transition: 'border-color 200ms',
                  outline: 'none'
                }}
                onFocus={e => (e.target.style.borderColor = '#1a1f3c')}
                onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
              />
            </div>

            {/* Message */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: satoshi,
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#3D3F58',
                  lineHeight: '150%',
                  marginBottom: '6px'
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Let us know how we can help"
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontFamily: satoshi,
                  fontSize: '14px',
                  color: '#374151',
                  backgroundColor: '#FFFFFF',
                  transition: 'border-color 200ms',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '100px'
                }}
                onFocus={e => (e.target.style.borderColor = '#1a1f3c')}
                onBlur={e => (e.target.style.borderColor = '#E5E7EB')}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px 18px',
                backgroundColor: '#1a1f3c',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontFamily: satoshi,
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 200ms'
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2a2f4c')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1a1f3c')}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQAccordion
        faqs={SCHEDULE_FAQS}
        description="Have questions about scheduling a meeting or our process? Here are answers to commonly asked questions to help you get started."
      />

      <Footer />
    </div>
  );
}