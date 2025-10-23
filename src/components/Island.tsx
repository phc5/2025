import Ticker from '@/components/HorizontalTicker';
import Image from 'next/image';

export default function Island() {
  return (
    <div
      className="py-2 pl-2 pr-4 md:pr-8 rounded-2xl md:rounded-[20px] bg-neutral-900 border
    border-neutral-800 fixed left-4 md:left-1/2 right-4 md:right-auto md:-translate-x-1/2 bottom-4
    md:bottom-6 md:w-[700px] z-50 overflow-hidden text-background"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div
            className="h-[60px] w-[60px] md:h-20 md:w-20 rounded-lg md:rounded-xl
        bg-neutral-100 overflow-hidden relative"
          ></div>
          <div className="flex flex-col justify-center gap-1.5 md:gap-2 w-[250px] sm:w-[500px] relative">
            <h1 className="font-bold uppercase tracking-tighter text-2xl">Paul Chong</h1>
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

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="button"
            aria-label="Open Menu"
            aria-expanded="false"
            className="text-neutral-100 hover:text-neutral-400 duration-300 cursor-pointer"
          >
            <path d="M4 18L20 18" />
            <path d="M4 12L20 12" />
            <path d="M4 6L20 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
