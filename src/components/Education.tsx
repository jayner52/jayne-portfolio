import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Globe, Award } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    institution: "Queen's University",
    location: 'Kingston, Ontario',
    degrees: [
      {
        title: 'Bachelor of Commerce (Honours)',
        detail: 'Smith School of Business',
      },
      {
        title: 'Graduate Diploma in Accounting',
        detail: 'Professional accounting program',
      },
    ],
  },
  {
    icon: Globe,
    institution: 'SKEMA Business School',
    location: 'France',
    degrees: [
      {
        title: 'International Exchange Program',
        detail: 'Global business perspective and cross-cultural experience',
      },
    ],
  },
  {
    icon: Award,
    institution: 'CPA Ontario',
    location: 'Toronto, Ontario',
    degrees: [
      {
        title: 'CPA, CA Designation',
        detail: 'Chartered Professional Accountant',
      },
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            A strong foundation in commerce, accounting, and global business
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="card"
              style={{
                textAlign: 'center',
                padding: '2rem',
              }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'white',
              }}>
                <edu.icon size={32} />
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '0.25rem',
              }}>
                {edu.institution}
              </h3>

              <p style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-light)',
                marginBottom: '1.25rem',
              }}>
                {edu.location}
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
                {edu.degrees.map((degree, degIndex) => (
                  <div
                    key={degIndex}
                    style={{
                      padding: '0.75rem',
                      background: 'var(--color-bg-alt)',
                      borderRadius: '0.5rem',
                    }}
                  >
                    <p style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: '0.25rem',
                      fontFamily: 'var(--font-sans)',
                    }}>
                      {degree.title}
                    </p>
                    <p style={{
                      fontSize: '0.8rem',
                      color: 'var(--color-text-light)',
                    }}>
                      {degree.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
