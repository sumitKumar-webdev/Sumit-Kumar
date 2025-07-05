import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Slider({
  direction = "left",
  speed = "1",
  imgArr = [],
  className = "",
}) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState();

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, [imgArr]);

    const animationX = direction.toLowerCase() == 'right' ? [-width, 0] : [0, -width];

  return (
    <div className="w-full py-6 h-[400%] relative">
      <motion.div
       ref={containerRef}
        className="flex gap-10 w-max"
        animate={{x: animationX}}
        transition={{
          repeat: Infinity,
          duration: 30 / parseFloat(speed),
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
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
            <span className="text-white text-sm font-medium whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
