"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [textFilled, setTextFilled] = useState(false);

  useEffect(() => {
    // Start exit process slightly after text fill is done to let user register it
    if (textFilled) {
      const timer = setTimeout(() => {
        onFinish();
      }, 500); // 0.5s pause after full text
      return () => clearTimeout(timer);
    }
  }, [textFilled, onFinish]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      <div className="relative inline-block text-6xl md:text-8xl font-bold tracking-tighter font-signature">
        {/* Invisible Spacer to set dimensions */}
        <span className="opacity-0 px-4 py-2 inline-block">Aniket patil</span>

        {/* Outline / Dark Text (Background) */}
        <span className="absolute top-0 left-0 text-neutral-800 px-4 py-2 inline-block">Aniket patil</span>

        {/* Filled / White Text (Foreground with Clip Path) */}
        <motion.div
           initial={{ clipPath: "inset(0 100% 0 0)" }}
           animate={{ clipPath: "inset(0 0% 0 0)" }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           onAnimationComplete={() => setTextFilled(true)}
           className="absolute top-0 left-0 text-white px-4 py-2 inline-block"
        >
        Aniket patil
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Preloader;
