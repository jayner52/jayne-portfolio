import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import RevealText from './RevealText';

const skillCategories = [
  {
    title: 'Leadership & Team Development',
    chipInk: '#3F565F',
    chipBg: '#DEE4E6',
    skills: ['Team Building & Scaling', 'Performance Management', 'Coaching & Mentorship', 'Cross-Functional Leadership', 'Change Management', 'Stakeholder Management'],
  },
  {
    title: 'Customer Success & Account Management',
    chipInk: '#465440',
    chipBg: '#E4E8D9',
    skills: ['Enterprise Account Strategy', 'Retention & Expansion', 'QBR Design & Execution', 'Customer Health Scoring', 'Churn Prevention', 'Executive Relationships'],
  },
  {
    title: 'Process & Operations',
    chipInk: '#56582C',
    chipBg: '#E8E5CE',
    skills: ['Playbook Development', 'Forecasting & Planning', 'Workflow Automation', 'CRM Optimization', 'Data-Driven Decision Making', 'GTM Strategy'],
  },
  {
    title: 'Tools & Technology',
    chipInk: '#8F4A26',
    chipBg: '#F0DFD1',
    skills: ['Salesforce', 'Gong', 'Seismic', 'CPQ Tools', 'AI/ML Applications', 'Claude & AI Assistants', 'Vercel', 'GitHub', 'Supabase', 'Lovable'],
  },
  {
    title: 'Finance & Analytics',
    chipInk: '#806013',
    chipBg: '#F2E5C8',
    skills: ['Financial Modeling', 'P&L Management', 'Pipeline Forecasting', 'Revenue Operations', 'Budgeting & Planning', 'CPA, CA Designation'],
  },
  {
    title: 'Communication & Enablement',
    chipInk: '#8A4A40',
    chipBg: '#EDDED8',
    skills: ['Executive Presentations', 'Public Speaking', 'Training Development', 'Stakeholder Communication', 'Documentation', 'Community Building'],
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

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.07, ease: [0.33, 1, 0.68, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '2rem',
                alignItems: 'start',
                padding: '1.25rem 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <p style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: category.chipInk,
                paddingTop: '0.3rem',
                lineHeight: 1.4,
              }}>
                {category.title}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.25, delay: index * 0.07 + i * 0.03 }}
                    style={{
                      fontSize: '0.8rem',
                      padding: '0.25rem 0.65rem',
                      background: category.chipBg,
                      color: category.chipInk,
                      borderRadius: 'var(--radius)',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
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
