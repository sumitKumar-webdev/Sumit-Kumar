import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DownloadBtn from '../DownloadBtn';
import HamburgerMenuButton from '../../AnimatedIcons/HemBurgerMenu';
import './Header.css';
import { LucideMenu, X } from 'lucide-react';

export default function Header() {
  const [showDownload, setShowDownload] = useState(false);
  const [showSlider, setShowSlider] = useState(false)

     const handleScroll = (targetId) => {
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };


  useEffect(() => {
    if (showDownload) {
      const timeout = setTimeout(() => setShowDownload(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [showDownload]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-50 w-full bg-white/10 backdrop-blur-md py-3 px-4 header"
    >
      <div className="flex px-4 lg:px-7 items-center justify-between">
        {/* Logo/Title */}
        <span onClick={()=>handleScroll()} className="text-xl lg:text-2xl text-white font-bold caret-transparent cursor-pointer">PORTFOLIO | Sumit Kumar</span>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-14 desktop-NavBtn">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
             onClick={()=>handleScroll(`#${item}`)}
              className="relative text-white/80 text-xl hover:text-white transition-colors duration-300 group hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] cursor-pointer caret-transparent"
            >
              <span>{item}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
        </nav>

        {/* Download Button */}
        <div className="downloadbtn hidden lg:block">
          <DownloadBtn />
        </div>

        {/* Hamburger Menu Toggle (visible on small screens) */}
        <div className="lg:hidden z-50">
         {!showSlider && <LucideMenu color='white' size={40} onClick={() => setShowSlider(!showSlider)}/>} 
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {showSlider && (
        <div
          onClick={() => setShowSlider(false)}
          className="fixed inset-0 h-screen bg-black/70 z-40"
        ></div>
      )}

      {/* Mobile Sliding Menu */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed right-0 top-0 h-screen z-50 w-[80vw] max-w-sm flex flex-col bg-white/20 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          showSlider ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-6 backdrop text-lg text-white">
          <X size={30} onClick={()=>setShowSlider(!showSlider)}/>
          <div className='w-full h-[0.2px] bg-white'></div>
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setShowSlider(false)}
              className="hover:text-pink-500 font-semibold transition-colors"
            >
              {item}
            </a>
          ))}

          {/* Show download button in mobile nav too */}
          <div className="mt-auto pt-4">
            <DownloadBtn />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
