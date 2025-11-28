"use client";

import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface IslandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    id: "home",
    href: "/",
    label: "Home",
  },
  {
    id: "about",
    href: "#about",
    label: "About",
  },
  {
    id: "experience",
    href: "#experience",
    label: "Experience",
  },
  {
    id: "Contact",
    href: "#contact",
    label: "Contact",
  },
];

export default function IslandMenu({ isOpen, onClose }: IslandMenuProps) {
  const numItems = menuItems.length;
  const MAX_STAGGER_DURATION = 0.3; // total stagger time in seconds
  const stagger = MAX_STAGGER_DURATION / numItems;

  const scrollToSection = (id: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `${id}`, offsetY: 70 },
      ease: "power2.inOut",
    });
  };

  return (
    <motion.div
      className="overflow-hidden z-50"
      animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        marginBottom: isOpen ? 16 : 0,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="flex flex-col gap-4">
        <AnimatePresence>
          {isOpen &&
            menuItems.map((item, index) => {
              const openDelay = (numItems - 1 - index) * stagger; // bottom-to-top fade in
              const closeDelay = index * stagger; // top-to-bottom fade out

              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: isOpen ? openDelay : closeDelay,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  onClick={() => {
                    onClose();
                    scrollToSection(item.href);
                  }}
                  className="text-neutral-100 text-left hover:text-neutral-400 transition px-2
                  py-1 cursor-pointer font-semibold tracking-tight"
                >
                  {item.label}
                </motion.button>
              );
            })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
