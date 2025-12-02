import React from "react";
import Image from "next/image";
import GlobeGallery from "./GlobeGallery";

export default function About() {
  return (
    <section
      id="about"
      className="flex justify-center pt-30 md:pt-40 pb-28 p-4 lg:px-8"
    >
      <div className="flex flex-col col-span-12">
        <GlobeGallery />
      </div>
    </section>
  );
}
