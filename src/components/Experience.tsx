import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, ChevronRight, Users, Sparkles, Layers, TrendingUp, Award } from 'lucide-react';

interface KeyMetric {
  value: string;
  label: string;
}

interface Role {
  title: string;
  period: string;
  isCurrent?: boolean;
  keyMetrics?: KeyMetric[];
  tags?: string[];
  highlights: string[];
}

interface Company {
  company: string;
  location: string;
  roles: Role[];
}

const experiences: Company[] = [
  {
    company: 'Vena Solutions',
    location: 'Toronto',
    roles: [
      {
        title: 'Director of Account Management',
        period: '2024 – Present',
        isCurrent: true,
        keyMetrics: [
          { value: '$30M', label: 'Portfolio' },
          { value: '7', label: 'Direct Reports' },
          { value: '40%', label: 'Forecast Accuracy Gain' },
        ],
        tags: ['Team Leadership', 'AI Innovation', 'Process Building'],
        highlights: [
          'Lead and develop a team of 7 Account Managers driving expansion and retention across enterprise portfolio',
          'Scaled AM team from 3 to 7 managers, building frameworks for consistent execution',
          'Pioneered AI experimentation: customer health insights, predictive churn analysis',
          'Embedded pricing/renewal workflows into Salesforce, Gong, Seismic, CPQ',
        ],
      },
      {
        title: 'Director of Customer Success',
        period: '2024',
        keyMetrics: [
          { value: '200+', label: 'Strategic Accounts' },
        ],
        tags: ['Cross-Functional', 'Process Building'],
        highlights: [
          'Unified AM and CS retention frameworks across the entire customer lifecycle',
          'Scaled standardized QBRs across 200+ strategic accounts',
          'Led cross-functional alignment between Sales, Finance, Product, and Professional Services',
        ],
      },
      {
        title: 'Senior Manager / Manager, Customer Success',
        period: '2021 – 2024',
        keyMetrics: [
          { value: '$3M+', label: 'Annual Expansion' },
          { value: '5x', label: "President's Club" },
          { value: '7', label: 'Industry Verticals' },
        ],
        tags: ['Team Leadership', 'Enterprise Growth', 'Community Building'],
        highlights: [
          'Built and led high-performing CS team managing enterprise relationships',
          'Developed vertical GTM motion across 7 industries with user groups and client communities',
          'Exceeded $3M+ annual expansion targets with 100%+ attainment for 6+ consecutive years',
        ],
      },
      {
        title: 'Senior Customer Success Manager',
        period: '2019 – 2021',
        tags: ['Enterprise Accounts', 'Process Building'],
        highlights: [
          'Managed portfolio of strategic enterprise accounts driving adoption and expansion',
          'Developed playbooks for onboarding, health scoring, and renewal management',
          'Built strong cross-functional relationships with Product and Engineering',
        ],
      },
    ],
  },
  {
    company: 'Rogers Communications',
    location: 'Toronto',
    roles: [
      {
        title: 'Senior Financial Analyst',
        period: '2017 – 2019',
        tags: ['Financial Planning', 'Data Analytics'],
        highlights: [
          'Supported Customer Care forecasting and P&L strategy',
          'Built financial models for operational planning and budget management',
          'Partnered with business leaders on data-driven decision making',
        ],
      },
    ],
  },
  {
    company: 'Ernst & Young Canada',
    location: 'Toronto',
    roles: [
      {
        title: 'Senior Staff Accountant',
        period: '2013 – 2017',
        tags: ['CPA, CA', 'Multi-Industry'],
        highlights: [
          'Audit experience across healthcare, biopharma, consumer products, and automotive',
          'Earned CPA, CA designation through rigorous professional program',
          'Developed strong analytical foundation and attention to detail',
        ],
      },
    ],
  },
];

const tagIcons: Record<string, typeof Users> = {
  'Team Leadership': Users,
  'AI Innovation': Sparkles,
  'Process Building': Layers,
  'Enterprise Growth': TrendingUp,
  'Cross-Functional': Building2,
  'Community Building': Users,
  "President's Club": Award,
};

