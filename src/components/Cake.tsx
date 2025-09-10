import React from 'react';
import { motion } from 'framer-motion';
import Candle from './Candle';

const Cake: React.FC = () => {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
    >
      {/* Свечи */}
      <div className="flex space-x-4 mb-2 z-20">
        {Array.from({ length: 5 }, (_, i) => (
          <Candle key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Верхний ярус торта */}
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
      >
        {/* Крем на верхнем ярусе */}
        <div className="w-40 h-6 bg-gradient-to-r from-pink-300 via-white to-pink-300 rounded-t-full shadow-lg relative z-10">
          {/* Вишенки */}
          <div className="absolute top-1 left-6 w-2 h-2 bg-red-500 rounded-full shadow-sm"></div>
          <div className="absolute top-0 right-8 w-2 h-2 bg-red-500 rounded-full shadow-sm"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full shadow-sm"></div>
        </div>
        
        {/* Основа верхнего яруса */}
        <div className="w-40 h-16 bg-gradient-to-b from-yellow-200 to-yellow-400 shadow-xl relative">
          {/* Декоративные полоски */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-60"></div>
          <div className="absolute top-4 inset-x-0 h-0.5 bg-yellow-500 opacity-50"></div>
          <div className="absolute top-8 inset-x-0 h-0.5 bg-yellow-500 opacity-50"></div>
          <div className="absolute top-12 inset-x-0 h-0.5 bg-yellow-500 opacity-50"></div>
        </div>
      </motion.div>

      {/* Нижний ярус торта */}
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
      >
        {/* Крем на нижнем ярусе */}
        <div className="w-56 h-8 bg-gradient-to-r from-purple-300 via-white to-purple-300 rounded-t-full shadow-lg relative z-10">
          {/* Декоративные розочки */}
          <div className="absolute top-2 left-8 w-3 h-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-sm"></div>
          <div className="absolute top-1 right-12 w-3 h-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-sm"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-sm"></div>
        </div>
        
        {/* Основа нижнего яруса */}
        <div className="w-56 h-20 bg-gradient-to-b from-blue-200 to-blue-400 shadow-xl relative rounded-b-lg">
          {/* Декоративные элементы */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-60 rounded-b-lg"></div>
          <div className="absolute top-5 inset-x-0 h-0.5 bg-blue-500 opacity-50"></div>
          <div className="absolute top-10 inset-x-0 h-0.5 bg-blue-500 opacity-50"></div>
          <div className="absolute top-15 inset-x-0 h-0.5 bg-blue-500 opacity-50"></div>
        </div>
      </motion.div>

      {/* Тарелка */}
      <motion.div
        className="w-64 h-4 bg-gradient-to-r from-gray-300 via-white to-gray-300 rounded-full shadow-2xl relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200 rounded-full opacity-60"></div>
      </motion.div>
    </motion.div>
  );
};

export default Cake;