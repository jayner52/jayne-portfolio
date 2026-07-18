import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, ChevronRight, Sparkles, Layers, TrendingUp } from 'lucide-react';
import RevealText from './RevealText';

const venaRoles = [
  { period: '2024 – Present', title: 'Director of Account Management', isCurrent: true },
  { period: '2024',           title: 'Director of Customer Success' },
  { period: '2021 – 2024',    title: 'Senior Manager / Manager, Customer Success' },
  { period: '2019 – 2021',    title: 'Senior Customer Success Manager' },
];

const venaMetrics = [
  { value: '$30M', label: 'Portfolio' },
  { value: '5x',   label: "President's Club" },
  { value: '$3M+', label: 'Annual Expansion' },
  { value: '7',    label: 'AMs Led' },
];

const venaHighlights = [
  'Built and scaled the AM team from 3 to 7, developing a Team Lead alongside front-line Account Managers',
  'Drove expansion and retention across a $30M enterprise portfolio with 120%+ attainment for 6+ consecutive years',
  'Pioneered AI experimentation: customer health insights and predictive churn analysis',
  'Developed vertical GTM motion across 7 industries through client user groups and communities',
  'Scaled standardized QBRs and embedded pricing/renewal workflows into Salesforce, Gong, Seismic, CPQ',
];

const otherCompanies = [
  {
    company: 'Rogers Communications',
    location: 'Toronto',
    period: '2017 – 2019',
    title: 'Senior Financial Analyst',
    tags: [{ label: 'Financial Planning', bg: '#E8E5CE', ink: '#56582C' }, { label: 'Data Analytics', bg: '#F0DFD1', ink: '#8F4A26' }],
    highlights: [
      'Supported Customer Care forecasting and P&L strategy',
      'Built financial models for operational planning and budget management',
      'Partnered with business leaders on data-driven decision making',
    ],
  },
  {
    company: 'Ernst & Young Canada',
    location: 'Toronto',
    period: '2013 – 2017',
    title: 'Senior Staff Accountant',
    tags: [{ label: 'CPA, CA', bg: '#F2E5C8', ink: '#806013' }, { label: 'Multi-Industry', bg: '#E4E8D9', ink: '#465440' }],
    highlights: [
      'Audit experience across healthcare, biopharma, consumer products, and automotive',
      'Earned CPA, CA designation through rigorous professional program',
    ],
  },
];

const venaTagColors = [
  { label: 'Second-Line Leadership', bg: '#DEE4E6', ink: '#3F565F' },
  { label: 'AI Innovation',          bg: '#F0DFD1', ink: '#8F4A26' },
  { label: 'Enterprise Growth',      bg: '#F2E5C8', ink: '#806013' },
  { label: 'Community Building',     bg: '#EDDED8', ink: '#8A4A40' },
];

const tagIconMap: Record<string, typeof Sparkles> = {
  'AI Innovation': Sparkles,
  'Enterprise Growth': TrendingUp,
  'Second-Line Leadership': Building2,
  'Community Building': Layers,
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container" ref={ref}>
        <div>
          <RevealText className="section-title">Professional Experience</RevealText>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Building Customer Success organizations, developing managers, and driving enterprise growth
          </motion.p>
        </div>

        {/* Vena — collapsed single card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          className="card"
          style={{ borderLeft: '4px solid var(--color-primary)', marginBottom: '1.25rem', position: 'relative' }}
        >
          {/* Pulsing current indicator */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ position: 'absolute', left: '-8px', top: '24px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-primary)', border: '2px solid white', boxShadow: '0 0 8px rgba(122, 74, 40, 0.4)' }}
          />

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                <Building2 size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>Vena Solutions</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>Toronto · 2019 – Present</p>
              </div>
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary)', background: 'var(--accent-soft)', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>
              Current
            </span>
          </div>

          {/* Role timeline */}
          <div style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>
            {venaRoles.map((role, i) => (
              <div
                key={i}
                style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', padding: '0.35rem 0', borderBottom: i < venaRoles.length - 1 ? '1px solid var(--border)' : 'none' }}
              >
                <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)', minWidth: '110px', flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>
                  {role.period}
                </span>
                <span style={{ fontSize: '0.925rem', fontWeight: role.isCurrent ? 600 : 400, color: role.isCurrent ? 'var(--color-text)' : 'var(--color-text-light)', fontFamily: 'var(--font-sans)' }}>
                  {role.title}
                </span>
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '1.25rem' }}>
            {venaMetrics.map((m, i) => (
              <div key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.7rem', background: 'var(--gradient-card)', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{m.value}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-text-light)' }}>{m.label}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
            {venaTagColors.map((t, i) => {
              const Icon = tagIconMap[t.label];
              return (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.7rem', fontWeight: 500, padding: '0.2rem 0.5rem', background: t.bg, color: t.ink, borderRadius: '0.375rem' }}>
                  {Icon && <Icon size={11} />}{t.label}
                </span>
              );
            })}
          </div>

          {/* Highlights */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {venaHighlights.map((h, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.5 }}>
                <ChevronRight size={14} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Other companies */}
        {otherCompanies.map((co, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="card"
            style={{ borderLeft: '3px solid var(--color-border)', marginBottom: '1.25rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--color-bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-text)', fontFamily: 'var(--font-sans)' }}>{co.company}</h3>
                  <p style={{ fontSize: '0.775rem', color: 'var(--color-text-light)' }}>{co.location} · {co.period}</p>
                </div>
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-light)', fontFamily: 'var(--font-sans)' }}>{co.title}</span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
              {co.tags.map((t, ti) => (
                <span key={ti} style={{ fontSize: '0.7rem', fontWeight: 500, padding: '0.2rem 0.5rem', background: t.bg, color: t.ink, borderRadius: '0.375rem' }}>{t.label}</span>
              ))}
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {co.highlights.map((h, hi) => (
                <li key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.5 }}>
                  <ChevronRight size={14} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '3px' }} />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
