import React from "react";
import ContactArrow from "../assets/images/contact-us-arrow.svg";
import Input from "../../reuseablecomponents/Input";
import { ChevronDown } from "lucide-react";

const ContactUs = () => {
  // Mock register function since the Input component expects it
  const register = (name) => ({
    name,
    onChange: () => {},
    onBlur: () => {},
    ref: () => {},
  });

  return (
    <section id="contact" className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-[1200px] flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-40">
        {/* Left Side: Headline & Arrow */}
        <div className="lg:w-1/3 text-center lg:text-left pt-10 flex flex-col items-center lg:items-start relative">
          <div className="relative">
            <h2 className="text-[25px] md:text-[45px] font-black uppercase text-[var(-text-color)] whitespace-nowrap">
              <span className="text-[var(--primary-text-color)]">
                "LET'S MAKE YOUR
              </span>
              <br />
              <span>BRAND UNMISSABLE</span>
            </h2>

            {/* Decorative Arrow - Positioned to flow from the text */}
            <div className=" hidden md:block absolute -bottom-58 -right-8 md:-right-1  w-56 md:w-64 opacity-90 pointer-events-none rotate-[-10deg]">
              <img
                src={ContactArrow}
                alt="Decoration"
                className="w-full h-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Form Container */}
        <div className="lg:w-2/3 w-full">
          <div className="border-2 border-[var(--primary-text-color)] rounded-[20px]  p-6 md:p-10 shadow-[0_0_30px_rgba(0,128,128,0.1)]">
            {/* Form Header */}
            <div className="text-center mb-10 border-b border-[var(--primary-text-color)] pb-6">
              <h3 className="text-[20px] md:text-[25px] font-black uppercase text-[var(--primary-text-color)] ">
                TELL US WHAT YOU NEED
              </h3>
              <p className="text-[var(--text-color)] text-[20px] md:text-[25px] font-black uppercase">
                WE'LL HANDLE THE REST
              </p>
            </div>

            <form className="space-y-10">
              {/* Section 1: Basic Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--primary-text-color)] font-bold">
                    1.
                  </span>
                  <p className="text-[16px] font-bold text-[var(--primary-text-color)] uppercase ">
                    Basic Information{" "}
                    <span className="text-[var(--text-color)] normal-case">
                      (So we can reach out to you.)
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    lableText="Full Name*"
                    name="fullName"
                    placeholder="Enter your name"
                    register={register}
                    extraClass="bg-white rounded-[10px] text-black h-12"
                    lableExtraClass="text-[12px] uppercase font-bold text-white"
                  />
                  <Input
                    lableText="Email Address*"
                    name="email"
                    placeholder="Enter your email"
                    register={register}
                    extraClass="bg-white rounded-[10px] text-black h-12"
                    lableExtraClass="text-[12px] uppercase font-bold text-white"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <Input
                    lableText="Contact Number"
                    name="phone"
                    placeholder="Enter phone number"
                    register={register}
                    extraClass="bg-white rounded-[10px] text-black h-12"
                    lableExtraClass="text-[12px] uppercase font-bold text-white"
                  />
                </div>
              </div>

              {/* Section 2: Business & Content Needs */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--primary-text-color)] font-bold text-[16px]">
                    2.
                  </span>
                  <p className="text-[16px] font-bold text-[var(--primary-text-color)] uppercase">
                    Your Business & Content Needs{" "}
                    <span className="text-[var(--text-color)] normal-case">
                      (Helps us understand your brand.)
                    </span>
                  </p>
                </div>

                <Input
                  lableText="Your Website / Social Media Handle"
                  name="social"
                  placeholder="(Optional but helpful)"
                  register={register}
                  extraClass="bg-white rounded-[10px] text-black h-12"
                  lableExtraClass="text-[12px] uppercase font-bold text-white"
                />

                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase font-bold text-white">
                    Tell us a bit about your brand & what you do
                  </label>
                  <textarea
                    className="w-full bg-white rounded-[10px] p-4 text-black h-32 outline-none"
                    placeholder="Write Description Here..."
                  ></textarea>
                </div>
              </div>

              {/* Section 3: Editing Needs */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--primary-text-color)] font-bold">
                    3.
                  </span>
                  <p className="text-[16px] font-bold text-[var(--primary-text-color)] uppercase italic">
                    Your Editing Needs{" "}
                    <span className="text-[var(--text-color)] normal-case">
                      (So we know exactly how to help.)
                    </span>
                  </p>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="text-[12px] uppercase font-bold text-[var(--text-color)]">
                    Which package are you interested in ?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative cursor-pointer">
                    <select className="w-full bg-white rounded-[10px] px-4 h-12 text-black appearance-none outline-none font-medium">
                      <option>Select a package</option>
                      <option>Essentials Package</option>
                      <option>Pro Package</option>
                      <option>Custom Plan</option>
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-black pointer-events-none"
                      size={20}
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Content Challenges */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--primary-text-color)] font-bold">
                    4.
                  </span>
                  <p className="text-[15px] font-bold text-[var(--primary-text-color)] uppercase ">
                    Content Challenges{" "}
                    <span className="text-[var(--text-color)] normal-case">
                      (So we can solve them for you.)
                    </span>
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase font-bold text-[var(--text-color)]">
                    What's your biggest challenge with content right now?
                  </label>
                  <textarea
                    className="w-full bg-[var(--text-color)] rounded-[10px] p-4 text-black h-32 outline-none text-sm"
                    placeholder="(Example: 'I don't have time to edit' / 'I need consistent branding' / 'I need high-quality videos')"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-10">
                <button
                  type="submit"
                  className="px-12 py-3 rounded-full border-2 border-[var(--primary-text-color)] text-[var(--primary-text-color)] font-bold uppercase tracking-[2px] transition-all duration-300 hover:bg-[var(--primary-text-color)] hover:text-[var(--text-color)] active:scale-95 text-sm"
                >
                  SUBMIT NOW!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
