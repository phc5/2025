import React from "react";
import Image from "next/image";
import GlobeGallery from "./GlobeGallery";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center pt-25 sm:pt-40 pb-28 p-4 lg:px-8"
    >
      <div className="hidden sm:flex flex-col col-span-12">
        <GlobeGallery />
      </div>
      <div className="sm:hidden rounded-2xl">
        <Image
          src="/globe-gallery/me-and-kora.jpg"
          height={600}
          width={600}
          alt="Me"
          className="rounded"
        />
      </div>
    </section>
  );
}
