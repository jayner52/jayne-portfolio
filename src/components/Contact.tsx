import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Copy, Check } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('ingram.jayne@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <section id="contact" className="section" style={{
      background: 'var(--gradient-hero)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Interested in discussing customer success leadership, AI innovation, or potential opportunities?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
        }} className="contact-grid">

          {/* Email card — copy on click */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0 }}
            style={{ position: 'relative' }}
          >
            <a
              href="mailto:ingram.jayne@gmail.com"
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
              }}>
                <Mail size={22} />
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>
                  Email
                </p>
                <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text)', wordBreak: 'break-word' }}>
                  ingram.jayne@gmail.com
                </p>
              </div>
            </a>
            {/* Copy button */}
            <button
              onClick={handleCopyEmail}
              title="Copy email"
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                width: '28px',
                height: '28px',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                background: 'var(--bg-surface)',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-muted)';
              }}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <Check size={14} />
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                    <Copy size={14} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            {/* Copied tooltip */}
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  style={{
                    position: 'absolute',
                    top: '-2rem',
                    right: 0,
                    background: 'var(--text-primary)',
                    color: 'var(--bg-pure)',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                  }}
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <a
              href="https://linkedin.com/in/jayneingram"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
              }}>
                <Linkedin size={22} />
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>LinkedIn</p>
                <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text)', wordBreak: 'break-word' }}>
                  Connect with me
                </p>
              </div>
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <a
              href="tel:+16479205272"
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
              }}>
                <Phone size={22} />
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>Phone</p>
                <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text)' }}>647-920-5272</p>
              </div>
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                flexShrink: 0,
              }}>
                <MapPin size={22} />
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>Location</p>
                <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text)' }}>Toronto, Canada</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <a
            href="mailto:ingram.jayne@gmail.com?subject=Let's Connect&body=Hi Jayne,%0D%0A%0D%0AI came across your portfolio and would love to connect..."
            className="btn btn-primary"
            style={{
              fontSize: '1.1rem',
              padding: '1rem 2rem',
            }}
          >
            <Send size={20} />
            Send Me a Message
          </a>

          <p style={{
            marginTop: '2rem',
            fontSize: '0.95rem',
            color: 'var(--color-text)',
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '1.25rem 1.5rem',
            borderRadius: '0.75rem',
            maxWidth: '520px',
            margin: '2rem auto 0',
            lineHeight: 1.6,
          }}>
            <strong>Open to CS leadership roles at AI-native companies</strong> building something
            that matters. I bring a builder's instinct, a second-line leadership track record,
            and a genuine obsession with making customers successful. If you're building the future, let's talk.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
