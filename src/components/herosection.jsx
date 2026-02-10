import React from "react";
import Arrow from "../assets/images/arrow.png";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container mx-auto py-20 md:py-30 relative z-10">
        {/* Animated Main Headline */}
        <h1 className="flex flex-col  leading-tight mb-6">
          <span className="text-[var(--text-color)] text-[30px] md:text-[55px] font-black tracking-[4px] uppercase drop-shadow-2xl">
            STOP EDITING
          </span>
          <span className="text-[var(--primary-text-color)] text-[30px] md:text-[55px] font-black tracking-[4px] uppercase">
            START GROWING
          </span>
        </h1>

        {/* Description Subtext */}
        <p className="text-[var(--text-color)] text-[20px] md:text-[24px] font-normal max-w-2xl mx-auto mb-12 leading-relaxed tracking-[0.5px]">
          We craft, <span className="font-bold">cut,</span> and polish 30 videos
          in 30 days so you never miss momentum.
        </p>

        {/* CTA Section with Arrow */}
        <div className="relative inline-block mt-8">
          {/* Arrow Positioning */}
          <div className="absolute -top-16  md:-top-20 md:-left-10 w-24 md:w-32">
            <img src={Arrow} alt="Arrow Pointer" className="w-full h-auto " />
          </div>

          {/* Pill CTA Button */}
          <button
            className="mt-10 relative group px-4 py-1.5
  bg-[var(--primary-text-color)] 
  border-[2px] border-[var(--primary-text-color)] 
  border-opacity-60 
  rounded-full font-black 
  transition-all duration-300"
          >
            <span
              className="text-[var(--text-color)] 
    group-hover:text-white 
    text-lg font-bold tracking-[2px] uppercase"
            >
              GET 30 EDITS
            </span>
          </button>
        </div>
      </div>

      {/* Background Decorative Element (Optional but adds premium feel) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary-text-color)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
