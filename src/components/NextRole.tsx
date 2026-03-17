import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Compass, Sparkles, Users, TrendingUp, Lightbulb } from 'lucide-react';

const pillars = [
  {
    icon: Sparkles,
    title: 'AI-Forward Organization',
    description: 'A company at the frontier of AI where I can help customers adopt transformative technology responsibly and successfully.',
    color: '#8B5CF6',
  },
  {
    icon: Users,
    title: 'People Leadership',
    description: 'The opportunity to lead as a second-line manager — building and coaching managers, developing Team Leads, and scaling high-performing CS organizations.',
    color: '#06B6D4',
  },
  {
    icon: TrendingUp,
    title: 'Enterprise Impact',
    description: 'Strategic accounts where I can drive meaningful expansion and retention outcomes at scale, with real influence on business results.',
    color: '#10B981',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Culture',
    description: 'An environment that values experimentation, continuous learning, and building new things, where curiosity is celebrated.',
    color: '#F59E0B',
  },
];

export default function NextRole() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="next-role" className="section" style={{
      background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-white) 100%)',
    }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}>
            <Compass size={32} style={{ color: 'var(--color-primary)' }} />
            <h2 className="section-title" style={{ marginBottom: 0 }}>What I'm Looking For</h2>
          </div>
          <p className="section-subtitle">
            The qualities that define my ideal next opportunity
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}>
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
              style={{
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: pillar.color,
              }} />

              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: `${pillar.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                color: pillar.color,
              }}>
                <pillar.icon size={28} />
              </div>

              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-sans)',
              }}>
                {pillar.title}
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-light)',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Personal Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'var(--gradient-card)',
            borderRadius: '1rem',
          }}
        >
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            I'm energized by the intersection of <strong>people leadership</strong> and <strong>technology innovation</strong>.
            I want to be at a company where customer success isn't just a department - it's a strategic priority
            that shapes the product, the culture, and the future. If that sounds like your organization,
            let's talk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
