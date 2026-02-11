import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Play, ChevronLeft, ChevronRight } from "lucide-react";

import PortfolioArrow from "../assets/images/portfolio-arrow.png";
import ManImage from "../assets/images/man-image.svg";
import ManImage2 from "../assets/images/man-image-02.svg";

import video1 from "../assets/videos/vdeo-01.mp4";
import video2 from "../assets/videos/vdeo-02.mp4";
import video3 from "../assets/videos/vdeo-03.mp4";
import video4 from "../assets/videos/vdeo-04.mp4";
import video5 from "../assets/videos/vdeo-05.mp4";
import video6 from "../assets/videos/vdeo-06.mp4";
import video7 from "../assets/videos/vdeo-07.mp4";
import video8 from "../assets/videos/vdeo-08.mp4";

/* ------------------ Video Data ------------------ */

const videoDataOne = [
  { id: 1, src: video1 },
  { id: 2, src: video2 },
  { id: 3, src: video3 },
  { id: 4, src: video4 },
];

const videoDataTwo = [
  { id: 1, src: video5 },
  { id: 2, src: video6 },
  { id: 3, src: video7 },
  { id: 4, src: video8 },
];

/* ------------------ Video Card ------------------ */

const VideoCard = ({ item, isActive, isGrid = false }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  return (
    <div
      onClick={togglePlay}
      className={`relative rounded-[15px] overflow-hidden aspect-[9/16]
      transition-all duration-500 border-2 w-full mx-auto cursor-pointer shadow-2xl
      ${
        isGrid
          ? "border-[var(--primary-text-color)] hover:scale-[1.02]"
          : isActive
            ? "scale-100 border-[var(--primary-text-color)]"
            : "opacity-40 border-transparent"
      }`}
    >
      <video
        ref={videoRef}
        src={item.src}
        className="w-full h-full object-cover"
        loop
        playsInline
        preload="metadata"
      />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-12 h-12 md:w-14 md:h-14 bg-[var(--primary-text-color)]
          rounded-full flex items-center justify-center transition-all duration-300
          ${(isGrid || isActive) && !isPlaying ? "opacity-100" : "opacity-0"}`}
        >
          <Play size={24} fill="white" color="white" className="ml-1" />
        </div>
      </div>
    </div>
  );
};

/* ------------------ Section Component ------------------ */

const PortfolioSection = ({
  name,
  image,
  subtitle,
  videos,
  sliderClass,
  prevBtn,
  nextBtn,
}) => (
  <div className="w-full max-w-[1200px] mb-20 flex flex-col items-center">
    {/* Header */}
    <div className="flex items-center gap-4 mb-12 px-4">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-[var(--primary-text-color)] p-0.5">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div>
        <h2 className="text-[20px] md:text-[30px] font-bold uppercase tracking-tight leading-none text-white">
          {name}
        </h2>
      <p className="text-[var(--primary-text-color)] text-[14px] md:text-[18px] font-normal tracking-wide mt-2">
          {subtitle}
        </p>
      </div>
    </div>

    {/* Desktop Grid */}
    <div className="hidden lg:grid grid-cols-4 gap-8 px-4">
      {videos.map((item) => (
        <VideoCard key={item.id} item={item} isActive isGrid />
      ))}
    </div>

    {/* Mobile Slider (1 by 1) */}
    <div className="lg:hidden relative w-full px-4">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={false}
        loop={true}
        navigation={{ nextEl: `.${nextBtn}`, prevEl: `.${prevBtn}` }}
        className={`${sliderClass} pb-10`}
      >
        {videos.map((item) => (
          <SwiperSlide key={item.id} className="py-6">
            {({ isActive }) => <VideoCard item={item} isActive={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={`${prevBtn} absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 
        bg-[var(--primary-text-color)] rounded-full flex items-center justify-center`}
      >
        <ChevronLeft size={20} strokeWidth={3} />
      </button>

      <button
        className={`${nextBtn} absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 
        bg-[var(--primary-text-color)] rounded-full flex items-center justify-center`}
      >
        <ChevronRight size={20} strokeWidth={3} />
      </button>
    </div>
  </div>
);

/* ------------------ Main Component ------------------ */

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className=" text-white flex flex-col items-center overflow-x-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="inline-block px-10 py-1.5 border border-[var(--primary-text-color)] rounded-full mb-4">
         <span className="text-[24px] font-black tracking-[2px] text-[var(--text-color)]">
          Portfolio
         </span>
        </div>

        <img
          src={PortfolioArrow}
          alt="arrow decoration"
          className="h-28 md:h-36 opacity-80 mb-10"
        />

        <PortfolioSection
          name="Daniel Iles"
          image={ManImage}
          subtitle="829K+ YouTube Subscribers"
          videos={videoDataOne}
          sliderClass="portfolio-swiper-one"
          prevBtn="swiper-btn-prev-one"
          nextBtn="swiper-btn-next-one"
        />

        <PortfolioSection
          name="Vijay Singh"
          image={ManImage2}
          subtitle="100K+ Instagram Subscribers"
          videos={videoDataTwo}
          sliderClass="portfolio-swiper-two"
          prevBtn="swiper-btn-prev-two"
          nextBtn="swiper-btn-next-two"
        />
      </div>
    </section>
  );
};

export default Portfolio;
