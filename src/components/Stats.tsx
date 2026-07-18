import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { DollarSign, Award, Target, Users, TrendingUp, Layers } from 'lucide-react';
import RevealText from './RevealText';

const DARK = '#1A1510';
const CARD_BG = 'rgba(255,255,255,0.055)';
const CARD_BORDER = 'rgba(255,255,255,0.09)';
const TEXT = '#FAF8F2';
const MUTED = 'rgba(250,248,242,0.58)';
const ICON_BG = 'rgba(194,139,90,0.14)';
const ICON_COLOR = '#C28B5A';

const stats = [
  { icon: DollarSign, value: 30,  suffix: 'M', prefix: '$', label: 'Portfolio Managed',   description: 'Enterprise customer portfolio with strategic account management' },
  { icon: Target,     value: 120, suffix: '%+', prefix: '', label: 'Quota Attainment',     description: '5 consecutive years of exceeding targets' },
  { icon: Award,      value: 5,   suffix: 'x', prefix: '',  label: "President's Club",     description: 'Consistent top performer recognition' },
  { icon: TrendingUp, value: 3,   suffix: 'M', prefix: '$', label: 'Annual Expansion',     description: '120%+ attainment for 6+ consecutive years' },
  { icon: Users,      value: 7,   suffix: '',  prefix: '',   label: 'AMs Led',              description: 'Hired and developed Account Managers from zero to high performers, including a Team Lead' },
  { icon: Layers,     value: 7,   suffix: '',  prefix: '',   label: 'Industry Verticals',   description: 'GTM motions across diverse sectors' },
];

function AnimatedCounter({ value, prefix, suffix, isInView }: { value: number; prefix: string; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else { setCount(Math.floor(current)); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, isInView]);
  return <span>{prefix}{count}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="section" style={{
      background: `
        radial-gradient(ellipse at 15% 60%, rgba(194,139,90,0.13) 0%, transparent 50%),
        radial-gradient(ellipse at 85% 10%, rgba(122,74,40,0.09) 0%, transparent 45%),
        ${DARK}
      `,
    }}>
      <div className="container" ref={ref}>
        <div>
          <RevealText className="section-title" style={{ color: TEXT }}>Proven Impact</RevealText>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ color: MUTED }}
          >
            A track record of driving growth, developing managers, and exceeding targets at enterprise scale
          </motion.p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.33, 1, 0.68, 1] }}
              style={{
                background: CARD_BG,
                border: `1px solid ${CARD_BORDER}`,
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.25s ease, transform 0.25s cubic-bezier(0.33,1,0.68,1), box-shadow 0.25s ease',
              }}
              whileHover={{ y: -5, borderColor: 'rgba(194,139,90,0.4)', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' } as never}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--gradient-primary)' }} />
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: ICON_BG, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: ICON_COLOR }}>
                <stat.icon size={24} />
              </div>
              <div style={{ fontSize: '2.75rem', fontWeight: 700, fontFamily: 'var(--font-serif)', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.375rem', lineHeight: 1 }}>
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} isInView={isInView} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: TEXT, marginBottom: '0.375rem', fontFamily: 'var(--font-sans)' }}>{stat.label}</h3>
              <p style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.5 }}>{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
