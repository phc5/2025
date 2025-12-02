"use client";

import Ticker from "@/components/HorizontalTicker";

export default function Island() {
  return (
    <div
      className="py-2 pl-2 rounded-2xl md:rounded-[20px] bg-neutral-900 border
    border-neutral-800 fixed left-4 md:left-1/2 right-4 md:right-auto md:-translate-x-1/2 bottom-4
    md:bottom-6 md:w-[700px] overflow-hidden text-background z-50"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-1 gap-4">
          <div
            className="h-[60px] w-[60px] md:h-20 md:w-20 rounded-lg md:rounded-xl
        bg-neutral-100 overflow-hidden relative"
          ></div>
          <div className="flex flex-col justify-center gap-1.5 md:gap-2 w-full relative">
            <h1 className="font-bold uppercase tracking-tighter text-2xl">
              Paul Chong
            </h1>
            <Ticker speed={35}>
              <span>SOFTWARE ENGINEER</span>
              <span>UI ENGINEER</span>
              <span>HUSBAND</span>
              <span>DOG DAD</span>
              <span>GOLF LOVER</span>
              <span>TOTTENHAM FAN</span>
            </Ticker>
          </div>
        </div>
      </div>
    </div>
  );
}
