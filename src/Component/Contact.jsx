import React, { useEffect, useState } from 'react';

export default function Contact() {
  const [hovered, setHovered] = useState(false);
  const [showSlide, setShowSlide] = useState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sumitKumar-webdev",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#6B7280",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sumitkumar-webdev/",
      logo: "https://images.vexels.com/media/users/3/131245/isolated/preview/9351735cd3a456e88ad876588ab9e503-linkedin-logo.png",
      color: "#1E3A8A",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/@Sumit_kumar81",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg",
      color: "#8B5CF6",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/91XXXXXXXXXX",
      logo: "https://img.icons8.com/?size=512&id=85088&format=png",
      color: "#EC4899",
    },
  ];

  return (
    <div id='Contact' className="relative w-full text-white flex flex-col px-6 lg:px-28 mt-32 mb-20 space-y-16">
      {/* Section Heading */}
      <div className="w-full relative z-10">
        <h2 className="font-bold text-3xl lg:text-5xl relative z-10">Contact</h2>
        <span className="absolute -right-16 lg:-right-32 top-0 text-white/10 font-bold text-4xl lg:text-8xl select-none">
          Contact
        </span>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Form */}
        <form method='POST' action={"https://formsubmit.co/sumitkr8178@gmail.com"} className="flex flex-col gap-6 w-full max-w-xl">
          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 px-5 py-3 border border-white/10 bg-white/5 text-white rounded-lg placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-600 backdrop-blur"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-5 py-3 border border-white/10 bg-white/5 text-white rounded-lg placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-600 backdrop-blur"
            />
          </div>
          <textarea
            rows="6"
            name='Message'
            placeholder="Your message..."
            className="w-full px-5 py-3 border border-white/10 bg-white/5 text-white rounded-lg placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-600 resize-none backdrop-blur"
          />
          <button
            type="submit"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-500 shadow-md ${
              hovered
                ? "bg-gradient-to-r from-purple-600 to-pink-500 scale-105 shadow-lg"
                : "bg-gradient-to-r to-purple-600 from-pink-500"
            }`}
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <section className="flex lg:flex-col items-start lg:items-center gap-6">
          {socialLinks.map((item, index) => (
            <div key={index} className="relative w-16 h-16">
              <a
                onMouseEnter={() => !isMobile && setShowSlide(index)}
                onMouseLeave={() => !isMobile && setShowSlide()}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute top-0 left-0 h-16 flex items-center pl-4 pr-2 rounded-lg shadow-[4px_4px_20px_rgba(168,85,247,0.3)] transition-all duration-500 origin-left overflow-hidden ${
                  !isMobile && showSlide === index ? "w-40" : "w-16"
                }`}
                style={{ backgroundColor: item.color, zIndex: 10 }}
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-8 h-8"
                  loading="lazy"
                  title={item.name}
                />
                {!isMobile && (
                  <span
                    className={`ml-4 text-white font-medium whitespace-nowrap transition-opacity duration-300 ${
                      showSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
