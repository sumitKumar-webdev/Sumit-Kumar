import React from "react";
import { motion } from "framer-motion";
import Slider from "../InfiniteSlider/Slider";

export default function Skills() {
  const techStack = [
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "React Router",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/dc/React_Router_logo.svg", // unofficial
    },
    {
      name: "Tailwind CSS",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FxiHJarAk6MJ0bNOEEM47rllqHOKiBpsuA&s",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", // Note: white on transparent
    },
    {
      name: "Mongoose",
      logo: "https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png", // from official docs
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Framer Motion",
      logo: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png", // custom
    },
    {
      name: "GSAP",
      logo: "https://greensock.com/uploads/monthly_2020_03/greensock-logo.svg.5d9c3f76e0ef14c934a220b2395dc7d9.svg", // from GSAP site
    },
  ];

  return (
    <div id="Skills" className="w-full text-white flex flex-col items-center justify-center lg:px-28 px-6 mt-20">
      <div className=" w-full mb-6 flex items-center">
        <h2 className="font-bold text-2xl lg:text-4xl z-10 relative">
          Tech Stack
        </h2>
        <span className="absolute -right-20 lg:-right-40 text-gray-700 font-bold text-4xl lg:text-8xl opacity-50">
          Tech Stack
        </span>
      </div>

      {/* Sliders */}
      
        <Slider
        imgArr={techStack}
        speed="1"
        direction="left"
        className="bg-purple-600/20 mt-10 border border-purple-500/40 rounded-2xl backdrop-blur-md
             shadow-[0_0_40px_10px_rgba(168,85,247,0.2)]"
      />
      <Slider
        imgArr={techStack}
        speed="1.5"
        direction="right"
        className="bg-purple-600/20 border border-purple-500/40 rounded-2xl backdrop-blur-md
             shadow-[0_0_40px_10px_rgba(168,85,247,0.2)]"
      /> 

     
    </div>
  );
}
