"use client";
import { useEffect } from "react";
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

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 2,
      },
      {
        duration: 0.5, // Shorter duration for individual letters
        delay: stagger(0.1), // Shorter stagger for individual letters
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="font-signature">
        {words.split("").map((char, idx) => {
          return (
            <motion.span
              key={char + idx}
              className="text-white opacity-0 font-signature"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-signature", className)}>
      <div className="mt-4">
        <div className="text-white leading-snug font-signature">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
