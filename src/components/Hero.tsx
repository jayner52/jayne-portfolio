import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, MapPin, Dog, Download } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [showRiley, setShowRiley] = useState(false);

  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-hero)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
      }}
    >
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(139, 92, 246, 0.1)',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(6, 182, 212, 0.1)',
        filter: 'blur(80px)',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Headshot - Click for Riley Easter Egg */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              onClick={() => setShowRiley(!showRiley)}
              style={{
                width: 'clamp(180px, 22vw, 260px)',
                height: 'clamp(180px, 22vw, 260px)',
                borderRadius: '50%',
                margin: '0 auto 1.5rem',
                padding: '6px',
                background: 'var(--gradient-primary)',
                boxShadow: '0 0 60px rgba(139, 92, 246, 0.3), 0 0 120px rgba(6, 182, 212, 0.15)',
                cursor: 'pointer',
              }}
            >
              <img
                src="/headshot.jpg"
                alt="Jayne Ingram-Roberts"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid white',
                }}
              />
            </motion.div>

            {/* Riley Easter Egg */}
            <AnimatePresence>
              {showRiley && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '0.5rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '0.75rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    whiteSpace: 'nowrap',
                    zIndex: 10,
                  }}
                >
                  <Dog size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text)' }}>
                    <strong>Meet Riley!</strong> My bichonpoo and best friend
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--color-text-light)',
              marginBottom: '1.5rem',
            }}
          >
            <MapPin size={16} style={{ color: 'var(--color-primary)' }} />
            Toronto, Canada
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              color: 'var(--color-text)',
            }}
          >
            Jayne Ingram-Roberts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1.5rem',
            }}
          >
            CPA, CA
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: 500,
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-text)',
              marginBottom: '1.5rem',
              maxWidth: '800px',
              margin: '0 auto 1.5rem',
            }}
          >
            Customer Success & Account Management Leader
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              fontSize: '1.125rem',
              color: 'var(--color-text-light)',
              maxWidth: '700px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            Building and leading high-performing CS organizations — from individual contributors to Team Leads and managers. A people-first leader with a CPA foundation, a track record of enterprise growth, and a hands-on approach to AI innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-primary"
            >
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download="Jayne Ingram-Roberts Resume.pdf"
              className="btn btn-secondary"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="https://linkedin.com/in/jayneingram"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'center',
              padding: '1.5rem 2rem',
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: '1rem',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {[
              { value: '5x', label: "President's Club" },
              { value: '$30M', label: 'Portfolio Managed' },
              { value: '120%+', label: 'Quota Attainment' },
              { value: '7', label: 'Managers Led' },
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--color-text-light)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={handleScrollToAbout}
          style={{
            position: 'absolute',
            bottom: '-4rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-light)',
            cursor: 'pointer',
            animation: 'bounce 2s infinite',
          }}
        >
          <ArrowDown size={28} />
        </motion.button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
}
