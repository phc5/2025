import React from "react";
import Image from "next/image";
import GlobeGallery from "./GlobeGallery";

export default function About() {
  return (
    <section
      id="about"
      className="h-svh flex justify-center pt-56 pb-28 p-4 lg:px-8"
    >
      <div className="flex flex-col col-span-12">
        <GlobeGallery />
      </div>
    </section>
  );
}
