import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Staricon1 from "../assets/images/star-icon-01.svg";
import Staricon2 from "../assets/images/star-icon-02.svg";
import portfolioVideo1 from "../assets/videos/portfolio-video-01.mp4";
import portfolioVideo2 from "../assets/videos/portfolio-video-02.mp4";
import portfolioVideo3 from "../assets/videos/portfolio-video-03.mp4";
import portfolioVideo4 from "../assets/videos/portfolio-video-04.mp4";

const videosData = [
  { id: 1, src: portfolioVideo1 },
  { id: 2, src: portfolioVideo2 },
  { id: 3, src: portfolioVideo3 },
  { id: 4, src: portfolioVideo4 },
  { id: 5, src: portfolioVideo1 },
  { id: 6, src: portfolioVideo2 },
];

const VideoItem = ({ id, src, activeVideoId, setActiveVideoId }) => {
  const videoRef = React.useRef(null);
  const isPlaying = activeVideoId === id;

  const togglePlay = () => {
    if (isPlaying) {
      setActiveVideoId(null);
    } else {
      setActiveVideoId(id);
    }
  };

  React.useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div
      className="relative rounded-[5px] overflow-hidden aspect-9/16 cursor-pointer group border-1 border-[#F46801]"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      
      />

      {/* Play Icon - Only visible when NOT playing */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${isPlaying ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
      >
        <div className="w-10 h-10 md:w-12 md:h-12 bg-(--primary-text-color) rounded-full flex items-center justify-center shadow-lg">
          <Play size={20} fill="white" color="white" className="ml-1" />
        </div>
      </div>

      {/* Hover Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
      )}
    </div>
  );
};

const ReadyToPost = () => {
  const [activeVideoId, setActiveVideoId] = React.useState(null);

  return (
    <section className=" md:py-20 py-0  text-[--primary-text-color] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[800px]">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          {/* Star Decoration 1 */}
          <div className="absolute left-[5%] md:left-[15%] -top-8 w-10 md:w-16 animate-pulse">
            <img src={Staricon1} alt="star" className="w-full h-auto" />
          </div>

          <h2 className="text-[20px] md:text-[30px] font-black tracking-[4px]  text-white uppercase">
            WE TURN RAW CLIPS INTO
          </h2>

          <div className="relative inline-block px-10">
            <h1 className="text-[40px] md:text-[60px]  font-black leading-none tracking-tight uppercase italic">
              <span className="text-(--primary-text-color)">Ready-To-Post</span>
              <br />
              <span className="text-(--text-color)">Bangers</span>
            </h1>

            {/* Star Decoration 2 */}
            <div className="absolute -right-1 md:-right-8 top-1/2 -translate-y-1/2 w-10 md:w-16">
              <img src={Staricon2} alt="star" className="w-full h-auto" />
            </div>
          </div>

          <p className="mt-6 text-[20px] text-[--primary-text-color] font-normal">
            Trusted by creators, coaches, and brands across multiple industries.
          </p>
        </div>

        {/* Desktop Grid Layout (Visible from MD upwards) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 ">
          {videosData.map((video) => (
            <VideoItem
              key={video.id}
              id={video.id}
              src={video.src}
              activeVideoId={activeVideoId}
              setActiveVideoId={setActiveVideoId}
            />
          ))}
        </div>

        {/* Mobile Slider Layout (Visible only on small screens) */}
        <div className="md:hidden relative px-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".ready-next",
              prevEl: ".ready-prev",
            }}
            className="pb-0"
          >
            {videosData.map((video) => (
              <SwiperSlide key={video.id}>
                <VideoItem
                  id={video.id}
                  src={video.src}
                  activeVideoId={activeVideoId}
                  setActiveVideoId={setActiveVideoId}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Navigation Buttons */}
          <button className="ready-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-(--primary-text-color) rounded-full flex items-center justify-center text-white active:scale-95 transition-transform shadow-lg">
            <ChevronLeft size={20} strokeWidth={3} />
          </button>
          <button className="ready-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-(--primary-text-color) rounded-full flex items-center justify-center text-white active:scale-95 transition-transform shadow-lg">
            <ChevronRight size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToPost;
