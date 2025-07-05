import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Project() {
  const [hoveredCard, setHoveredCard] = useState();

const projects = [
  {
    name: "Flour and Flavour",
    description:
      "A beautifully crafted bakery/cake website with cart functionality, custom messages per item, and Appwrite backend integration.",
    url: "https://flour-and-flavour-ffuj.vercel.app/",
    img: "/2.webp",
    techStack: ["React", "Tailwind CSS", "Appwrite", "Framer Motion"],
  },
  {
    name: "TitleCase Chrome Extension",
    description:
      "A productivity browser extension that instantly converts selected text into Title Case format. Built with HTML, CSS, and JavaScript.",
    url: "https://github.com/sumitKumar-webdev/Title-Case-Chrome-Extention",
    img: "/1.webp",
    techStack: ["JavaScript", "HTML", "CSS", "Chrome APIs"],
  },
  {
    name: "Offline-First Markdown Notes App",
    description:
      "A fullstack PWA (React + IndexedDB + Express) that lets users create, edit, and sync notes even without an internet connection. Currently under development.",
    url: "#",
    img: "/4.webp",
    underDevlopment: true,
    techStack: ["React", "IndexedDB", "Express.js", "Node.js", "PWA"],
  },
  {
    name: "Landing Page",
    description:
      "A simple yet creative landing page built to introduce a brand with motion-based animations.",
    url: "https://landing-page-using-framer-motion.vercel.app/",
    img: "/3.webp",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
  },
];


  return (
    <div id="Projects" className="w-full flex flex-col items-center justify-center lg:px-28 px-6 mt-28 space-y-8">
      {/* Section Heading */}
      <div className=" w-full mb-6 flex items-center">
        <h2 className="font-bold text-white text-2xl lg:text-4xl z-10 relative">
          PROJECT
        </h2>
        <span className="absolute -right-20 lg:-right-40 text-gray-700 font-bold text-4xl lg:text-8xl opacity-50">
          PROJECT
        </span>
      </div>

      <div className="w-full overflow-hidden hide-scrollbar">
        <motion.div
          drag="x"
          dragConstraints={{ left: -1300, right: 0 }}
          className="flex justify-center gap-10 min-w-max px-2 py-4"
        >
          {projects.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="h-72 w-96 flex justify-center relative"
            >
              {/* Project Image */}
              <img src={p.img} className="h-full object-contain" alt={p.name} />

              {/* Animated Vertical Slide */}
              <motion.div
                initial={{ x: 50,}}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.5 }}
                className={`absolute top-0 right-0 h-full rounded-l-lg flex  shadow-lg  bg-slate-50 overflow-hidden text-center transition-all duration-500 ease-in-out ${
                  hoveredCard === i
                    ? "w-[60%] pt-2 text-wrap items-center flex-col "
                    : "w-12 items-center justify-center"
                }`}
              >
                <h2
                  className={`text-black font-semibold text-sm transition-transform duration-500 whitespace-nowrap ${
                    hoveredCard === i ? "rotate-0" : "-rotate-90"
                  } origin-center`}
                >
                  {p.name}
                </h2>
              {hoveredCard === i && (
                  <motion.div initial={{opacity: 0, y: 30}} animate={{opacity: 1, y:0}} transition={{delay: 0.29}} className="flex flex-col mt-4 space-y-2 text-sm  leading-relaxed">
                    <p className="text-gray-800">{p.description}</p>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-blue-600 hover:underline font-medium"
                    >
                      {p.underDevlopment ? "Under Development" : "View Project →"}
                    </a>
                    <div className="flex gap-1 flex-wrap justify-center">
                      {p.techStack.map((t,i)=>(<span key={i} className="bg-purple-200 text-sm px-2 mt-2 rounded-xl">{t}</span>))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
