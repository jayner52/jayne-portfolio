import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, Users, Heart, Mic, Shield, Trophy } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'CPA, CA',
    organization: 'CPA Ontario',
    description: 'Chartered Professional Accountant designation',
    category: 'Professional',
  },
  {
    icon: Trophy,
    title: 'Vena Core Award Recipient',
    organization: 'Vena Solutions',
    description: 'Recognition for exceptional contribution',
    category: 'Achievement',
  },
  {
    icon: BookOpen,
    title: 'LXO Leadership Onboarding',
    organization: 'Vena Solutions',
    description: 'Executive leadership development program',
    category: 'Leadership',
  },
  {
    icon: Users,
    title: 'LX Program',
    organization: 'Blue Rebel Works',
    description: 'Advanced leadership development',
    category: 'Leadership',
  },
  {
    icon: Mic,
    title: 'TalkMaster Certification',
    organization: 'Speaker Labs',
    description: 'Professional public speaking certification',
    category: 'Communication',
  },
  {
    icon: Heart,
    title: 'Mental Health First Aid',
    organization: 'MHFA Canada',
    description: '8-hour standard certification',
    category: 'Wellness',
  },
  {
    icon: Shield,
    title: 'Sandler Essentials Boot Camp',
    organization: 'Sandler Training',
    description: 'Completed 2x for sales methodology mastery',
    category: 'Sales',
  },
  {
    icon: BookOpen,
    title: 'MEDIC Certified',
    organization: 'Force Management',
    description: 'Enterprise sales qualification methodology',
    category: 'Sales',
  },
];

const categoryColors: Record<string, string> = {
  Professional: '#8B5CF6',
  Achievement: '#F59E0B',
  Leadership: '#06B6D4',
  Communication: '#10B981',
  Wellness: '#EC4899',
  Sales: '#6366F1',
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications & Development</h2>
          <p className="section-subtitle">
            Continuous investment in professional growth, leadership development, and specialized skills
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
        }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.25rem',
              }}
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: `${categoryColors[cert.category]}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: categoryColors[cert.category],
                flexShrink: 0,
              }}>
                <cert.icon size={22} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  marginBottom: '0.25rem',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {cert.title}
                </h3>
                <p style={{
                  fontSize: '0.8rem',
                  color: categoryColors[cert.category],
                  fontWeight: 500,
                  marginBottom: '0.25rem',
                }}>
                  {cert.organization}
                </p>
                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--color-text-light)',
                }}>
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
