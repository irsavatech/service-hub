import { motion } from 'framer-motion';

interface CircuitPatternProps {
  className?: string;
  opacity?: number;
}

export default function CircuitPattern({ className = "", opacity = 0.4 }: CircuitPatternProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="small-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CBD5E1" strokeWidth="0.5" opacity={opacity * 0.3} />
          </pattern>
          
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.8" fill="#94A3B8" opacity={opacity * 0.5} />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#small-grid)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
        
        <motion.g opacity={opacity}>
          <motion.path
            d="M0 100 H200 M0 200 H350 M0 300 H280 M0 400 H420 M0 500 H180 M0 600 H390"
            stroke="#94A3B8"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          />
          
          <motion.path
            d="M150 0 V200 M300 0 V350 M450 0 V180 M600 0 V420 M750 0 V250 M900 0 V380"
            stroke="#94A3B8"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
          />
          
          <motion.path
            d="M100 0 L250 150 M400 100 L550 250 M200 300 L350 450 M700 200 L850 350"
            stroke="#94A3B8"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 1, repeat: Infinity, repeatDelay: 2 }}
          />
          
          <motion.path
            d="M0 150 H80 V250 H200 V180 H320 M400 0 V120 H520 V280 H650 V150 H780 M100 400 H220 V500 H340 V420 H480"
            stroke="#64748B"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
          />
          
          <circle cx="80" cy="150" r="3" fill="#64748B" opacity="0.6" />
          <circle cx="200" cy="250" r="3" fill="#64748B" opacity="0.6" />
          <circle cx="320" cy="180" r="3" fill="#64748B" opacity="0.6" />
          <circle cx="520" cy="120" r="3" fill="#64748B" opacity="0.6" />
          <circle cx="650" cy="280" r="3" fill="#64748B" opacity="0.6" />
          <circle cx="780" cy="150" r="3" fill="#64748B" opacity="0.6" />
          <circle cx="220" cy="400" r="3" fill="#64748B" opacity="0.6" />
          <circle cx="340" cy="500" r="3" fill="#64748B" opacity="0.6" />
          <circle cx="480" cy="420" r="3" fill="#64748B" opacity="0.6" />
          
          <rect x="75" y="145" width="10" height="10" fill="none" stroke="#64748B" strokeWidth="1" opacity="0.5" />
          <rect x="195" y="245" width="10" height="10" fill="none" stroke="#64748B" strokeWidth="1" opacity="0.5" />
          <rect x="315" y="175" width="10" height="10" fill="none" stroke="#64748B" strokeWidth="1" opacity="0.5" />
          <rect x="515" y="115" width="10" height="10" fill="none" stroke="#64748B" strokeWidth="1" opacity="0.5" />
        </motion.g>
      </svg>
      
      <svg 
        className="absolute inset-0 w-full h-full"
        style={{ transform: 'translate(50%, 50%)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g opacity={opacity}>
          <motion.path
            d="M0 100 H200 M0 200 H350 M0 300 H280 M0 400 H420 M0 500 H180"
            stroke="#94A3B8"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
          />
          <motion.path
            d="M150 0 V200 M300 0 V350 M450 0 V180 M600 0 V420"
            stroke="#94A3B8"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 2, repeat: Infinity, repeatDelay: 2 }}
          />
          
          <circle cx="200" cy="100" r="3" fill="#64748B" opacity="0.6" />
          <circle cx="350" cy="200" r="3" fill="#64748B" opacity="0.6" />
          <circle cx="280" cy="300" r="3" fill="#64748B" opacity="0.6" />
        </motion.g>
      </svg>
    </div>
  );
}
