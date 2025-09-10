import React from 'react';
import { motion } from 'framer-motion';

interface ConfettiProps {
  count?: number;
}

const Confetti: React.FC<ConfettiProps> = ({ count = 50 }) => {
  const confettiPieces = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confettiPieces.map((i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 opacity-80"
          style={{
            backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][
              Math.floor(Math.random() * 6)
            ],
            left: `${Math.random() * 100}%`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{
            y: window.innerHeight + 50,
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;