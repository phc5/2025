"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Contact() {
  const highlightRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gridItems = gridRef.current?.querySelectorAll(".grid-item");
    const highlight = highlightRef.current;

    if (!gridItems || !highlight) return;

    gridItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const rect = item.getBoundingClientRect();
        const parentRect = gridRef.current?.getBoundingClientRect();

        // Calculate position relative to parent
        const x = rect.left - (parentRect?.left ?? 0);
        const y = rect.top - (parentRect?.top ?? 0);

        // Animate highlight to hovered item
        gsap.to(highlight, {
          x: x,
          y: y,
          width: rect.width,
          height: rect.height,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        // Invert the image
        const img = item.querySelector("img");
        if (img) {
          gsap.to(img, {
            filter: "invert(1)",
            duration: 0.1,
          });
        }
      });

      item.addEventListener("mouseleave", () => {
        const img = item.querySelector("img");
        if (img) {
          gsap.to(img, {
            filter: "invert(0)",
            duration: 0.3,
          });
        }
      });
    });

    // Hide highlight when mouse leaves entire grid
    const handleMouseLeave = () => {
      gsap.to(highlight, {
        opacity: 0,
        duration: 0.3,
      });
    };

    gridRef.current?.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      gridRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col items-center py-28 px-4 lg:px-8"
    >
      <h2 className="flex justify-end w-full mb-6 lg:mb-8">
        <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase">
          Contact
        </span>
      </h2>
      <div className="relative w-full">
        <div ref={gridRef} className="hidden lg:grid">
          <div className="grid grid-cols-4 border-neutral-300 h-[clamp(200px,20vw,400px)]">
            <div className="grid grid-rows-2 col-span-2">
              <a
                href="https://graphql.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="grid-item col-span-1 flex items-center justify-center border-r border-b border-neutral-300 cursor-pointer"
                aria-label="Visit GraphQL website"
              >
                <img
                  alt="Graph QL"
                  loading="lazy"
                  width="80"
                  height="80"
                  decoding="async"
                  data-nimg="1"
                  className="z-10"
                  src="/linkedin.svg"
                />
              </a>
              <a
                href="mailto:paulhyunchong@gmail.com"
                className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
                aria-label="Send me an email"
                role="button"
              >
                <img
                  alt="Contact"
                  loading="lazy"
                  width="90"
                  height="90"
                  decoding="async"
                  data-nimg="1"
                  className="z-10"
                  src="/email.svg"
                />
              </a>
            </div>
            <a
              href="https://github.com/phc5"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item col-span-1 flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
              aria-label="Visit my Github"
            >
              <img
                alt="Github"
                loading="lazy"
                width="90"
                height="90"
                decoding="async"
                data-nimg="1"
                className="z-10"
                src="/github.svg"
              />
            </a>
            <a
              href="https://instagram.com/paulhc_"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item col-span-1  flex items-center justify-center border-neutral-300 group"
              aria-label="Visit My Instagram"
            >
              <img
                alt="Instagram"
                loading="lazy"
                width="90"
                height="90"
                decoding="async"
                data-nimg="1"
                className="z-10"
                src="/instagram.svg"
              />
            </a>
          </div>
        </div>

        {/* Highlight div - only visible on desktop */}
        <div
          ref={highlightRef}
          className="hidden lg:block absolute top-0 left-0 bg-neutral-900 pointer-events-none opacity-0"
          style={{ willChange: "transform" }}
        />
      </div>
    </section>
  );
}
