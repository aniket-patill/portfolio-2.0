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
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      // Make it visible only after Hero section (approx 100vh ~ 800px)
      // "Fixed" implies it stays consistent, so we remove the direction check logic.
      if (current > 800) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 100,
        }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed bottom-10 inset-x-0 mx-auto border border-black/[0.1] rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4 items-center justify-center space-x-6",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-2 hover:text-gray-300 text-black"
            )}
          >
            <span className="text-xl">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
          </Link>
        ))}
        {/* Login button or similar can go here */}
      </motion.div>
    </AnimatePresence>
  );
};
