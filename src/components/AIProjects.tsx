import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Briefcase, Tv, Globe, Code2, ExternalLink, Users, Wrench, Lock } from 'lucide-react';

const projects = [
  {
    icon: Wrench,
    title: 'Gloo',
    description: 'A consulting-to-build studio creating custom software tools for go-to-market teams. Rapid 2-3 week delivery of workflow-aligned applications.',
    status: 'Co-Founder',
    statusColor: '#10B981',
    highlights: [
      'Custom tools for AM, CS, and RevOps teams',
      'Whitespace analyzers, health dashboards, renewal trackers',
      'Integrates with Salesforce, HubSpot, billing platforms',
      'AI-powered automation with 89% adoption rates',
    ],
    link: 'https://buildwithgloo.com',
    password: null,
  },
  {
    icon: Briefcase,
    title: 'Go-To-Market Toolbox',
    description: 'AI-driven enablement prototype unifying GTM tools, frameworks, and templates into a single intelligent platform.',
    status: 'In Active Procurement',
    statusColor: '#F59E0B',
    highlights: [
      'Presented to Vena C-Suite with positive reception',
      'Consolidates sales playbooks, competitive intel, and pricing tools',
      'AI-powered search and recommendation engine',
      'Currently in procurement evaluation',
    ],
    link: 'https://strategic-spotlight-hub.lovable.app/',
    password: 'sweden',
  },
  {
    icon: Users,
    title: 'SeatBee',
    description: 'AI-powered seating arrangement tool that intelligently optimizes event seating plans based on relationships, preferences, and constraints.',
    status: 'Live Project',
    statusColor: '#8B5CF6',
    highlights: [
      'AI algorithms for optimal guest placement',
      'Considers relationships and social dynamics',
      'Perfect for weddings, corporate events, galas',
      'Eliminates manual seating chart headaches',
    ],
    link: 'https://seated-mu.vercel.app/',
    password: null,
  },
  {
    icon: Tv,
    title: 'Poolside Picks',
    description: 'Free fantasy league platform for Big Brother fans. Draft houseguests, earn points, and compete with friends in customizable reality TV pools.',
    status: 'Live Project',
    statusColor: '#8B5CF6',
    highlights: [
      'Fantasy drafting of Big Brother houseguests',
      'Point-based scoring throughout the season',
      'Customizable leagues for friend groups',
      'Transforms viewing into interactive competition',
    ],
    link: 'https://poolside-picks.com/',
    password: null,
  },
  {
    icon: Globe,
    title: 'Roamwyth',
    description: 'A social travel platform connecting travelers for group trips and shared experiences.',
    status: 'Live Project',
    statusColor: '#8B5CF6',
    highlights: [
      'Full-stack web application',
      'Group trip coordination and planning',
      'Social features for traveler connections',
      'Built to explore product development end-to-end',
    ],
    link: 'https://roamwyth.lovable.app',
    password: null,
  },
  {
    icon: Code2,
    title: 'This Portfolio',
    description: 'A fully functional portfolio site built entirely with Claude Code, demonstrating hands-on experience with Anthropic\'s AI tools.',
    status: 'You\'re Looking At It',
    statusColor: '#06B6D4',
    highlights: [
      'Built 100% with Claude Code assistance',
      'Modern React/TypeScript stack',
      'Responsive design with smooth animations',
      'Demonstrates technical curiosity and AI collaboration',
    ],
    link: null,
    password: null,
  },
];

export default function AIProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="ai-projects" className="section" style={{ background: 'var(--color-white)' }}>
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
            <Sparkles size={32} style={{ color: 'var(--color-primary)' }} />
            <h2 className="section-title" style={{ marginBottom: 0 }}>AI & Creative Projects</h2>
          </div>
          <p className="section-subtitle">
            I don't just talk about AI innovation - I build. Here's what I've been creating.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
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
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'var(--gradient-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                }}>
                  <project.icon size={24} />
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: project.statusColor,
                  background: `${project.statusColor}15`,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                }}>
                  {project.status}
                </span>
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-sans)',
              }}>
                {project.title}
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--color-text-light)',
                marginBottom: '1rem',
                lineHeight: 1.6,
              }}>
                {project.description}
              </p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1rem 0',
                flex: 1,
              }}>
                {project.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-light)',
                      padding: '0.25rem 0',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: 'var(--color-primary)' }}>•</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto' }}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'var(--color-primary)',
                    }}
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                )}
                {project.password && (
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.65rem',
                    color: 'var(--color-text-lighter)',
                    marginTop: '0.25rem',
                  }}>
                    <Lock size={10} />
                    pw: {project.password}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            padding: '2rem',
            background: 'var(--gradient-card)',
            borderRadius: '1rem',
          }}
        >
          <p style={{
            fontSize: '1rem',
            color: 'var(--color-text)',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            <strong>Why this matters:</strong> These projects demonstrate my approach to innovation -
            I'm not waiting for permission to experiment with AI. I'm building, learning, and
            finding practical applications that drive real value. Technical curiosity paired with
            business acumen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
