import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, TrendingUp, Brain, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: 'People-First Leadership',
    description: 'Developed managers and high-performing teams — including second-line experience coaching a Team Lead — fostering cultures of accountability and growth.',
  },
  {
    icon: TrendingUp,
    title: 'Enterprise Growth',
    description: 'Consistently exceeded $3M+ annual expansion targets while maintaining exceptional retention across a $30M portfolio.',
  },
  {
    icon: Brain,
    title: 'AI Innovation',
    description: 'Early adopter building AI-driven prototypes for customer health insights, predictive analytics, and GTM enablement.',
  },
  {
    icon: Heart,
    title: 'Community Builder',
    description: 'Champion of mental health advocacy, cross-functional collaboration, and building genuine customer communities.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A CS leader who develops managers, drives enterprise growth, and builds AI-powered customer programs
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'var(--gradient-card)',
              borderRadius: '1.5rem',
              padding: '2rem',
            }}
          >
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              I'm a <strong>people-first leader</strong> who loves building teams, programs, and client
              partnerships that deliver results. I started my career in finance as a <strong>CPA, CA</strong>,
              but quickly realized my passion was in working directly with customers and driving growth
              through strong relationships.
            </p>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              I've led customer success and account management functions at the director level — managing managers, building out Team Leads, and overseeing a portfolio of more than <strong>$30M in annual revenue</strong>. My approach combines data, strategy, and empathy to help clients succeed and managers grow.
            </p>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--color-text)',
              marginBottom: '1rem',
            }}>
              What sets me apart is my <strong>hands-on approach to AI</strong>. I don't just talk about
              innovation - I build. From prototyping customer health dashboards to developing AI-driven
              GTM tools, I'm constantly exploring how technology can elevate customer outcomes.
            </p>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--color-text)',
            }}>
              At my core, I care about helping people grow: clients, teammates, and future leaders.
              When I'm not working, you'll find me spending time with Riley, cycling, or planning my next adventure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}>
                  <item.icon size={24} />
                </div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-light)',
                  lineHeight: 1.6,
                }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'var(--color-bg-alt)',
            borderRadius: '1rem',
            borderLeft: '4px solid var(--color-primary)',
          }}
        >
          <p style={{
            fontSize: '1.125rem',
            fontStyle: 'italic',
            color: 'var(--color-text)',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            "If you want to connect about customer success strategy, leadership, or finding smarter
            ways to link data with people, I'd love to hear from you."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
