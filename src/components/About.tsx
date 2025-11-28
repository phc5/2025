import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-12 gap-4 lg:gap-8 pt-56 pb-28 p-4 lg:px-8"
    >
      <div className="flex flex-col col-span-12 lg:col-span-7">
        <h4 className="font-medium uppercase mb-4">
          <div className="text-[clamp(16px,1.2vw,20px)]">About Me</div>
        </h4>
        <p className="text-[clamp(28px,3.5vw,40px)] font-semibold leading-none">
          Senior Software Engineer with 8+ years of experience building web
          applications and user interfaces at Meta, Amazon Web Services, and
          Kelley Blue Book.
        </p>
      </div>
    </section>
  );
}
