import React from "react";
import Logo from "../assets/images/new-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Packages", href: "#packages" },
    { name: "FAQ'S", href: "#faqs" },
    { name: "Contact Us", href: "#contact" },
    { name: "Terms & Condition", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
  ];

  return (
    <footer className="footer-section">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <a
              href="#home"
              className="flex items-center gap-3 outline-none group w-fit"
            >
              <img
                src={Logo}
                alt="Reelax Media Logo"
                className="h-18 w-auto object-contain"
              />
              <h2 className="text-[20px] md:text-[40px] font-black tracking-[2px] uppercase  transition-colors">
                Liberty{" "}
                <span className="text-[var(--primary-text-color)]">Animation</span>
              </h2>
            </a>

            <div className="space-y-4 text-[var(--text-color)] text-[14px] md:text-[16px] leading-relaxed tracking-[0.5px]">
              <p>
                Suite A, Bank House, 81 Judes Road, Egham,
                <br />
                United Kingdom, TW20 0DF
                <br />
                For Queries:{" "}
                <a
                  href="mailto:info@libertyanimationstudio.com"
                  className="hover:text-[#00FFF0] transition-colors"
                >
                  info@libertyanimationstudio.com
                </a>
              </p>

              <p className="pt-2">
                <span className="text-[var(--text-color)] font-normal">
                  Liberty Animation Studio
                </span>
                <br />8 The Green, STE A, Dover, Delaware 19901
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-black tracking-[2px] uppercase">
              QUICK LINKS
            </h3>
            <ul className="grid grid-cols-1 gap-1 text-[14px] md:text-[16px]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--text-color)] hover:text-[var(--primary-text-color)] transition-colors duration-300 text-sm md:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex justify-center">
          <p className="text-[var(--primary-text-color)] text-[12px] md:text-[16px] tracking-[1px] font-normal whitespace-nowrap">
            © Liberty Animation Studio 2026. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
