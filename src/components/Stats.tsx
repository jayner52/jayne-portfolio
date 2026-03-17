import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { DollarSign, Award, Target, Users, TrendingUp, Layers } from 'lucide-react';

const stats = [
  {
    icon: DollarSign,
    value: 30,
    suffix: 'M',
    prefix: '$',
    label: 'Portfolio Managed',
    description: 'Enterprise customer portfolio with strategic account management',
  },
  {
    icon: Target,
    value: 120,
    suffix: '%+',
    prefix: '',
    label: 'Quota Attainment',
    description: '5 consecutive years of exceeding targets',
  },
  {
    icon: Award,
    value: 5,
    suffix: 'x',
    prefix: '',
    label: "President's Club",
    description: 'Consistent top performer recognition',
  },
  {
    icon: TrendingUp,
    value: 3,
    suffix: 'M',
    prefix: '$',
    label: 'Annual Expansion',
    description: '100%+ attainment for 6+ consecutive years',
  },
  {
    icon: Users,
    value: 7,
    suffix: '',
    prefix: '',
    label: 'Direct Reports',
    description: 'Hired and developed AMs from zero CS experience to high performers, including a Team Lead',
  },
  {
    icon: Layers,
    value: 7,
    suffix: '',
    prefix: '',
    label: 'Industry Verticals',
    description: 'GTM motions across diverse sectors',
  },
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
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="section" style={{
      background: 'linear-gradient(180deg, var(--color-white) 0%, var(--color-bg) 100%)',
    }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Proven Impact</h2>
          <p className="section-subtitle">
            A track record of driving growth, developing managers, and exceeding targets at enterprise scale
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
              style={{
                textAlign: 'center',
                padding: '2rem',
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
                background: 'var(--gradient-primary)',
              }} />

              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'var(--gradient-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'var(--color-primary)',
              }}>
                <stat.icon size={28} />
              </div>

              <div style={{
                fontSize: '3rem',
                fontWeight: 700,
                fontFamily: 'var(--font-serif)',
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem',
                lineHeight: 1,
              }}>
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>

              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-sans)',
              }}>
                {stat.label}
              </h3>

              <p style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-light)',
              }}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
