import React, { useState, useEffect } from "react";
import Logo from "../assets/images/new-logo.png";

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 9 seconds (1 second for fade animation)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 6000);

    // Remove loader completely after 10 seconds
    const removeTimer = setTimeout(() => {
      onFinish();
    }, 6000);

    // Prevent scrolling while loader is visible
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(244,104,1,0.08)_0%,_transparent_70%)]"></div>

      {/* Logo with pulse animation */}
      <div className="relative flex flex-col items-center gap-8">
        <img
          src={Logo}
          alt="Reelax Media"
          className="w-[200px] md:w-[300px] h-auto animate-logo-pulse"
        />

        {/* Loading bar */}
        {/* <div className="w-[160px] md:w-[240px] h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[var(--primary-text-color)] rounded-full animate-loading-bar"></div>
        </div> */}
      </div>

      <style>{`
        @keyframes logo-pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1.4);
          }
          50% {
            opacity: 0.85;
            transform: scale(1);
          }
        }

        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-logo-pulse {
          animation: logo-pulse 2.5s ease-in-out infinite;
        }

        .animate-loading-bar {
          animation: loading-bar 9s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Loader;
