import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Leadership & Team Development',
    skills: [
      'Team Building & Scaling',
      'Performance Management',
      'Coaching & Mentorship',
      'Cross-Functional Leadership',
      'Change Management',
      'Stakeholder Management',
    ],
    color: '#8B5CF6',
  },
  {
    title: 'Customer Success & Account Management',
    skills: [
      'Enterprise Account Strategy',
      'Retention & Expansion',
      'QBR Design & Execution',
      'Customer Health Scoring',
      'Churn Prevention',
      'Executive Relationships',
    ],
    color: '#06B6D4',
  },
  {
    title: 'Process & Operations',
    skills: [
      'Playbook Development',
      'Forecasting & Planning',
      'Workflow Automation',
      'CRM Optimization',
      'Data-Driven Decision Making',
      'GTM Strategy',
    ],
    color: '#10B981',
  },
  {
    title: 'Tools & Technology',
    skills: [
      'Salesforce',
      'Gong',
      'Seismic',
      'CPQ Tools',
      'AI/ML Applications',
      'Claude & AI Assistants',
      'Vercel',
      'GitHub',
      'Supabase',
      'Lovable',
    ],
    color: '#F59E0B',
  },
  {
    title: 'Finance & Analytics',
    skills: [
      'Financial Modeling',
      'P&L Management',
      'Pipeline Forecasting',
      'Revenue Operations',
      'Budgeting & Planning',
      'CPA, CA Designation',
    ],
    color: '#EC4899',
  },
  {
    title: 'Communication & Enablement',
    skills: [
      'Executive Presentations',
      'Public Speaking',
      'Training Development',
      'Stakeholder Communication',
      'Documentation',
      'Community Building',
    ],
    color: '#6366F1',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit developed across customer success, finance, and leadership roles
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {skillCategories.map((category, index) => (
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
                width: '4px',
                height: '100%',
                background: category.color,
              }} />

              <h3 style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-sans)',
                paddingLeft: '0.5rem',
              }}>
                {category.title}
              </h3>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                paddingLeft: '0.5rem',
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    style={{
                      fontSize: '0.8rem',
                      padding: '0.375rem 0.75rem',
                      background: `${category.color}10`,
                      color: category.color,
                      borderRadius: '0.5rem',
                      fontWeight: 500,
                      border: `1px solid ${category.color}30`,
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
