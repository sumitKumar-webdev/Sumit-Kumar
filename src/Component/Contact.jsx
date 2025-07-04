import { color } from 'framer-motion';
import React, { useState } from 'react';

export default function Contact() {
  const [hovered, setHovered] = useState(false);
  const [showSlide, setShowSlide] = useState();

   const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/your-username",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color:"#FCD34D"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/your-profile",
    logo: "/5.png",
    color:"#3B82F6"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-handle", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
    color:"#22C55E"
  },
];

const ColorForIcon = [ "#FCD34D","#3B82F6","#22C55E"]


  return (
    <div className="relative w-full text-white flex flex-col items-center justify-center lg:px-28 px-6 mt-32 mb-20 space-y-16">
      

      {/* Section Heading */}
      <div className="w-full relative z-10">
        <h2 className="font-bold text-3xl lg:text-5xl z-10 relative text-white">
          Contact
        </h2>
        <span className="absolute -right-16 lg:-right-32 top-0 text-white/10 font-bold text-4xl lg:text-8xl select-none">
          Contact
        </span>
      </div>

<div className='flex items-center lg:flex-row flex-col '>
    {/* Form */}
        <form className="flex flex-col gap-6 w-full max-w-xl">
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 px-5 py-3 border border-white/10 bg-white/5 text-white rounded-lg placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-600 backdrop-blur"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-5 py-3 border border-white/10 bg-white/5 text-white rounded-lg placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-600 backdrop-blur"
            />
          </div>
          <textarea
            rows="6"
            placeholder="Your message..."
            className="w-full px-5 py-3 border border-white/10 bg-white/5 text-white rounded-lg placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none backdrop-blur"
          />
          <button
            type="submit"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-500 shadow-md ${
              hovered
                ? "bg-gradient-to-r from-purple-600 to-pink-500 scale-105 shadow-lg"
                : "bg-gradient-to-r to-purple-600 from-pink-500 "
            }`}
          >
            Send Message
          </button>
        </form>

     <section className="flex flex-col items-center j  gap-6 mt-10 lg:mt-0 lg:ml-16">
  {socialLinks.map((item, index) => (
    <a
      key={index}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-20 h-20 flex items-center justify-center rounded-lg shadow-[4px_4px_20px_rgba(168,85,247,0.3)] transition-transform duration-500 hover:scale-110`}
      style={{ backgroundColor: item.color}}
      
    >
         <img
        src={item.logo}
        alt={item.name}
        className="w-15 h-10"
        title={item.name}
      />
    </a>
  ))}
</section>
</div>
      


    </div>
  );
}
