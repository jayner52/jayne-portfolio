import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Building2, Home, Trophy, Hotel, Monitor, Factory, Heart } from 'lucide-react';
import RevealText from './RevealText';

const industries = [
  { name: 'Banking',       icon: Building2, chipBg: '#DEE4E6', chipInk: '#3F565F' },
  { name: 'Real Estate',   icon: Home,      chipBg: '#E4E8D9', chipInk: '#465440' },
  { name: 'Sports',        icon: Trophy,    chipBg: '#F0DFD1', chipInk: '#8F4A26' },
  { name: 'Hospitality',   icon: Hotel,     chipBg: '#EDDED8', chipInk: '#8A4A40' },
  { name: 'SaaS',          icon: Monitor,   chipBg: '#E8E5CE', chipInk: '#56582C' },
  { name: 'Manufacturing', icon: Factory,   chipBg: '#F2E5C8', chipInk: '#806013' },
  { name: 'Not-for-Profit',icon: Heart,     chipBg: '#E4E8D9', chipInk: '#465440' },
];


export default function ClientUserGroups() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="user-groups" className="section" style={{ background: 'var(--color-white)' }}>
      <div className="container" ref={ref}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Users size={32} style={{ color: 'var(--color-primary)' }} />
            </motion.span>
            <RevealText className="section-title" style={{ marginBottom: 0 }}>Client User Groups</RevealText>
          </div>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            7 industry communities I've launched and lead across North America
          </motion.p>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '7', label: 'User Groups' },
            { value: '4', label: 'Cities' },
            { value: 'Quarterly', label: 'Cadence' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
              }}>{stat.value}</div>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--color-text-light)',
                marginTop: '0.25rem',
              }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Industry Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              style={{
                background: 'var(--color-white)',
                borderRadius: '1rem',
                padding: '1.25rem 1rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
                border: `1px solid ${industry.chipBg}`,
                cursor: 'default',
                flex: '0 1 150px',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: industry.chipBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.75rem',
                color: industry.chipInk,
              }}>
                <industry.icon size={24} />
              </div>
              <p style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                margin: 0,
              }}>
                {industry.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
