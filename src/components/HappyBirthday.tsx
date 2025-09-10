import React from 'react';
import { motion } from 'framer-motion';

const HappyBirthday: React.FC = () => {
  const text = "Happy Birthday!";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.5
      }
    }
  };

  const letterVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotate: -10,
      scale: 0.5
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="text-center mb-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <div className="flex justify-center items-center flex-wrap">
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent inline-block ${
                char === ' ' ? 'w-4' : ''
              }`}
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
              }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>

        {/* Мерцающие звёздочки вокруг текста */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2 + 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Подзаголовок */}
      <motion.p
        className="text-2xl md:text-3xl font-semibold text-white mt-4 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        🎉 Желаем счастья и радости! 🎉
      </motion.p>
    </div>
  );
};

export default HappyBirthday;