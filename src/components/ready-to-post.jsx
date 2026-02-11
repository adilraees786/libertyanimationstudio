import React from "react";
import Staricon1 from "../assets/images/star-icon-01.svg";
import Staricon2 from "../assets/images/star-icon-02.svg";

const ReadyToPost = () => {
  return (
    <section className=" md:py-10 py-0  text-[--primary-text-color] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[800px]">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          {/* Star Decoration 1 */}
          <div className="absolute left-[5%] md:left-[15%] -top-8 w-10 md:w-16 animate-pulse hidden md:block">
            <img src={Staricon1} alt="star" className="w-full h-auto" />
          </div>

          <h2 className="text-[20px] md:text-[30px] font-black tracking-[4px]  text-white uppercase">
            WE TURN RAW CLIPS INTO
          </h2>

          <div className="relative inline-block px-10">
            <h1 className="text-[30px] md:text-[60px]  font-black leading-none tracking-tight uppercase italic">
              <span className="text-(--primary-text-color)">Ready-To-Post</span>
              <br />
              <span className="text-(--text-color)">Bangers</span>
            </h1>

            {/* Star Decoration 2 */}
            <div className="absolute -right-1 md:-right-8 top-1/2 -translate-y-1/2 w-10 md:w-16 hidden md:block">
              <img src={Staricon2} alt="star" className="w-full h-auto" />
            </div>
          </div>

          <p className="mt-6 text-[20px] text-[--primary-text-color] font-normal">
            Trusted by creators, coaches, and brands across multiple industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadyToPost;
