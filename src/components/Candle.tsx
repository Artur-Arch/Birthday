import React from 'react';
import { motion } from 'framer-motion';

interface CandleProps {
  delay?: number;
}

const Candle: React.FC<CandleProps> = ({ delay = 0 }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Пламя */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: delay + 0.5, 
          duration: 0.5,
          type: "spring",
          stiffness: 100
        }}
      >
        <motion.div
          className="w-4 h-6 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full relative"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Внутреннее свечение пламени */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300 rounded-full scale-75 blur-sm opacity-80"></div>
        </motion.div>
      </motion.div>
      
      {/* Фитиль */}
      <motion.div
        className="w-0.5 h-2 bg-gray-800"
        initial={{ height: 0 }}
        animate={{ height: 8 }}
        transition={{ delay: delay, duration: 0.3 }}
      />
      
      {/* Свеча */}
      <motion.div
        className="w-3 h-12 bg-gradient-to-b from-pink-300 to-pink-500 rounded-t-lg relative shadow-lg"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 48, opacity: 1 }}
        transition={{ delay: delay, duration: 0.5 }}
      >
        {/* Воск */}
        <motion.div
          className="absolute -bottom-1 w-4 h-2 bg-pink-200 rounded-full -left-0.5 opacity-80"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default Candle;