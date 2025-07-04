import React from "react";
import { motion } from "framer-motion";

export default function Slider({
  direction = "left",
  speed = "1",
  imgArr = [],
  className = "",
}) {

  return (
    <div className="w-full py-6 h-[400%] relative">
       {/* <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div> */}

      {/* <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l to-[#0a0e17] from-transparent z-10 pointer-events-none"></div> */}
      <motion.div
        className="flex gap-10 w-max"
        animate={
          direction.toLowerCase() === "right"
            ? { x: ["-70%", "0%"] }
            : { x: ["0%", "-70%"] }
        }
        transition={{
          repeat: Infinity,
          duration: 30 /  parseFloat(speed),
          ease: "linear",
        }}
      >
        {[...imgArr, ...imgArr].map((tech, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 px-4 py-2 min-w-[150px] hover:scale-110 transition-transform duration-500 ${className}`}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              loading="lazy"
              className="h-14 w-14 object-contain"
            />
            <span className="text-white text-sm font-medium whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
