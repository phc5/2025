'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TickerProps {
  speed?: number; // pixels per second
  gap?: number; // gap between repeated content
  children: React.ReactNode;
}

export default function Ticker({ speed = 50, children }: TickerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = React.useState(0);

  const childArray = React.Children.toArray(children);

  React.useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth);
    }
  }, [children]);

  const duration = contentWidth / speed || 20;

  // Helper: render items separated by bullets
  const renderItemsWithBullets = () =>
    childArray.flatMap((child, i) => {
      const items = [<span key={`item-${i}`}>{child}</span>];
      if (i < childArray.length - 1) {
        items.push(
          <span key={`bullet-${i}`} className="opacity-70">
            •
          </span>
        );
      }
      return items;
    });

  return (
    <div
      className="relative overflow-hidden w-full h-5 font-light text-sm tracking-wide
    text-neutral-200"
    >
      <motion.div
        className="flex whitespace-nowrap absolute left-0 top-0 items-center gap-1.5"
        animate={{ x: [`0%`, `-${contentWidth}px`] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration,
        }}
      >
        {/* Main content */}
        <div ref={containerRef} className="flex items-center gap-1.5">
          {renderItemsWithBullets()}
          <span className="opacity-70">•</span>
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-1.5">
          {renderItemsWithBullets()}
          <span className="opacity-70">•</span>
        </div>
      </motion.div>
    </div>
  );
}
