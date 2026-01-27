import { Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--color-text)',
      color: 'var(--color-white)',
      padding: '2rem 0',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
          }}>
            <a
              href="https://linkedin.com/in/jayneingram"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-white)',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ingram.jayne@gmail.com"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-white)',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              <Mail size={20} />
            </a>
          </div>

          <p style={{
            fontSize: '0.875rem',
            color: 'rgba(255, 255, 255, 0.7)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            Built with <Heart size={14} style={{ color: '#EC4899' }} /> using Claude Code
          </p>

          <p style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}>
            &copy; {currentYear} Jayne Ingram-Roberts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
