import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, MapPin, Building2, Home, Trophy, Hotel, Monitor, Factory, Heart } from 'lucide-react';

const industries = [
  { name: 'Banking', icon: Building2, color: '#8B5CF6' },
  { name: 'Real Estate', icon: Home, color: '#06B6D4' },
  { name: 'Sports', icon: Trophy, color: '#F59E0B' },
  { name: 'Hospitality', icon: Hotel, color: '#EC4899' },
  { name: 'SaaS', icon: Monitor, color: '#10B981' },
  { name: 'Manufacturing', icon: Factory, color: '#6366F1' },
  { name: 'Not-for-Profit', icon: Heart, color: '#EF4444' },
];

const cities = ['New York City', 'Dallas', 'Las Vegas', 'Austin'];

const activities = [
  'Show & Tell Sessions',
  'Product Demos',
  'Networking Events',
  'Thought Leadership',
  'Best Practice Sharing',
  'Executive Panels',
];

export default function ClientUserGroups() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="user-groups" className="section" style={{ background: 'var(--color-white)' }}>
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
            <Users size={32} style={{ color: 'var(--color-primary)' }} />
            <h2 className="section-title" style={{ marginBottom: 0 }}>Client User Groups</h2>
          </div>
          <p className="section-subtitle">
            7 industry communities I've launched and lead across North America
          </p>
        </motion.div>

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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
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
                border: `2px solid ${industry.color}20`,
                cursor: 'default',
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: `${industry.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.75rem',
                color: industry.color,
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

        {/* Cities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {cities.map((city, index) => (
            <span
              key={index}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.5rem 1rem',
                background: 'var(--gradient-card)',
                borderRadius: '2rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
              }}
            >
              <MapPin size={14} style={{ color: 'var(--color-primary)' }} />
              {city}
            </span>
          ))}
        </motion.div>

        {/* Activity Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            marginBottom: '2.5rem',
          }}
        >
          {activities.map((activity, index) => (
            <span
              key={index}
              style={{
                padding: '0.5rem 1rem',
                background: 'var(--color-bg-alt)',
                borderRadius: '0.5rem',
                fontSize: '0.85rem',
                color: 'var(--color-text-light)',
              }}
            >
              {activity}
            </span>
          ))}
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'var(--gradient-card)',
            borderRadius: '1rem',
            borderLeft: '4px solid var(--color-primary)',
          }}
        >
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            <strong>Why User Groups Matter:</strong> Customer communities drive advocacy,
            reduce churn through peer connection, and create invaluable feedback loops
            that inform product development and GTM strategy. These aren't just meetings - they're
            ecosystems of shared success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
