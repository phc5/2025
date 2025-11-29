import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="h-svh grid grid-cols-12 gap-4 lg:gap-8 pt-56 pb-28 p-4 lg:px-8"
    >
      <div className="flex flex-col col-span-12 lg:col-span-5 lg:col-start-3">
        <h4 className="font-medium uppercase mb-4">
          <div className="text-[clamp(16px,1.2vw,20px)]">About Me</div>
        </h4>
        <p className="text-[clamp(28px,3.5vw,40px)] font-semibold leading-none">
          Software Engineer with 8+ years of experience shipping web apps and
          UIs at Meta, Amazon Web Services, and Kelley Blue Book. Currently
          building developer infrastructure and tools at Meta.
        </p>
      </div>
      <div className="flex flex-col col-span-12 lg:col-span-3 lg:col-start-9">
        <Image
          src="/me.jpg"
          alt="Paul's portrait"
          width={250}
          height={250}
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
