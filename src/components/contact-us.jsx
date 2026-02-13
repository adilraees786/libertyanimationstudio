import React, { useState } from "react";
import ContactArrow from "../assets/images/contact-us-arrow.png";
import Input from "../../reuseablecomponents/Input";
import { ChevronDown, Loader2 } from "lucide-react";
import Swal from "sweetalert2";

const ContactUs = ({ preSelectedPackage, isLocked }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    social: "",
    brandDescription: "",
    packageType: "Select a package",
    challenge: "",
  });

  // Sync with pre-selected package from App.jsx
  React.useEffect(() => {
    if (preSelectedPackage) {
      setFormData((prev) => ({ ...prev, packageType: preSelectedPackage }));
    }
  }, [preSelectedPackage]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Helper to connect Input component with state
  const register = (name) => ({
    name,
    value: formData[name] || "",
    onChange: handleChange,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.fullName ||
      !formData.email ||
      formData.packageType === "Select a package"
    ) {
      Swal.fire({
        icon: "warning",
        title: "Required Fields",
        text: "Please fill in all required fields (*)",
        background: "#1a1a1a",
        color: "#fff",
        confirmButtonColor: "#F46801",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("data.........................", data);
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. We'll get back to you soon.",
          background: "#1a1a1a",
          color: "#fff",
          confirmButtonColor: "#F46801",
          timer: 5000,
          timerProgressBar: true,
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          social: "",
          brandDescription: "",
          packageType: preSelectedPackage || "Select a package",
          challenge: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: data.error || "Something went wrong. Please try again.",
          background: "#1a1a1a",
          color: "#fff",
          confirmButtonColor: "#F46801",
        });
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      Swal.fire({
        icon: "error",
        title: "Connection Error",
        text: "Failed to connect to the server. Please check your internet.",
        background: "#1a1a1a",
        color: "#fff",
        confirmButtonColor: "#F46801",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className=" py-0 px-4 overflow-hidden text-white">
      <div className="container mx-auto max-w-[1200px] flex flex-col lg:flex-row items-center lg:items-start gap-12 md:gap-40">
        {/* Left Side: Headline & Arrow */}
        <div className="lg:w-1/3 text-center lg:text-left pt-10 flex flex-col items-center lg:items-start relative">
          <div className="relative">
            <h2 className="text-[35px] md:text-[45px] font-black uppercase text-(--text-color) whitespace-nowrap leading-none">
              <span className="text-(--primary-text-color)">
                <span className="text-(--text-color)">"</span>LET'S MAKE YOUR
              </span>
              <br />
              <span>BRAND UNMISSABLE</span>
            </h2>

            {/* Decorative Arrow - Positioned to flow from the text */}
            <div className=" hidden md:block absolute -bottom-55 -right-8 md:-right-30  w-56 md:w-64 opacity-90 pointer-events-none rotate-[-10deg]">
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
          <div className="border-2 border-(--primary-text-color) rounded-[20px]  p-6 md:p-10 shadow-[0_0_30px_rgba(0,128,128,0.1)]">
            {/* Form Header */}
            <div className="text-center mb-10 border-b border-(--primary-text-color) pb-6">
              <h3 className="text-[20px] md:text-[25px] font-black uppercase text-(--primary-text-color) ">
                TELL US WHAT YOU NEED
              </h3>
              <p className="text-(--text-color) text-[20px] md:text-[25px] font-black uppercase">
                WE'LL HANDLE THE REST
              </p>
            </div>

            <form className="space-y-10" onSubmit={handleSubmit}>
              {/* Section 1: Basic Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-(--primary-text-color) font-bold">
                    1.
                  </span>
                  <p className="text-[16px] font-bold text-(--primary-text-color) uppercase ">
                    Basic Information{" "}
                    <span className="text-(--text-color) normal-case">
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
                    required
                  />
                  <Input
                    lableText="Email Address*"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    register={register}
                    extraClass="bg-white rounded-[10px] text-black h-12"
                    lableExtraClass="text-[12px] uppercase font-bold text-white"
                    required
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
                  <span className="text-(--primary-text-color) font-bold text-[16px]">
                    2.
                  </span>
                  <p className="text-[16px] font-bold text-(--primary-text-color) uppercase">
                    Your Business & Content Needs{" "}
                    <span className="text-(--text-color) normal-case">
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
                    name="brandDescription"
                    value={formData.brandDescription}
                    onChange={handleChange}
                    className="w-full bg-white rounded-[10px] p-4 text-black h-32 outline-none"
                    placeholder="Write Description Here..."
                  ></textarea>
                </div>
              </div>

              {/* Section 3: Editing Needs */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-(--primary-text-color) font-bold">
                    3.
                  </span>
                  <p className="text-[16px] font-bold text-(--primary-text-color) uppercase italic">
                    Your Editing Needs{" "}
                    <span className="text-(--text-color) normal-case">
                      (So we know exactly how to help.)
                    </span>
                  </p>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="text-[12px] uppercase font-bold text-(--text-color)">
                    Which package are you interested in ?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative cursor-pointer">
                    <select
                      name="packageType"
                      value={formData.packageType}
                      onChange={handleChange}
                      disabled={isLocked}
                      className={`w-full bg-white rounded-[10px] px-4 h-12 text-black appearance-none outline-none font-medium ${
                        isLocked ? "cursor-not-allowed opacity-80" : ""
                      }`}
                      required
                    >
                      <option disabled>Select a package</option>
                      <option>Essentials Package</option>
                      <option>Pro Package</option>
                      <option>Custom Plan</option>
                    </select>
                    {!isLocked && (
                      <ChevronDown
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-black pointer-events-none"
                        size={20}
                      />
                    )}
                  </div>
                  {isLocked && (
                    <p className="text-[10px] text-(--primary-text-color) italic mt-1 font-bold">
                      Note: You have selected this plan from the packages
                      section.
                    </p>
                  )}
                </div>
              </div>

              {/* Section 4: Content Challenges */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-(--primary-text-color) font-bold">
                    4.
                  </span>
                  <p className="text-[15px] font-bold text-(--primary-text-color) uppercase ">
                    Content Challenges{" "}
                    <span className="text-(--text-color) normal-case">
                      (So we can solve them for you.)
                    </span>
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase font-bold text-(--text-color)">
                    What's your biggest challenge with content right now?
                  </label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="w-full bg-(--text-color) rounded-[10px] p-4 text-black h-32 outline-none text-sm"
                    placeholder="(Example: 'I don't have time to edit' / 'I need consistent branding' / 'I need high-quality videos')"
                  ></textarea>
                </div>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`text-center p-3 rounded-lg ${status.type === "success" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-center pt-10">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-12 py-3 rounded-full border-2 border-(--primary-text-color) text-(--primary-text-color) font-black uppercase tracking-[2px] transition-all duration-300 hover:bg-(--primary-text-color) hover:text-(--text-color) active:scale-95 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      SENDING...
                    </>
                  ) : (
                    "SUBMIT NOW!"
                  )}
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
