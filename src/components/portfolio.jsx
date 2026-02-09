import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Play, ChevronLeft, ChevronRight } from "lucide-react";

import PortfolioArrow from "../assets/images/portfolio-arrow.svg";
import ManImage from "../assets/images/man-image.svg";
import ManImage2 from "../assets/images/man-image-02.svg";
import portfolioVideo1 from "../assets/videos/portfolio-video-01.mp4";
import portfolioVideo2 from "../assets/videos/portfolio-video-02.mp4";
import portfolioVideo3 from "../assets/videos/portfolio-video-03.mp4";
import portfolioVideo4 from "../assets/videos/portfolio-video-04.mp4";

const videoData = [
  { id: 1, src: portfolioVideo1 },
  { id: 2, src: portfolioVideo2 },
  { id: 3, src: portfolioVideo3 },
  { id: 4, src: portfolioVideo4 },
  { id: 5, src: portfolioVideo2 },
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
      } w-full max-w-[320px] md:max-w-[400px] cursor-pointer group`}
    >
      <video
        ref={videoRef}
        src={item.src}
        className="w-full h-full object-cover"
        muted
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
    <section id="portfolio" className="py-20  text-white min-h-screen flex flex-col items-center">
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
        <div className="flex flex-col items-center mb-16 text-center px-4">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-5 ring-1 ring-white/10 p-0.5">
            <img
              src={ManImage}
              alt="Daniel Iles"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h2 className="text-[30px] md:text-[40px] font-bold mb-1 tracking-tight">
            Daniel Iles
          </h2>
          <p className="text-[var(--primary-text-color)] text-[20px] font-normal tracking-wider">
            829K+ YouTube Subscribers
          </p>
        </div>

        {/* Video Slider Container */}
        <div className="relative w-full max-w-[800px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="portfolio-swiper w-full pb-20!"
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

          {/* Custom Navigation Arrows - Positioned to the side, not over videos */}
          <div className="absolute left-[2%] md:left-[-10%] lg:left-[-60px] top-1/2 -translate-y-1/2 z-30">
            <button className="swiper-button-prev-custom w-8 h-8 md:w-10 md:h-10 bg-[var(--primary-text-color)] rounded-full flex items-center justify-center text-[var(--text-color)] cursor-pointer hover:bg-[var(--primary-text-color)] transition-all active:scale-90">
              <ChevronLeft size={20} strokeWidth={3} />
            </button>
          </div>

          <div className="absolute right-[2%] md:right-[-10%] lg:right-[-60px] top-1/2 -translate-y-1/2 z-30">
            <button className="swiper-button-next-custom w-8 h-8 md:w-10 md:h-10 bg-[var(--primary-text-color)] rounded-full flex items-center justify-center text-[var(--text-color)] cursor-pointer hover:bg-[var(--primary-text-color)] transition-all  active:scale-90">
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
    
{/* second section */}
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-16 text-center px-4">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-5 ring-1 ring-white/10 p-0.5">
            <img
              src={ManImage2}
              alt="Vijay Singh"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h2 className="text-[30px] md:text-[40px] font-bold mb-1 tracking-tight">
           Vijay Singh
          </h2>
          <p className="text-[var(--primary-text-color)] text-[20px] font-normal tracking-wider">
            100K+ Instagram Subscribers
          </p>
        </div>

        {/* Video Slider Container */}
        <div className="relative w-full max-w-[800px]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="portfolio-swiper w-full pb-20!"
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

          {/* Custom Navigation Arrows - Positioned to the side, not over videos */}
          <div className="absolute left-[2%] md:left-[-10%] lg:left-[-60px] top-1/2 -translate-y-1/2 z-30">
            <button className="swiper-button-prev-custom w-8 h-8 md:w-10 md:h-10 bg-[var(--primary-text-color)] rounded-full flex items-center justify-center text-[var(--text-color)] cursor-pointer hover:bg-[var(--primary-text-color)] transition-all active:scale-90">
              <ChevronLeft size={20} strokeWidth={3} />
            </button>
          </div>

          <div className="absolute right-[2%] md:right-[-10%] lg:right-[-60px] top-1/2 -translate-y-1/2 z-30">
            <button className="swiper-button-next-custom w-8 h-8 md:w-10 md:h-10 bg-[var(--primary-text-color)] rounded-full flex items-center justify-center text-[var(--text-color)] cursor-pointer hover:bg-[var(--primary-text-color)] transition-all  active:scale-90">
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
