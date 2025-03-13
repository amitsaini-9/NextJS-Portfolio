"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-4 md:top-10 inset-x-0 mx-auto",
          "max-w-fit",

          "border border-white/[0.2] bg-black-100 rounded-lg",
          "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          "z-[5000]",
          "flex md:inline-flex",
          "overflow-x-auto md:overflow-x-visible",
          "px-3 md:px-10 py-2 md:py-5",
          className
        )}
      >
        <div className="flex space-x-2 md:space-x-4 items-center justify-center min-w-full md:min-w-0">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "flex items-center shrink-0",
                "text-xs md:text-sm font-medium",
                "border border-neutral-200 dark:border-white/[0.2]",
                "text-black dark:text-white",
                "rounded-full relative",
                "transition-colors duration-200",
                "hover:text-neutral-500 dark:hover:text-neutral-300",
                // Different padding for mobile and desktop
                "px-3 md:px-4 py-1.5 md:py-2"
              )}
            >
              {navItem.icon && (
                <span className="block mr-1.5 md:mr-2">{navItem.icon}</span>
              )}
              <span className="whitespace-nowrap">{navItem.name}</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
