"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const museoSans = localFont({
  src: [
    {
      path: "../../public/fonts/MuseoSans_500.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-museo-sans",
});

export default function Experience() {
  const sectionRef = useRef(null);
  const metaRef = useRef(null);
  const awsRef = useRef(null);
  const kbbRef = useRef(null);
  const metaContentRef = useRef(null);
  const awsContentRef = useRef(null);
  const kbbContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 0.1,
          snap: {
            snapTo: [0, 0.33, 0.66, 1], // Snap to each company
            duration: 0.1, // How long the snap takes
            ease: "power4.inOut",
          },
        },
      });

      // Meta highlight and content (0-33%)
      tl.to(metaContentRef.current, {
        opacity: 0,
        pointerEvents: "none",
      })
        .to(
          metaRef.current,
          {
            backgroundColor: "#000000",
            borderColor: "#000000",
          },
          "<"
        )
        // AWS highlight and content (33-66%)
        .to(
          awsRef.current,
          {
            backgroundColor: "#FF9900",
            borderColor: "#FF9900",
          },
          "<"
        )
        .to(awsContentRef.current, {
          opacity: 1,
          pointerEvents: "auto",
        })
        .to(awsContentRef.current, {
          opacity: 0,
          pointerEvents: "none",
        })
        .to(
          awsRef.current,
          {
            backgroundColor: "#000000",
            borderColor: "#000000",
          },
          "<"
        )
        // KBB highlight and content (66-100%)
        .to(
          kbbRef.current,
          {
            backgroundColor: "#1F3E74",
            borderColor: "#1F3E74",
          },
          "<"
        )
        .to(kbbContentRef.current, {
          opacity: 1,
          pointerEvents: "auto",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="h-screen flex flex-col py-28 px-4 lg:px-8"
    >
      <h2 className="flex justify-between w-full mb-6 lg:mb-20">
        <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase">
          Experience
        </span>
      </h2>

      <div className="flex">
        <div className="flex-2">{/* Your empty content here */}</div>

        <div className="flex-1 flex flex-col">
          {/* Logo boxes */}
          <div className="flex gap-2 mb-6">
            <div
              ref={metaRef}
              className="border-[#0081FB] fill-black bg-[#0081FB] border-2 rounded-2xl p-2 shrink-0"
            >
              <Image
                src="/meta.svg"
                alt="Meta"
                width={50}
                height={50}
                className="invert"
              />
            </div>

            <div
              ref={awsRef}
              className="border-black fill-black bg-black border-2 rounded-2xl p-2 shrink-0"
            >
              <Image
                src="/aws.svg"
                alt="AWS"
                width={50}
                height={50}
                className="invert"
              />
            </div>

            <div
              ref={kbbRef}
              className="flex items-center justify-center border-black fill-black bg-black border-2 rounded-2xl p-2 h-[70px] w-[70px] shrink-0"
            >
              <p
                className={`font-extrabold text-2xl invert ${museoSans.className}`}
              >
                KBB
              </p>
            </div>
          </div>

          {/* Content area */}
          <div className="relative flex-1">
            {/* Meta content */}
            <div
              ref={metaContentRef}
              className="absolute inset-0 opacity-100 pointer-events-auto"
            >
              <h3 className="font-extrabold text-4xl mb-2">Meta</h3>
              <p className="font-semibold uppercase text-neutral-600 mb-4 tracking-tight">
                August 2021 - Now
              </p>
              <p className="text-neutral-700 font-bold text-2xl mb-4 tracking-tighter">
                Building developer infrastructure and tools that help Meta
                engineers monitor, track, and diagnose the performance,
                reliability, and stability of their applications.
              </p>
              <p className="uppercase font-extrabold text-2xl bg-[linear-gradient(45deg,#B3DBFF,#0081FB_75%,#004A94_100%)] bg-clip-text text-transparent tracking-tighter">
                React GraphQL Relay Hack Flow HTML CSS Python
              </p>
            </div>

            {/* AWS content */}
            <div
              ref={awsContentRef}
              className="absolute inset-0 opacity-0 pointer-events-none"
            >
              <h3 className="font-extrabold text-4xl mb-2">
                Amazon Web Services
              </h3>
              <p className="font-semibold uppercase text-neutral-600 mb-4 tracking-tight">
                July 2020 - July 2021
              </p>
              <p className="text-neutral-700 font-bold text-2xl mb-4 tracking-tighter">
                Worked on the AWS Activate Console and internal Activate Admin
                CMS and shipped Tech Hub for the Activate Console's{" "}
                <a
                  href="https://aws.amazon.com/about-aws/whats-new/2020/10/introducing-the-aws-activate-console/"
                  target="_blank"
                  className="underline"
                >
                  October 2020 GA launch
                </a>
                .
              </p>
              <p className="uppercase font-extrabold text-2xl bg-[linear-gradient(45deg,#FFD699,#FF9900_75%,#CC7A00_100%)] bg-clip-text text-transparent tracking-tighter">
                React AWS HTML CSS
              </p>
            </div>

            {/* KBB content */}
            <div
              ref={kbbContentRef}
              className="absolute inset-0 opacity-0 pointer-events-none"
            >
              <h3 className="font-extrabold text-4xl mb-2">Kelley Blue Book</h3>
              <p className="font-semibold uppercase text-neutral-600 mb-4 tracking-tight">
                May 2017 - July 2020
              </p>
              <p className="text-neutral-700 font-bold text-2xl mb-4 tracking-tighter">
                Shipped microservices and web applications for KBB.com and
                developed UI components for internal component library.
              </p>
              <p className="uppercase font-extrabold text-2xl bg-[linear-gradient(45deg,#8FA9D4,#1F3E74_75%,#0F1E3A_100%)] bg-clip-text text-transparent tracking-tighter">
                React Typescript GraphQL Node.js C# Terraform AWS HTML CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
