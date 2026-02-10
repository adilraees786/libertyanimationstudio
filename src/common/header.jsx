import React, { useState, useEffect } from "react";
import Logo from "../assets/images/new-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "PROCESS", href: "#process" },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "SERVICES", href: "#services" },
    { name: "CONTACT US", href: "#contact" },
    { name: "FAQ'S", href: "#faqs" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-lg py-3" : "bg-transparent py-4"
        }`}
      >
        <div className=" mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="block outline-none">
              <img
                src={Logo}
                alt="Reelax Media Logo"
                className="h-12 md:h-20 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-[#232222] border border-[var(--primary-text-color)] border-dashed border-opacity-60 rounded-full px-10 py-3 shadow-[0_0_20px_rgba(0,255,240,0.15)] hover:border-opacity-100 transition-all duration-300 m-auto">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white text-[16px] font-black tracking-[2px] hover:text-[var(--primary-text-color)] transition-colors duration-300 uppercase"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-3xl leading-none border border-white/30 rounded-md px-2 py-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-4 mt-4 mb-2 border-3 border-dashed border-[var(--primary-text-color)] rounded-[30px] bg-[#111111]/95 backdrop-blur-md p-6">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-[14px] font-black tracking-[2px] uppercase hover:text-[var(--primary-text-color)] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