const tagColors: Record<string, string> = {
  'Team Leadership': '#8B5CF6',
  'AI Innovation': '#06B6D4',
  'Process Building': '#10B981',
  'Enterprise Growth': '#F59E0B',
  'Cross-Functional': '#6366F1',
  'Community Building': '#EC4899',
  'Enterprise Accounts': '#8B5CF6',
  'Financial Planning': '#10B981',
  'Data Analytics': '#06B6D4',
  'CPA, CA': '#F59E0B',
  'Multi-Industry': '#6366F1',
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section" style={{ background: 'var(--color-bg)' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Building teams, driving growth, and transforming customer success across enterprise organizations
          </p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line - visible on desktop */}
          <div
            className="timeline-line"
            style={{
              position: 'absolute',
              left: '24px',
              top: '0',
              bottom: '0',
              width: '3px',
              background: 'var(--gradient-primary)',
              borderRadius: '2px',
            }}
          />

          {experiences.map((company, companyIndex) => (
            <motion.div
              key={companyIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: companyIndex * 0.2 }}
              style={{ marginBottom: '2.5rem', position: 'relative' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 2,
                }}>
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'var(--color-text)',
                  }}>
                    {company.company}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-light)',
                  }}>
                    {company.location}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                paddingLeft: '0',
              }}>
                {company.roles.map((role, roleIndex) => (
                  <motion.div
                    key={roleIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: companyIndex * 0.2 + roleIndex * 0.1 }}
                    className="card"
                    style={{
                      marginLeft: '0',
                      borderLeft: role.isCurrent ? '4px solid var(--color-primary)' : '3px solid var(--color-border)',
                      position: 'relative',
                    }}
                  >
                    {/* Current role indicator */}
                    {role.isCurrent && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                          position: 'absolute',
                          left: '-8px',
                          top: '20px',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: 'var(--color-primary)',
                          border: '2px solid white',
                          boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
                        }}
                      />
                    )}

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                    }}>
                      <h4 style={{
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        fontFamily: 'var(--font-sans)',
                      }}>
                        {role.title}
                      </h4>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.875rem',
                        color: role.isCurrent ? 'var(--color-primary)' : 'var(--color-text-light)',
                        background: role.isCurrent ? 'rgba(139, 92, 246, 0.1)' : 'var(--color-bg-alt)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontWeight: role.isCurrent ? 600 : 400,
                      }}>
                        <Calendar size={14} />
                        {role.period}
                      </span>
                    </div>

                    {/* Key Metrics */}
                    {role.keyMetrics && role.keyMetrics.length > 0 && (
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                      }}>
                        {role.keyMetrics.map((metric, mIndex) => (
                          <div
                            key={mIndex}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              padding: '0.4rem 0.75rem',
                              background: 'var(--gradient-card)',
                              borderRadius: '2rem',
                              border: '1px solid rgba(139, 92, 246, 0.2)',
                            }}
                          >
                            <span style={{
                              fontWeight: 700,
                              fontSize: '0.95rem',
                              background: 'var(--gradient-primary)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                            }}>{metric.value}</span>
                            <span style={{
                              fontSize: '0.75rem',
                              color: 'var(--color-text-light)',
                            }}>{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    {role.tags && role.tags.length > 0 && (
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '0.75rem',
                      }}>
                        {role.tags.map((tag, tIndex) => {
                          const TagIcon = tagIcons[tag];
                          const color = tagColors[tag] || '#6B7280';
                          return (
                            <span
                              key={tIndex}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                fontSize: '0.7rem',
                                fontWeight: 500,
                                padding: '0.25rem 0.5rem',
                                background: `${color}15`,
                                color: color,
                                borderRadius: '0.375rem',
                                border: `1px solid ${color}30`,
                              }}
                            >
                              {TagIcon && <TagIcon size={12} />}
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                    }}>
                      {role.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.5rem',
                            fontSize: '0.875rem',
                            color: 'var(--color-text-light)',
                            lineHeight: 1.5,
                          }}
                        >
                          <ChevronRight size={14} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '4px' }} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-line {
          display: none;
        }
        @media (min-width: 768px) {
          .timeline-line {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
