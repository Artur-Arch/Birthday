import React from 'react';
import { motion } from 'framer-motion';
import HappyBirthday from './components/HappyBirthday';
import Cake from './components/Cake';
import Confetti from './components/Confetti';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden relative">
      {/* Анимированный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-400/20 animate-pulse"></div>
      
      {/* Конфетти */}
      <Confetti count={60} />
      
      {/* Дополнительные декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Основной контент */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* Заголовок */}
        <HappyBirthday />
        
        {/* Торт */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: 0.5, 
            duration: 1, 
            type: "spring", 
            stiffness: 60 
          }}
          className="mt-8"
        >
          <Cake />
        </motion.div>

        {/* Дополнительные эмодзи */}
        <motion.div
          className="flex space-x-4 mt-8 text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        >
          {['🎂', '🎈', '🎁', '🎊', '🥳'].map((emoji, index) => (
            <motion.span
              key={index}
              className="inline-block"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2 + 4,
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Дополнительное свечение */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/10 pointer-events-none"></div>
    </div>
  );
}

export default App;