'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface IslandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = ['EXPERIENCE', 'ABOUT', 'STACK'];

export default function IslandMenu({ isOpen, onClose }: IslandMenuProps) {
  const numItems = menuItems.length;
  const MAX_STAGGER_DURATION = 0.3; // total stagger time in seconds
  const stagger = MAX_STAGGER_DURATION / numItems;

  return (
    <motion.div
      className="overflow-hidden"
      animate={{
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
        marginBottom: isOpen ? 16 : 0,
      }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="flex flex-col gap-4">
        <AnimatePresence>
          {isOpen &&
            menuItems.map((item, index) => {
              const openDelay = (numItems - 1 - index) * stagger; // bottom-to-top fade in
              const closeDelay = index * stagger; // top-to-bottom fade out

              return (
                <motion.button
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: isOpen ? openDelay : closeDelay,
                    duration: 0.35,
                    ease: 'easeOut',
                  }}
                  onClick={onClose}
                  className="text-neutral-100 text-left hover:text-neutral-400 transition px-2
                  py-1 cursor-pointer"
                >
                  {item}
                </motion.button>
              );
            })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
