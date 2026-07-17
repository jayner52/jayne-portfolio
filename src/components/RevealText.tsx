import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode, CSSProperties } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

const ease = [0.33, 1, 0.68, 1] as const;

export default function RevealText({ children, delay = 0, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '108%' }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ duration: 0.65, ease, delay }}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    </div>
  );
}
