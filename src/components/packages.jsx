import React from "react";
import {
  Check,
  Video,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Packages = () => {
  const essentialsFeatures = [
    "Trimming & Cutting",
    "Captions (Trendy & Engaging)",
    "B-Rolls",
    "Optimized for All Platforms",
    "Personalized Video Branding",
    "Full Content Management",
    "Unlimited Revisions",
  ];

  const proFeatures = [
    "Everything in the Essentials Package",
    "Motion Graphics & Animations",
    "Transitions & Effects",
    "Sound Design & Audio Tweaks",
    "Personalized Video Branding",
    "Full Content Management",
    "Unlimited Revisions",
  ];

  return (
    <section id="services" className="md:py-20 py-10 px-4">
      <div className="container mx-auto max-w-[900px]">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-2">
          <div className="relative inline-block">
            <h3 className="text-[30px] font-black uppercase tracking-[2px] text-[var(--text-color)] mb-2 ">
              OUR VALUABLE
            </h3>
            <h2 className="text-[40px] md:text-[60px] font-black uppercase italic text-[var(--primary-text-color)] leading-[0.85] tracking-tight">
              PACKAGES
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-[15px] md:text-[18px] text-[var(--text-color)] font-normal px-4 pt-6">
            Packages built for creators, coaches & content-first businesses who
            want speed, quality & zero guesswork.
          </p>
        </div>

        {/* Main Plans - Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 mb-6">
          {/* Essentials Package */}
          <div className="relative group overflow-hidden rounded-[20px] bg-gradient-to-b from-[#111111] to-black border border-[var(--primary-text-color)] p-8 md:p-10 flex flex-col h-full shadow-2xl">
            <div className="mb-5">
              <h4 className="text-[20px] md:text-[30px] font-bold text-white mb-4">
                Essentials Package
              </h4>
              <div className="w-full h-px bg-white/20 mb-8"></div>

              <div className="space-y-1">
                <p className="text-[var(--text-color)] text-[18px] md:text-[20px] font-normal">
                  Clean & Engaging Edits
                </p>
                <h5 className="text-[var(--text-color)] text-[20px] md:text-[40px] font-bold leading-tight">
                  Starting From
                </h5>
                <div className="flex items-center gap-2">
                  <span className="text-[30px] md:text-[55px] font-bold text-[var(--primary-text-color)]">
                    $1000
                  </span>
                  <span className="text-[14px] text-[var(--text-color)] font-bold uppercase pt-4">
                    For Upto 30 Edits
                  </span>
                </div>
              </div>
            </div>

            <ul className="space-y-6 mb-10 flex-grow">
              {essentialsFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-[var(--primary-text-color)] flex items-center justify-center bg-[var(--primary-text-color)]/10">
                    <Check
                      size={14}
                      className="text-[var(--primary-text-color)]"
                      strokeWidth={5}
                    />
                  </div>
                  <span className="text-[var(--text-color)] text-[16px] font-normal">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-6">
              <div className="">
                <p className="text-[var(--text-color)] text-[16px] font-bold  leading-snug">
                  <span className="text-[var(--primary-text-color)]">
                    2 Months Validity
                  </span>{" "}
                  - Use your 30 edits within 60 days at your own pace.
                </p>
              </div>

              <p className="text-[12px] text-[var(--text-color)] font-bold">
                <span className="font-bold  text-[var(--primary-text-color)]">
                  Best for:
                </span>{" "}
                Creators who want clean, professional edits without the extra
                fancy effects.
              </p>

              <button className="w-full py-4 rounded-full border-2 border-[var(--primary-text-color)] text-[var(--primary-text-color)] font-black uppercase tracking-[2px] transition-all duration-300 hover:bg-[var(--primary-text-color)] hover:text-white">
                GET STARTED
              </button>
            </div>
          </div>

          {/* Pro Package */}
          <div className="relative group overflow-hidden rounded-[20px] bg-[var(--primary-text-color)] p-8 md:p-10 flex flex-col h-full text-[var(--text-color)]">
            <div className="mb-10">
              <h4 className="text-[20px] md:text-[40px] font-bold text-[var(--text-color)] mb-4">
                Pro Package
              </h4>
              <div className="w-full h-px bg-black/10 mb-8"></div>
              <div className="space-y-1">
                <p className="text-[var(--text-color)] text-[18px] md:text-[20px] font-normal">
                  High-Impact Motion Edits
                </p>
                <h5 className="text-[var(--text-color)] text-[20px] md:text-[40px] font-bold leading-tight">
                  Starting From
                </h5>
                <div className="flex items-center gap-3">
                  <span className="text-[30px] md:text-[55px] font-bold text-[var(--text-color)]">
                    $2000
                  </span>
                  <span className="text-[14px] text-[var(--text-color)] font-bold uppercase pt-4">
                    For Upto 20 Edits
                  </span>
                </div>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-[var(--text-color)] flex items-center justify-center bg-[var(--text-color)]/5">
                    <Check
                      size={14}
                      className="text-[var(--text-color)]"
                      strokeWidth={5}
                    />
                  </div>
                  <span className="text-[var(--text-color)] text-[16px] font-bold italic">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-6">
              <div className="">
                <p className="text-[var(--text-color)] text-[16px] font-bold  leading-snug">
                  <span className="text-black">2 Months Validity</span> - Use
                  your 20 edits within 60 days at your own pace.
                </p>
              </div>

              <p className="text-[12px] text-[var(--text-color)] font-bold">
                <span className="font-bold  text-black">Best for:</span>{" "}
                Creators who want high-energy, real-quality edits with all the
                motion graphics & fancy effects.
              </p>

              <button className="w-full py-4 rounded-full bg-white text-black font-black uppercase tracking-[2px] transition-all duration-300 hover:bg-black hover:text-white">
                GET STARTED
              </button>
            </div>
          </div>
        </div>

        {/* Main Plans - Mobile Swiper Slider */}
        <div className="md:hidden relative mb-6">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".pkg-btn-next",
              prevEl: ".pkg-btn-prev",
            }}
            className="packages-mobile-swiper"
          >
            {/* Essentials Package Slide */}
            <SwiperSlide>
              <div className="relative group overflow-hidden rounded-[20px] bg-gradient-to-b from-[#111111] to-black border border-[var(--primary-text-color)] p-8 flex flex-col h-full shadow-2xl">
                <div className="mb-5">
                  <h4 className="text-[20px] font-bold text-white mb-4">
                    Essentials Package
                  </h4>
                  <div className="w-full h-px bg-white/20 mb-8"></div>
                  <div className="space-y-1">
                    <p className="text-[var(--text-color)] text-[18px] font-normal">
                      Clean & Engaging Edits
                    </p>
                    <h5 className="text-[var(--text-color)] text-[20px] font-bold leading-tight">
                      Starting From
                    </h5>
                    <div className="flex items-center gap-2">
                      <span className="text-[30px] font-bold text-[var(--primary-text-color)]">
                        $1000
                      </span>
                      <span className="text-[14px] text-[var(--text-color)] font-bold uppercase pt-4">
                        For Upto 30 Edits
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-6 mb-10 flex-grow">
                  {essentialsFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-[var(--primary-text-color)] flex items-center justify-center bg-[var(--primary-text-color)]/10">
                        <Check
                          size={14}
                          className="text-[var(--primary-text-color)]"
                          strokeWidth={5}
                        />
                      </div>
                      <span className="text-[var(--text-color)] text-[16px] font-normal">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-6">
                  <p className="text-[var(--text-color)] text-[16px] font-bold leading-snug">
                    <span className="text-[var(--primary-text-color)]">
                      2 Months Validity
                    </span>{" "}
                    - Use your 30 edits within 60 days at your own pace.
                  </p>
                  <p className="text-[12px] text-[var(--text-color)] font-bold">
                    <span className="font-bold text-[var(--primary-text-color)]">
                      Best for:
                    </span>{" "}
                    Creators who want clean, professional edits without the
                    extra fancy effects.
                  </p>
                  <button className="w-full py-4 rounded-full border-2 border-[var(--primary-text-color)] text-[var(--primary-text-color)] font-black uppercase tracking-[2px] transition-all duration-300 hover:bg-[var(--primary-text-color)] hover:text-white">
                    GET STARTED
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Pro Package Slide */}
            <SwiperSlide>
              <div className="relative group overflow-hidden rounded-[20px] bg-[var(--primary-text-color)] p-8 flex flex-col h-full text-[var(--text-color)]">
                <div className="mb-10">
                  <h4 className="text-[20px] font-bold text-[var(--text-color)] mb-4">
                    Pro Package
                  </h4>
                  <div className="w-full h-px bg-black/10 mb-8"></div>
                  <div className="space-y-1">
                    <p className="text-[var(--text-color)] text-[18px] font-normal">
                      High-Impact Motion Edits
                    </p>
                    <h5 className="text-[var(--text-color)] text-[20px] font-bold leading-tight">
                      Starting From
                    </h5>
                    <div className="flex items-center gap-3">
                      <span className="text-[30px] font-bold text-[var(--text-color)]">
                        $2000
                      </span>
                      <span className="text-[14px] text-[var(--text-color)] font-bold uppercase pt-4">
                        For Upto 20 Edits
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {proFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-[var(--text-color)] flex items-center justify-center bg-[var(--text-color)]/5">
                        <Check
                          size={14}
                          className="text-[var(--text-color)]"
                          strokeWidth={5}
                        />
                      </div>
                      <span className="text-[var(--text-color)] text-[16px] font-bold italic">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-6">
                  <p className="text-[var(--text-color)] text-[16px] font-bold leading-snug">
                    <span className="text-black">2 Months Validity</span> - Use
                    your 20 edits within 60 days at your own pace.
                  </p>
                  <p className="text-[12px] text-[var(--text-color)] font-bold">
                    <span className="font-bold text-black">Best for:</span>{" "}
                    Creators who want high-energy, real-quality edits with all
                    the motion graphics & fancy effects.
                  </p>
                  <button className="w-full py-4 rounded-full bg-white text-black font-black uppercase tracking-[2px] transition-all duration-300 hover:bg-black hover:text-white">
                    GET STARTED
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Mobile Navigation Arrows */}
          <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 z-10">
            <button className="pkg-btn-prev w-9 h-9 bg-[var(--primary-text-color)] rounded-full flex items-center justify-center text-white cursor-pointer active:scale-90 transition-all shadow-lg">
              <ChevronLeft size={18} strokeWidth={3} />
            </button>
          </div>
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 z-10">
            <button className="pkg-btn-next w-9 h-9 bg-[var(--primary-text-color)] rounded-full flex items-center justify-center text-white cursor-pointer active:scale-90 transition-all shadow-lg">
              <ChevronRight size={18} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Bottom Small Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Custom Plan Card */}
          <div className="bg-[var(--primary-text-color)] rounded-[20px] p-8 md:p-10 flex flex-col items-start gap-6  relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl border-2 border-black/20 flex items-center justify-center bg-white/20 backdrop-blur-sm">
              <Video size={28} className="text-black" />
            </div>
            <div>
              <h4 className="text-[16px] md:text-[22px] font-bold text-[var(--text-color)] mb-3  tracking-tight">
                Need Something Custom?
              </h4>
              <p className="text-[var(--text-color)] text-[15px] font-normal leading-relaxed mb-8 max-w-md">
                Don't fit in a box? Neither do we. We build editing plans around
                your brand, your goals, and your workflow. Let's build your
                custom plan today.
              </p>
              <button className="px-10 py-4 rounded-full bg-black text-[var(--text-color)] font-bold uppercase tracking-widest text-[12px] transition-all duration-300 hover:scale-[1.03] shadow-lg">
                CUSTOMIZE YOUR PLAN
              </button>
            </div>
          </div>

          {/* Guarantee Card */}
          <div className="bg-gradient-to-br from-[#111111] to-black rounded-[20px] p-8 md:p-10 flex flex-col items-start gap-6 border border-[var(--primary-text-color)] shadow-xl relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl border-2 border-[var(--primary-text-color)] flex items-center justify-center bg-[var(--primary-text-color)]/5">
              <ShieldCheck
                size={28}
                className="text-[var(--primary-text-color)]"
              />
            </div>
            <div>
              <h4 className="text-[16px] md:text-[22px] font-bold text-[var(--text-color)] mb-3  tracking-tight">
                No-Risk Guarantee
              </h4>
              <p className="text-[var(--text-color)] text-[15px] font-normal leading-relaxed max-w-md">
                Not sure yet? Try us out — stress-free. If you're not happy with
                the first 1-2 edits, tell us within 7 days and we'll refund you.
                No drama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
