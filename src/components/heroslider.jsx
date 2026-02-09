import React, { useRef, useEffect, useState } from "react";
import Sliderimge1 from "../assets/images/slider-gif-001.gif";
import Sliderimge2 from "../assets/images/slider-gif-002.gif";
import Sliderimge3 from "../assets/images/slider-gif-003.gif";
import Sliderimge4 from "../assets/images/slider-gif-004.gif";
import Sliderimge5 from "../assets/images/slider-gif-005.gif";
import Sliderimge6 from "../assets/images/slider-gif-006.gif";
import Sliderimge7 from "../assets/images/slider-gif-007.gif";

const HeroSlider = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    Sliderimge1,
    Sliderimge2,
    Sliderimge3,
    Sliderimge4,
    Sliderimge5,
    Sliderimge6,
    Sliderimge7,
  ];

  // Tripled images to ensure it never runs out of content during manual scroll
  const displayImages = [...images, ...images, ...images];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    let speed = 0.8; // Base auto-scroll speed

    const scroll = () => {
      if (!isPaused) {
        scrollContainer.scrollLeft += speed;

        // Loop logic: reset to middle third if we go too far
        const oneThird = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= oneThird * 2) {
          scrollContainer.scrollLeft = oneThird;
        } else if (scrollContainer.scrollLeft <= 1) {
          scrollContainer.scrollLeft = oneThird;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Initial position to middle of the tripled array
    const oneThird = scrollContainer.scrollWidth / 3;
    scrollContainer.scrollLeft = oneThird;

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Drag to scroll logic
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <div className="w-full bg-black py-24 relative group select-none">
      <div
        ref={scrollRef}
        className="flex gap-6 px-10 items-start overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => !isDragging && setIsPaused(false)}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeaveCapture={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {displayImages.map((img, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-[220px] md:w-[280px] h-[350px] md:h-[500px]  overflow-hidden border border-white/5 shadow-2xl transition-transform duration-500 hover:scale-105 pointer-events-none ${
              index % 2 !== 0 ? "mt-16 md:mt-24" : ""
            }`}
          >
            <img
              src={img}
              alt={`Slider clip ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Edge Fades for smoothness */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/40 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default HeroSlider;
