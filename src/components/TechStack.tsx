"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function TechStack() {
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
    <section className="h-svh flex flex-col items-center pt-28 px-4 lg:px-8">
      <h2 className="flex justify-center w-full mb-8">
        <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase">
          Tech Stack
        </span>
      </h2>
      <div ref={gridRef} className="relative w-full">
        <div className="grid grid-cols-1 lg:hidden">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item flex items-center justify-center border-b border-neutral-300 group cursor-pointer h-[100px]"
            aria-label="Visit React website"
          >
            <img
              alt="React"
              loading="lazy"
              width="60"
              height="60"
              decoding="async"
              data-nimg="1"
              className="z-10"
              src="/react.svg"
            />
          </a>
          <a
            href="https://graphql.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item flex items-center justify-center border-b border-neutral-300 group cursor-pointer h-[100px]"
            aria-label="Visit GraphQL website"
          >
            <img
              alt="Graph QL"
              loading="lazy"
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              className="z-10"
              src="/graphql.svg"
            />
          </a>

          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item flex items-center justify-center border-b border-neutral-300 group cursor-pointer h-[100px]"
            aria-label="Visit TypeScript website"
          >
            <img
              alt="TypeScript"
              loading="lazy"
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              className="z-10"
              src="/typescript.svg"
            />
          </a>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item flex items-center justify-center border-b border-neutral-300 group cursor-pointer h-[100px]"
            aria-label="Visit Next.js website"
          >
            <img
              alt="Next.js"
              loading="lazy"
              width="70"
              height="70"
              decoding="async"
              data-nimg="1"
              className="z-10"
              src="/nextjs.svg"
            />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item flex items-center justify-center border-b border-neutral-300 group cursor-pointer h-[100px]"
            aria-label="Visit TailwindCSS website"
          >
            <img
              alt="TailwindCSS"
              loading="lazy"
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              className="z-10"
              src="/tailwindcss.svg"
            />
          </a>
          <a
            href="https://supabase.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item flex items-center justify-center border-b border-neutral-300 group cursor-pointer h-[100px]"
            aria-label="Visit Supabase website"
          >
            <img
              alt="Supabase"
              loading="lazy"
              width="40"
              height="40"
              decoding="async"
              data-nimg="1"
              className="z-10"
              src="/supabase.svg"
            />
          </a>
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item flex items-center justify-center border-neutral-300 group cursor-pointer h-[100px]"
            aria-label="Visit Vercel website"
          >
            <img
              alt="Vercel"
              loading="lazy"
              width="70"
              height="70"
              decoding="async"
              data-nimg="1"
              className="z-10"
              src="/vercel.svg"
            />
          </a>
        </div>
        <div className="hidden lg:grid grid-rows-2">
          <div className="grid grid-cols-3 border-b border-neutral-300 h-[clamp(200px,20vw,400px)]">
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
              aria-label="Visit React website"
            >
              <img
                alt="React"
                loading="lazy"
                width="90"
                height="90"
                decoding="async"
                data-nimg="1"
                className="z-10"
                src="/react.svg"
              />
            </a>
            <a
              href="https://graphql.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
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
                src="/graphql.svg"
              />
            </a>

            <a
              href="https://www.typescriptlang.org"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center group cursor-pointer"
              aria-label="Visit TypeScript website"
            >
              <img
                alt="TypeScript"
                loading="lazy"
                width="70"
                height="70"
                decoding="async"
                data-nimg="1"
                className="z-10"
                src="/typescript.svg"
              />
            </a>
          </div>
          <div className="grid grid-cols-4 h-[clamp(200px,15vw,400px)]">
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
              aria-label="Visit Next.js website"
            >
              <img
                alt="Next.js"
                loading="lazy"
                width="90"
                height="90"
                decoding="async"
                data-nimg="1"
                className="z-10"
                src="/nextjs.svg"
              />
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
              aria-label="Visit TailwindCSS website"
            >
              <img
                alt="TailwindCSS"
                loading="lazy"
                width="70"
                height="70"
                decoding="async"
                data-nimg="1"
                className="z-10"
                src="/tailwindcss.svg"
              />
            </a>
            <a
              href="https://supabase.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-r border-neutral-300 group cursor-pointer"
              aria-label="Visit Supabase website"
            >
              <img
                alt="Supabase"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                className="z-10"
                src="/supabase.svg"
              />
            </a>
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex items-center justify-center border-neutral-300 group"
              aria-label="Visit Vercel website"
            >
              <img
                alt="Vercel"
                loading="lazy"
                width="90"
                height="90"
                decoding="async"
                data-nimg="1"
                className="z-10"
                src="/vercel.svg"
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
