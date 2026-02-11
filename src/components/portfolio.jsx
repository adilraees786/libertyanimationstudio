import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Play, ChevronLeft, ChevronRight } from "lucide-react";

import PortfolioArrow from "../assets/images/portfolio-arrow.png";
import ManImage from "../assets/images/man-image.svg";
import ManImage2 from "../assets/images/man-image-02.svg";
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
];
// slider 2
const videoDataslidertwo = [
  { id: 1, src: portfolioVideo5 },
  { id: 2, src: portfolioVideo6 },
  { id: 3, src: portfolioVideo7 },
  { id: 4, src: portfolioVideo8 },
];

const VideoSlideContent = ({ item, isActive, isGrid = false }) => {
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
      className={`relative rounded-[15px] overflow-hidden aspect-9/16 transition-all duration-700 ease-in-out border-2 ${
        isGrid
          ? "border-(--primary-text-color) opacity-100 hover:scale-[1.02]"
          : isActive
            ? "lg:scale-[1.15] scale-110 z-20 border-(--primary-text-color) opacity-100"
            : "scale-90 opacity-30 border-transparent blur-[1px]"
      } w-full cursor-pointer group mx-auto shadow-2xl`}
    >
      <video
        ref={videoRef}
        src={item.src}
        className="w-full h-full object-cover"
        loop
        playsInline
        preload="metadata"
      />

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-12 h-12 md:w-14 md:h-14 bg-[var(--primary-text-color)] rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
            (isGrid || isActive) && !isPlaying
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }`}
        >
          <Play size={24} fill="white" color="white" className="ml-1" />
        </div>
      </div>

      {!isGrid && !isActive && <div className="absolute inset-0 bg-black/40" />}
    </div>
  );
};

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-12 md:py-24 text-white min-h-screen flex flex-col items-center overflow-x-hidden"
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

        {/* --- Section 1: Daniel Iles --- */}
        <div className="w-full max-w-[1200px] mb-20 flex flex-col items-center">
          <div className="flex flex-row items-center justify-center gap-4 mb-12 text-left px-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-(--primary-text-color) p-0.5">
              <img
                src={ManImage}
                alt="Daniel Iles"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[24px] md:text-[36px] font-bold uppercase tracking-tight leading-none text-white">
                Daniel Iles
              </h2>
              <p className="text-[var(--primary-text-color)] text-[14px] md:text-[18px] font-medium tracking-wide mt-2">
                829K+ YouTube Subscribers
              </p>
            </div>
          </div>

          {/* Desktop Grid for Section 1 */}
          <div className="hidden lg:grid grid-cols-4 gap-8 px-4">
            {videoData.map((item) => (
              <VideoSlideContent
                key={item.id}
                item={item}
                isActive={true}
                isGrid={true}
              />
            ))}
          </div>

          {/* Mobile/Tablet Slider for Section 1 */}
          <div className="lg:hidden relative w-full px-4">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              navigation={{
                nextEl: ".swiper-btn-next-one",
                prevEl: ".swiper-btn-prev-one",
              }}
              breakpoints={{
                640: { slidesPerView: 1.8, spaceBetween: 20 },
                768: { slidesPerView: 2.2, spaceBetween: 30 },
              }}
              className="portfolio-swiper-one w-full pb-10"
            >
              {videoData.map((item) => (
                <SwiperSlide key={item.id} className="py-8">
                  {({ isActive }) => (
                    <VideoSlideContent item={item} isActive={isActive} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="swiper-btn-prev-one absolute left-[-5px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-(--primary-text-color) rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,0,0,0.3)] active:scale-95 transition-all">
              <ChevronLeft size={20} strokeWidth={3} />
            </button>
            <button className="swiper-btn-next-one absolute right-[-5px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-(--primary-text-color) rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,0,0,0.3)] active:scale-95 transition-all">
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* --- Section 2: Vijay Singh --- */}
        <div className="w-full max-w-[1200px] mb-20 flex flex-col items-center">
          <div className="flex flex-row items-center justify-center gap-4 mb-12 text-left px-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-(--primary-text-color) p-0.5">
              <img
                src={ManImage2}
                alt="Vijay Singh"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[24px] md:text-[36px] font-bold uppercase tracking-tight leading-none text-white">
                Vijay Singh
              </h2>
              <p className="text-(--primary-text-color) text-[14px] md:text-[18px] font-medium tracking-wide mt-2">
                100K+ Instagram Subscribers
              </p>
            </div>
          </div>

          {/* Desktop Grid for Section 2 */}
          <div className="hidden lg:grid grid-cols-4 gap-8 px-4">
            {videoDataslidertwo.map((item) => (
              <VideoSlideContent
                key={item.id}
                item={item}
                isActive={true}
                isGrid={true}
              />
            ))}
          </div>

          {/* Mobile/Tablet Slider for Section 2 */}
          <div className="lg:hidden relative w-full px-4">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              loop={true}
              navigation={{
                nextEl: ".swiper-btn-next-two",
                prevEl: ".swiper-btn-prev-two",
              }}
              breakpoints={{
                640: { slidesPerView: 1.8, spaceBetween: 20 },
                768: { slidesPerView: 2.2, spaceBetween: 30 },
              }}
              className="portfolio-swiper-two w-full pb-10"
            >
              {videoDataslidertwo.map((item) => (
                <SwiperSlide key={item.id} className="py-8">
                  {({ isActive }) => (
                    <VideoSlideContent item={item} isActive={isActive} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="swiper-btn-prev-two absolute left-[-5px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-(--primary-text-color) rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,0,0,0.3)] active:scale-95 transition-all">
              <ChevronLeft size={28} strokeWidth={3} />
            </button>
            <button className="swiper-btn-next-two absolute right-[-5px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-(--primary-text-color) rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,0,0,0.3)] active:scale-95 transition-all">
              <ChevronRight size={28} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
