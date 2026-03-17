import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Sparkles, Briefcase, Tv, Globe, Code2, ExternalLink, Users, Wrench, Lock, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent(c => (c + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  const prev = () => { setPaused(true); setCurrent(c => (c - 1 + projects.length) % projects.length); };
  const next = () => { setPaused(true); setCurrent(c => (c + 1) % projects.length); };

  const project = projects[current];

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

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ position: 'relative' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="card"
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              padding: '2.5rem',
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
              marginBottom: '1.25rem',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'var(--gradient-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
              }}>
                <project.icon size={26} />
              </div>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: project.statusColor,
                background: `${project.statusColor}15`,
                padding: '0.3rem 0.85rem',
                borderRadius: '1rem',
              }}>
                {project.status}
              </span>
            </div>

            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-sans)',
            }}>
              {project.title}
            </h3>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--color-text-light)',
              marginBottom: '1.25rem',
              lineHeight: 1.65,
            }}>
              {project.description}
            </p>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 1.5rem 0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.4rem',
            }}>
              {project.highlights.map((highlight, hIndex) => (
                <li
                  key={hIndex}
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-light)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>•</span>
                  {highlight}
                </li>
              ))}
            </ul>

            {project.link && (
              <div>
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
                {project.password && (
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.7rem',
                    color: 'var(--color-text-lighter)',
                    marginTop: '0.25rem',
                  }}>
                    <Lock size={10} />
                    pw: {project.password}
                  </span>
                )}
              </div>
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            aria-label="Previous project"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '2px solid var(--color-border)',
              background: 'var(--color-white)',
              color: 'var(--color-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-md)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-primary)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-primary)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text)';
            }}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            aria-label="Next project"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '2px solid var(--color-border)',
              background: 'var(--color-white)',
              color: 'var(--color-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-md)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-primary)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-primary)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text)';
            }}
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1.5rem',
        }}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => { setPaused(true); setCurrent(index); }}
              aria-label={`Go to project ${index + 1}`}
              style={{
                width: index === current ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                background: index === current ? 'var(--color-primary)' : 'var(--color-border)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <p style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--color-text-lighter)',
          marginTop: '0.75rem',
        }}>
          {current + 1} / {projects.length}
        </p>

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
            <strong>Why this matters:</strong> These projects demonstrate my approach to innovation —
            I'm not waiting for permission to experiment with AI. I'm building, learning, and
            finding practical applications that drive real value. Technical curiosity paired with
            business acumen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
