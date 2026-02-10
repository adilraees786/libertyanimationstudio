import React from "react";
import Marqueimge1 from "../assets/images/marque-img-001.png";
import Marqueimge2 from "../assets/images/marque-img-002.png";
import Marqueimge3 from "../assets/images/marque-img-003.png";
import Marqueimge4 from "../assets/images/marque-img-004.png";
import Marqueimge6 from "../assets/images/marque-img-006.png";

const MarqueeSlider = () => {
  const logos = [
    Marqueimge1,
    Marqueimge2,
    Marqueimge3,
    Marqueimge4,
    Marqueimge6,
  ];

  // Tripling for seamless infinite scroll
  const displayLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-20 overflow-hidden">
      {/* Newsletter Headline Section */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="flex flex-col">
          <span className="text-[var(--text-color)] text-[28px] md:text-[42px] font-black tracking-[2px] uppercase">
            30 <span className="text-[var(--primary-text-color)]">SCROLL-STOPPING VIDEOS</span>
          </span>
          <span className="text-[var(--text-color)] text-[28px] md:text-[42px] font-black tracking-[px] uppercase">
            30 DAYS <span className="text-[var(--primary-text-color)]">DONE-FOR-YOU</span>
          </span>
        </h2>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative flex overflow-hidden group mx-[0px] md:mx-[80px]">
        <div className="flex animate-marquee gap-0 md:gap-10 items-center">
          {displayLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 cursor-pointer">
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-[30px] md:h-[60px] w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Edge Gradient Fades for Depth */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MarqueeSlider;
