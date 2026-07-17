import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Compass, Sparkles, Users, TrendingUp, Lightbulb } from 'lucide-react';
import RevealText from './RevealText';

const pillars = [
  {
    icon: Sparkles,
    title: 'AI-Native Company',
    description: 'A company where AI isn\'t a feature — it\'s the foundation. I want to help shape how a new category of software gets adopted, loved, and scaled by real customers.',
    chipBg: '#F0DFD1', chipInk: '#8F4A26',
  },
  {
    icon: Users,
    title: 'People Leadership',
    description: 'The space to build and develop a high-performing Customer Success org — hiring, coaching managers, developing Team Leads — at a company moving fast enough that what you build today defines the culture tomorrow.',
    chipBg: '#DEE4E6', chipInk: '#3F565F',
  },
  {
    icon: TrendingUp,
    title: 'Product-Led Customer Success',
    description: 'A seat at the table where customer insights directly shape the roadmap. Customer Success as a growth engine, not a support function — where success is measured in outcomes, not tickets.',
    chipBg: '#E4E8D9', chipInk: '#465440',
  },
  {
    icon: Lightbulb,
    title: 'Builder Culture',
    description: 'A team that respects people who ship things. I already build — live products, AI tools, customer communities. I\'m looking for a company where that instinct is a feature, not a footnote.',
    chipBg: '#F2E5C8', chipInk: '#806013',
  },
];

export default function NextRole() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="next-role" className="section" style={{
      background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-white) 100%)',
    }}>
      <div className="container" ref={ref}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Compass size={32} style={{ color: 'var(--color-primary)' }} />
            </motion.span>
            <RevealText className="section-title" style={{ marginBottom: 0 }}>What I'm Looking For</RevealText>
          </div>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I'm not looking for just any role — I'm looking for the right one.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}>
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.33, 1, 0.68, 1] }}
              className="card"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: pillar.chipInk }} />
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: pillar.chipBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: pillar.chipInk }}>
                <pillar.icon size={28} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: 1.6, margin: 0 }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: 'center', padding: '2rem', background: 'var(--gradient-card)', borderRadius: '1rem' }}
        >
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
            I've co-founded a studio. I've built live products. I hosted a community of 90 women building with AI.
            I'm not describing what I <em>want</em> to do at an AI company — I'm describing what I'm <strong>already doing</strong>.
            Now I want to do it at scale, inside a company that's rewriting what's possible. If that sounds like yours,
            let's talk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
