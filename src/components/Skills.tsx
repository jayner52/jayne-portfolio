import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import RevealText from './RevealText';

const skillCategories = [
  {
    title: 'Leadership & Team Development',
    skills: ['Team Building & Scaling', 'Performance Management', 'Coaching & Mentorship', 'Cross-Functional Leadership', 'Change Management', 'Stakeholder Management'],
    chipBg: '#DEE4E6', chipInk: '#3F565F',
  },
  {
    title: 'Customer Success & Account Management',
    skills: ['Enterprise Account Strategy', 'Retention & Expansion', 'QBR Design & Execution', 'Customer Health Scoring', 'Churn Prevention', 'Executive Relationships'],
    chipBg: '#E4E8D9', chipInk: '#465440',
  },
  {
    title: 'Process & Operations',
    skills: ['Playbook Development', 'Forecasting & Planning', 'Workflow Automation', 'CRM Optimization', 'Data-Driven Decision Making', 'GTM Strategy'],
    chipBg: '#E8E5CE', chipInk: '#56582C',
  },
  {
    title: 'Tools & Technology',
    skills: ['Salesforce', 'Gong', 'Seismic', 'CPQ Tools', 'AI/ML Applications', 'Claude & AI Assistants', 'Vercel', 'GitHub', 'Supabase', 'Lovable'],
    chipBg: '#F0DFD1', chipInk: '#8F4A26',
  },
  {
    title: 'Finance & Analytics',
    skills: ['Financial Modeling', 'P&L Management', 'Pipeline Forecasting', 'Revenue Operations', 'Budgeting & Planning', 'CPA, CA Designation'],
    chipBg: '#F2E5C8', chipInk: '#806013',
  },
  {
    title: 'Communication & Enablement',
    skills: ['Executive Presentations', 'Public Speaking', 'Training Development', 'Stakeholder Communication', 'Documentation', 'Community Building'],
    chipBg: '#EDDED8', chipInk: '#8A4A40',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container" ref={ref}>
        <div>
          <RevealText className="section-title">Skills & Expertise</RevealText>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A comprehensive toolkit developed across customer success, finance, and leadership roles
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.33, 1, 0.68, 1] }}
              className="card"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: category.chipInk }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1rem', fontFamily: 'var(--font-sans)', paddingLeft: '0.5rem' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingLeft: '0.5rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.06 + skillIndex * 0.04 }}
                    style={{ fontSize: '0.8rem', padding: '0.375rem 0.75rem', background: category.chipBg, color: category.chipInk, borderRadius: 'var(--radius)', fontWeight: 500 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
