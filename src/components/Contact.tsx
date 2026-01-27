import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ingram.jayne@gmail.com',
    href: 'mailto:ingram.jayne@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://linkedin.com/in/jayneingram',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '647-920-5272',
    href: 'tel:+16479205272',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Toronto, Canada',
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section" style={{
      background: 'var(--gradient-hero)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(139, 92, 246, 0.1)',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'rgba(6, 182, 212, 0.1)',
        filter: 'blur(50px)',
      }} />

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
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {info.href ? (
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
                    <info.icon size={22} />
                  </div>
                  <div>
                    <p style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-text-light)',
                      marginBottom: '0.25rem',
                    }}>
                      {info.label}
                    </p>
                    <p style={{
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                      wordBreak: 'break-word',
                    }}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ) : (
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
                    <info.icon size={22} />
                  </div>
                  <div>
                    <p style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-text-light)',
                      marginBottom: '0.25rem',
                    }}>
                      {info.label}
                    </p>
                    <p style={{
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--color-text)',
                    }}>
                      {info.value}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
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
            <strong>Open to Customer Success and Account Management leadership roles</strong> at
            AI-forward companies. I believe in selling on value and building teams that deliver
            meaningful results. If you're building something exciting, let's connect.
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
