import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Play, ChevronLeft, ChevronRight } from "lucide-react";

import PortfolioArrow from "../assets/images/portfolio-arrow.png";
import ManImage from "../assets/images/man-image.svg";
import portfolioVideo1 from "../assets/videos/vdeo-01.mp4";
import portfolioVideo2 from "../assets/videos/vdeo-02.mp4";
import portfolioVideo3 from "../assets/videos/vdeo-03.mp4";
import portfolioVideo4 from "../assets/videos/vdeo-04.mp4";
import portfolioVideo5 from "../assets/videos/vdeo-05.mp4";
import portfolioVideo6 from "../assets/videos/vdeo-06.mp4";
import portfolioVideo7 from "../assets/videos/vdeo-07.mp4";
import portfolioVideo8 from "../assets/videos/vdeo-08.mp4";
// slider 1
const videoData = [
  { id: 1, src: portfolioVideo1 },
  { id: 2, src: portfolioVideo2 },
  { id: 3, src: portfolioVideo3 },
  { id: 4, src: portfolioVideo4 },
  { id: 5, src: portfolioVideo5 },
  { id: 6, src: portfolioVideo6 },
  { id: 7, src: portfolioVideo7 },
  { id: 8, src: portfolioVideo8 },
];

const VideoSlideContent = ({ item, isActive }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  const handleTogglePlay = () => {
    if (!isActive) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Auto-pause when slide becomes inactive
  React.useEffect(() => {
    if (!isActive && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive, isPlaying]);

  return (
    <div
      onClick={handleTogglePlay}
      className={`relative rounded-[5px] overflow-hidden aspect-9/16 transition-all duration-700 ease-in-out border-[1px] border-[var(--primary-text-color)] ${
        isActive
          ? "lg:scale-[1.15] scale-110 z-20 border-(--primary-text-color) opacity-100"
          : "scale-90 opacity-30 border-transparent blur-[1px]"
      } w-full max-w-[220px] md:max-w-[400px] cursor-pointer group mx-auto`}
    >
      <video
        ref={videoRef}
        src={item.src}
        className="w-full h-full object-cover"
        loop
        playsInline
      />

      {/* Play Button Overlay - Visible when NOT playing and slide IS active */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-12 h-12 md:w-14 md:h-14 bg-[var(--primary-text-color)] rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
            isActive && !isPlaying
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }`}
        >
          <Play size={24} fill="white" color="white" className="ml-1" />
        </div>
      </div>

      {!isActive && <div className="absolute inset-0 bg-black/40" />}
    </div>
  );
};

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-0 md:py-20  text-white min-h-screen flex flex-col items-center"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Portfolio Badge */}
        <div className="inline-block px-10 py-1.5 border border-[var(--primary-text-color)] rounded-full mb-4">
          <span className="text-[24px] font-black tracking-[2px] text-[var(--text-color)]">
            Portfolio
          </span>
        </div>

        {/* Wavy Arrow Graphic */}
        <div className="mb-4">
          <img
            src={PortfolioArrow}
            alt="arrow decoration"
            className="h-28 md:h-36 opacity-80"
          />
        </div>

        {/* Profile Section */}
        <div className="flex flex-row items-center gap-4 mb-16 text-left px-4">
          <div className="w-20 h-20 md:w-20 md:h-20 rounded-full overflow-hidden ring-1 ring-white/10 p-0.5">
            <img
              src={ManImage}
              alt="Daniel Iles"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[20px] md:text-[30px] font-bold uppercase tracking-tight leading-none text-white">
              Daniel Iles
            </h2>
            <p className="text-[var(--primary-text-color)] text-[12px] md:text-[16px] font-medium tracking-wide mt-2">
              829K+ YouTube Subscribers
            </p>
          </div>
        </div>

        {/* Video Slider Container */}
        <div className="relative w-full max-w-[800px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".swiper-btn-next-one",
              prevEl: ".swiper-btn-prev-one",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="portfolio-swiper-one w-full pb-20!"
          >
            {videoData.map((item) => (
              <SwiperSlide
                key={item.id}
                className="flex justify-center items-center py-12"
              >
                {({ isActive }) => (
                  <VideoSlideContent item={item} isActive={isActive} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider 1 Navigation Arrows */}
          <div className="absolute left-[2%] md:left-[-10%] lg:left-[-60px] top-1/2 -translate-y-1/2 z-30">
            <button className="swiper-btn-prev-one w-8 h-8 md:w-10 md:h-10 bg-[var(--primary-text-color)] rounded-full flex items-center justify-center text-[var(--text-color)] cursor-pointer hover:bg-[var(--primary-text-color)] transition-all active:scale-90">
              <ChevronLeft size={20} strokeWidth={3} />
            </button>
          </div>

          <div className="absolute right-[2%] md:right-[-10%] lg:right-[-60px] top-1/2 -translate-y-1/2 z-30">
            <button className="swiper-btn-next-one w-8 h-8 md:w-10 md:h-10 bg-[var(--primary-text-color)] rounded-full flex items-center justify-center text-[var(--text-color)] cursor-pointer hover:bg-[var(--primary-text-color)] transition-all active:scale-90">
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
