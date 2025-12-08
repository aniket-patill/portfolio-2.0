"use client";
import { useEffect, useMemo } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  // Memoize the words array to prevent unnecessary re-renders
  const chars = useMemo(() => words.split(""), [words]);

  useEffect(() => {
    // Only animate once when component mounts - removed words from deps
    let mounted = true;
    const timer = setTimeout(() => {
      if (mounted) {
        animate(
          "span",
          {
            opacity: 1,
          },
          {
            duration: 0.2,
            delay: stagger(0.03),
          }
        );
      }
    }, 50);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, []); // Empty deps - only run once

  const renderWords = useMemo(() => {
    return (
      <motion.div ref={scope} className="font-signature">
        {chars.map((char, idx) => {
          return (
            <motion.span
              key={`${char}-${idx}`}
              className="text-white opacity-0 font-signature"
              style={{ willChange: "opacity" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </motion.div>
    );
  }, [scope, chars]);

  return (
    <div className={cn("font-signature", className)}>
      <div className="mt-4">
        <div className="text-white leading-snug font-signature">
          {renderWords}
        </div>
      </div>
    </div>
  );
};
