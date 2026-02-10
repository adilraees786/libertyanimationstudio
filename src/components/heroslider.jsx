import React, { useRef, useEffect, useState, useCallback } from "react";
import Sliderimge1 from "../assets/images/slider-gif-001.gif";
import Sliderimge2 from "../assets/images/slider-gif-002.gif";
import Sliderimge3 from "../assets/images/slider-gif-003.gif";
import Sliderimge4 from "../assets/images/slider-gif-004.gif";
import Sliderimge5 from "../assets/images/slider-gif-005.gif";
import Sliderimge6 from "../assets/images/slider-gif-006.gif";
import Sliderimge7 from "../assets/images/slider-gif-007.gif";

const HeroSlider = () => {
  const images = [
    Sliderimge1,
    Sliderimge2,
    Sliderimge3,
    Sliderimge4,
    Sliderimge5,
    Sliderimge6,
    Sliderimge7,
  ];

  // Quadruple images for seamless infinite scroll
  // This ensures we have enough content to scroll through before resetting
  const displayImages = [...images, ...images, ...images, ...images];

  // Refs for animation and state interaction
  const trackRef = useRef(null);
  const requestRef = useRef(null);
  const positionRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const previousTranslateRef = useRef(0);
  const contentWidthRef = useRef(0); // Use Ref for RAF loop access

  const SPEED = 0.8;
  const DRAG_THRESHOLD = 5;

  // Measure content width once mounted
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        // We have 4 sets of images. The "single loop" width is Total / 4.
        // We wrap around when we have scrolled past this width.
        const totalWidth = trackRef.current.scrollWidth;
        contentWidthRef.current = totalWidth / 4;
      }
    };

    // Initial measure
    measure();

    // Remeasure on load just in case images affect width
    window.addEventListener("load", measure);
    window.addEventListener("resize", measure);

    // Safety check after a delay
    setTimeout(measure, 500);

    return () => {
      window.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const animate = useCallback(() => {
    // If not dragging, move automatically
    if (!isDraggingRef.current) {
      positionRef.current -= SPEED;
    }

    const width = contentWidthRef.current;
    if (width > 0) {
      // Wrap when scrolled too far LEFT (auto-scroll direction)
      if (positionRef.current <= -width) {
        positionRef.current += width;
      }
      // Wrap when scrolled too far RIGHT (user dragged left-to-right)
      if (positionRef.current >= 0) {
        positionRef.current -= width;
      }
    }

    // Apply transform directly to DOM for performance
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
    }

    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  // ---- Mouse / Touch Handling ----

  const onMouseDown = (e) => {
    isDraggingRef.current = false; // Reset drag state
    startXRef.current = e.clientX;
    previousTranslateRef.current = positionRef.current;

    const onMouseMove = (moveEvent) => {
      const diff = moveEvent.clientX - startXRef.current;

      // Determine if it's a drag or just a click
      // We only stop auto-scroll if user MOVES
      if (!isDraggingRef.current && Math.abs(diff) > DRAG_THRESHOLD) {
        isDraggingRef.current = true;
      }

      if (isDraggingRef.current) {
        positionRef.current = previousTranslateRef.current + diff;
      }
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  // Touch logic (simpler, attached to element)
  const onTouchStart = (e) => {
    isDraggingRef.current = false;
    startXRef.current = e.touches[0].clientX;
    previousTranslateRef.current = positionRef.current;
  };

  const onTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = currentX - startXRef.current;

    if (!isDraggingRef.current && Math.abs(diff) > DRAG_THRESHOLD) {
      isDraggingRef.current = true;
    }

    if (isDraggingRef.current) {
      positionRef.current = previousTranslateRef.current + diff;
    }
  };

  const onTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      className="w-full relative select-none overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div ref={trackRef} className="flex w-max will-change-transform">
        {displayImages.map((img, index) => (
          <div key={index} className="flex-shrink-0 px-2.5 flex items-start">
            <div
              className={`w-[200px] md:w-[280px] h-auto overflow-hidden border border-white/5 shadow-2xl transition-transform duration-500 hover:scale-105 pointer-events-none ${
                index % 2 !== 0 ? "mt-16 md:mt-[48px]" : ""
              }`}
            >
              <img
                src={img}
                alt={`Slider clip ${index + 1}`}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Edge Fades for smoothness */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/40 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default HeroSlider;
