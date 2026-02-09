import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import Sliderimge1 from "../assets/images/slider-gif-001.gif";
import Sliderimge2 from "../assets/images/slider-gif-002.gif";
import Sliderimge3 from "../assets/images/slider-gif-003.gif";
import Sliderimge4 from "../assets/images/slider-gif-004.gif";
import Sliderimge5 from "../assets/images/slider-gif-005.gif";
import Sliderimge6 from "../assets/images/slider-gif-006.gif";
import Sliderimge7 from "../assets/images/slider-gif-007.gif";

const HeroSlider = () => {
  const images = [
    Sliderimge1,
    Sliderimge2,
    Sliderimge3,
    Sliderimge4,
    Sliderimge5,
    Sliderimge6,
    Sliderimge7,
  ];

  return (
    <div className="w-full bg-black md:py-24 py-0 relative group select-none">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={24}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        freeMode={true}
        allowTouchMove={true}
        className="hero-swiper !ease-linear"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="!w-auto !h-auto flex items-start">
            <div
              className={`flex-shrink-0 w-[220px] md:w-[280px] h-[350px] md:h-[500px] overflow-hidden border border-white/5 shadow-2xl transition-transform duration-500 hover:scale-105 pointer-events-none ${
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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Edge Fades for smoothness */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/40 to-transparent z-10 pointer-events-none"></div>

      <style jsx global>{`
        .hero-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
