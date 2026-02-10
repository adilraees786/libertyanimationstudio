import React from "react";
import HowWeAreArrow from "../assets/images/how-we-are-arrow.svg";

const HowWeAre = () => {
  const steps = [
    {
      id: "STEP 1",
      title: "WE LOCK IN",
      highlight: "YOUR VIBE",
      desc: "We binge your footage, study your brand, and build a custom editing blueprint so every video looks—and feels—100% you.",
    },
    {
      id: "STEP 2",
      title: "YOU DROP CLIPS",
      highlight: "WE DO THE WORK",
      desc: "Upload raw footage. We cut, caption, animate, and polish into scroll-stopping videos optimized for YouTube Shorts, Reels, and TikTok.",
    },
    {
      id: "STEP 3",
      title: "30 VIDEOS",
      highlight: "ZERO STRESS",
      desc: "Receive 30 platform-ready edits in 30 days—neatly organized, performance-tuned, and unlimited revisions included.",
    },
  ];

  return (
    <section
      id="process"
      className="container mx-auto w-full  md:py-20 py-10 px-2 md:px-10 md:px-16 lg:px-24 text-[var(--text-color)] overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  xl:gap-20 items-start ">
        {/* Left Content Column */}
        <div className="flex flex-col space-y-8  ">
          <div className="relative">
            <h2 className="text-[40px] md:text-[60px] font-black uppercase text-[var(--primary-text-color)] leading-none tracking-[1px] text-center md:text-left">
              WHO WE ARE
            </h2>
            {/* Arrow - curves from WHO WE ARE to right column */}
            <div className="absolute -right-8 md:-right-[100px] top-[-130px] w-20 md:w-60 pointer-events-none hidden md:block">
              <img
                src={HowWeAreArrow}
                alt="connecting arrow"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-4 text-[16px] text-[var(--text-color)] leading-[1.4]">
            <p>
              Picture this:{" "}
              <span className="text-white">
                You've got great content ideas, the camera's rolling, and the
                energy's high.
              </span>{" "}
              But then comes the bottleneck — editing. Endless revisions. Style
              mismatch. Delays. Sound familiar?
            </p>

            <p className="text-[var(--primary-text-color)] font-normal text-xl">
              That's where we come in.
            </p>

            <p>
              We're a high-speed, high-precision video editing team. Not
              freelancers. Not a faceless agency. Just a plug-and-play solution
              that makes your content hit harder, faster.
            </p>

            <p>
              We've edited over{" "}
              <span className="text-white font-bold">1,000+ videos</span> across
              industries — from creators like{" "}
              <span className="text-white font-semibold">
                Daniel lles (829K+ YouTube)
              </span>{" "}
              and{" "}
              <span className="text-white font-semibold">
                Vijay Singh (100K+ Instagram)
              </span>{" "}
              to real estate agencies, wellness brands, and scaling startups.
            </p>

            <p>
              We craft your signature editing style, keep it consistent, and
              make every video look like it was made by your in-house team —
              without the cost or chaos.
            </p>

            <p>
              6 We3stay ahead of trends, optimize for every platform, and
              deliver content that's{" "}
              <span className="text-old italic">scroll-stopping</span> and ready
              to post.
            </p>
          </div>

          <div className="pt-4">
            <button
              className="bg-[var(--primary-text-color)] text-[var(--text-color)] px-4 py-2 rounded-full font-black uppercase tracking-[2px] hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(#E{/* 08A00,0.4)] text-[16px]"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              GE4 MY 30 E8ITS
            </button>
          </div>
        </div>

        {/* Right Steps Column */}
        <div className="flex flex-col space-y-10 w-full relative">
          {/* Right Sub-headline */}
          <div className=" */}relative mb-6 flex items-center">
            <h3 className="text-[30px] md:text-[35px] font-black  uppercas ml-10 md:ml-0 tracking-[1px] leading-tight">
              AND HOW WE HELP YOU <span className="text-white">REELAX</span>
            </h3>
          </div>

          {/* Step Cards Container */}
          <div className="flex flex-col space-y-4 w-full">
            {steps.map((step) => (
              <div key={step.id} className="w-full relative group">
                {/* Dashed Border Container */}
                <div className="absolute inset-0 border-[1.5px] border-dashed border-[var(--text-color)] rounded-[10px]"></div>

                {/* Content Box with horizontal Gradient matching the image */}
                <div className="relative m-[1px] p-4 md:p-4 rounded-xl bg-gradient-to-r from-black via-[#000a0a] to-[#E08A00] overflow-hidden">
                  <div className="flex flex-col items-center text-center space-y-2 relative z-10">
                    <span className="text-[20px] md:text-[24px] font-black text-[var(--text-color)] tracking-[4px]">
                      {step.id}
                    </span>
                    <h4 className="text-[18px] font-black uppercase tracking-[1px]">
                      {step.title}{" "}
                      <span className="text-[var(--primary-text-color)]">
                        {step.highlight}
                      </span>
                    </h4>
                    <p className="text-[var(--text-color)] text-[14px]  leading-relaxed max-w-lg mt-1">
                      {step.desc}
                    </p>
                  </div>

                  {/* Subtle shine on hover */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeAre;
