import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Blob from "./Blob"

export const HeroSection = () => {
  const texts = [
    'FullStack',
    'MERN Stack',
    'Creative',
    'UI-UX'
  ]
   const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center  overflow-hidden">

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-around w-full max-w-7xl px-2 gap-12">
        
        {/* Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left order-1"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
           <AnimatePresence mode="wait">
              <motion.span
                key={texts[index]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block"
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>
            <span className="text-white">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl"
          >
            Crafting digital experiences that push boundaries and inspire innovation through code, design, and creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59,130,246,0.5)" }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-white hover:text-white transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Blob Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative z-20 flex bg-transparent sm:order-2"
        >
            <Blob className="opacity-100 lg:h-[500px]" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-black/95 z-0" />
    </div>
  )
}
