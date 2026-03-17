import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Users, Heart, Bike, Code } from 'lucide-react';

const activities = [
  {
    icon: Sparkles,
    title: 'Host, SheBuilds Toronto',
    description: 'Hosted SheBuilds Toronto — a live, in-person vibe coding event bringing together 90 women to build with AI. Organized and led the full event experience.',
    highlight: true,
  },
  {
    icon: Sparkles,
    title: 'Lovable SheBuilds Participant',
    description: 'Selected as 1 of 200 participants from 2,000+ applicants for this women-in-tech AI building program.',
    highlight: false,
  },
  {
    icon: Heart,
    title: 'Mental Health Advocate',
    description: 'Active member and advocate in Vena\'s Mental Health Group, promoting workplace wellness and psychological safety.',
    highlight: false,
  },
  {
    icon: Users,
    title: 'Vena Families Group',
    description: 'Volunteer coordinator supporting working parents and fostering community at Vena Solutions.',
    highlight: false,
  },
  {
    icon: Code,
    title: 'Captain, Vena Softball Team',
    description: 'Building team camaraderie and healthy competition through organized sports and social events.',
    highlight: false,
  },
  {
    icon: Bike,
    title: 'Grand Fondo Charity Cyclist',
    description: 'Two-time participant in Grand Fondo cycling events, raising funds for charitable causes.',
    highlight: false,
  },
];

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="community" className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Community & Leadership</h2>
          <p className="section-subtitle">
            Building connections, advocating for wellness, and giving back beyond the day job
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                padding: '1.5rem',
                background: activity.highlight ? 'var(--gradient-card)' : 'var(--color-white)',
                border: activity.highlight ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: activity.highlight ? 'var(--gradient-primary)' : 'var(--color-bg-alt)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: activity.highlight ? 'white' : 'var(--color-primary)',
                flexShrink: 0,
              }}>
                <activity.icon size={24} />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {activity.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-light)',
                  lineHeight: 1.6,
                }}>
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
