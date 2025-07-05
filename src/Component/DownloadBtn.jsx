import { useState } from "react";
import { Download } from "lucide-react"; // or your icon

export default function DownloadBtn() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div title="Download Resume" className="relative inline-block group focus-within:ring-2 focus-within:ring-pink-400 rounded-full">
      {/* Styled button layer */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative z-10 pointer-events-none bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-purple-500/25"
      >
        <div className="flex items-center gap-2">
          <Download
            className={`w-4 h-4 transition-transform duration-300 ${
              isHovered ? "rotate-12" : ""
            }`}
          />
          <span>Download Resume</span>
        </div>
      </button>

      <a
        href="/Sumit_Kumar_Resume.pdf"
        download="Sumit Kumar Resume.pdf"
        className="absolute inset-0 z-20"
        aria-label="Download Resume"
        tabIndex={0}
      ></a>
    </div>
  );
}
