import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

export  function aboutComponent() {
  const [openSlide, setOpenSlide] = useState({})

 const qualifications = [
  {
    title: "10th Grade - Secondary School",
    content: "Completed from CBSE Board in 2020 with distinction.",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Central_Board_of_Secondary_Education_logo.svg/1200px-Central_Board_of_Secondary_Education_logo.svg.png"
  },
  {
    title: "12th Grade - Higher Secondary",
    content: "Completed with Science stream (PCM) from CBSE Board in 2022.",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Council_for_the_Indian_School_Certificate_Examinations_logo.svg/1200px-Council_for_the_Indian_School_Certificate_Examinations_logo.svg.png"
  },
  {
    title: "Bachelor of Computer Application",
    content: "Expected to Graduate in 2025",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/XYZ_University_logo.png/600px-XYZ_University_logo.png"
  }
];


  return (
  <div id='About' className="w-full bg-transparent text-white flex items-center justify-center lg:px-28 px-14 flex-col">

    {/* text heading */}
    <div className='lg:mb-28 mb-14 w-full flex relative items-center'>
      <h2 className='absolute lg:left-1 font-bold text-2xl lg:text-4xl'>ABOUT</h2>
      <span className='absolute -right-24 lg:-right-40 text-gray-600 font-bold text-4xl lg:text-8xl opacity-50'>ABOUT</span>
    </div>

  {/* Centered Flex Container */}
  <div className="flex lg:flex-row flex-col items-start justify-between gap-10 w-full">
<span className="lg:text-left lg:w-1/2 lg:text-lg text-justify tracking-widest leading-relaxed">
  I'm a passionate developer from{" "}
  <motion.span
     initial={{ backgroundSize: '0% 100%' }}
  whileInView={{ backgroundSize: '100% 100%' }}
  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
  viewport={{ once: true, amount: 0.7 }}
  className="inline-block px-1 text-white font-medium  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-no-repeat bg-left bg-[length:0%_100%]"
  >
    Delhi India,
  </motion.span>
     always eager to learn and build meaningful solutions and a better{" "}
  <motion.span
    initial={{ backgroundSize: '0% 100%' }}
  whileInView={{ backgroundSize: '100% 100%' }}
  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
  viewport={{ once: true, amount: 0.5 }}
  className="inline-block px-1 text-white font-medium  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-no-repeat bg-left bg-[length:0%_100%]"
  >
    user experience.
  </motion.span>
   I enjoy working in collaborative environments and exploring new challenges in tech. Outside of coding, I love spending time watching movies, business documentaries, and{" "}
<motion.span
  initial={{ backgroundSize: '0% 100%' }}
  whileInView={{ backgroundSize: '100% 100%' }}
  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
  viewport={{ once: true, amount: 0.5 }}
  className="inline-block px-1 text-white font-medium  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-no-repeat bg-left bg-[length:0%_100%]"
>
  playing games.
</motion.span>
</span>


    {/* Right Column */}



<section className="w-full lg:w-1/2 space-y-6 px-2 sm:px-0">
  {qualifications.map((item, index) => (
    <motion.div
      key={index}
      onMouseEnter={() => setOpenSlide(index)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative bg-white/5 border border-white/10 z-30 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] ${
        openSlide === index ? "ring-2 ring-purple-500/50 backdrop-blur-3xl shadow-[0_0_80px_30px_rgba(168,85,247,0.25)]" : ""
      }`}
    >
      <h3 className="text-white text-xl font-semibold tracking-wide mb-1">
        {item.title}
      </h3>
     
        {openSlide === index && (
          <motion.p
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-gray-300 text-sm leading-relaxed mt-2"
          >
            {item.content}
          </motion.p>
        )}
    </motion.div>
  ))}
</section>


  </div>
</div>

  )
}
