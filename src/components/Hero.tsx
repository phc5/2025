'use client';

import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

export default function Hero() {
  useGSAP(() => {
    // Split all text elements
    const topLine = new SplitText('.top-line', { type: 'chars' });
    const title = new SplitText('.title', { type: 'chars' });
    const bottomLine = new SplitText('.bottom-line', { type: 'chars' });

    // Create timeline for sequential animation
    const tl = gsap.timeline();

    tl.from(topLine.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: 'expo.out',
      stagger: 0.03,
    })
      .from(
        title.chars,
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
          ease: 'expo.out',
          stagger: 0.03,
        },
        '-=0.4'
      ) // Starts 0.4s before previous animation ends
      .from(
        bottomLine.chars,
        {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
          ease: 'expo.out',
          stagger: 0.03,
        },
        '-=0.4'
      );
  }, []);

  return (
    <section
      className="flex flex-col uppercase font-semibold absolute bottom-[15vh]
  lg:bottom-[20vh] left-8 right-8 items-center"
    >
      <div className="w-fit flex flex-col">
        <div className="grid grid-cols-3 gap-4 overflow-hidden">
          <p className="top-line font-medium text-left tracking-tighter">A</p>
          <p className="top-line font-medium text-center tracking-tighter">REALLY</p>
          <p className="top-line font-medium text-right tracking-tighter">GOOD</p>
        </div>
        <h1 className="flex text-4xl md:text-6xl font-extrabold justify-center overflow-hidden">
          <span className="title whitespace-pre">SOFTWARE ENGINEER</span>
        </h1>
        <div className="grid grid-cols-3 gap-4 overflow-hidden">
          <p className="bottom-line font-medium text-left tracking-tighter">WHO</p>
          <p className="bottom-line font-medium text-center tracking-tighter">SHIPS</p>
          <p className="bottom-line font-medium text-right tracking-tighter">THINGS</p>
        </div>
      </div>
    </section>
  );
}
