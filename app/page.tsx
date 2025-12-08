"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Zap, Briefcase, Mail } from "lucide-react";

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);

  const navItemsWithIcons = [
    { name: 'Home', link: '/', icon: <Home size={20} /> },
    { name: 'About', link: '#about', icon: <User size={20} /> },
    { name: 'Skills', link: '#skills', icon: <Zap size={20} /> },
    { name: 'Projects', link: '#projects', icon: <Briefcase size={20} /> },
    { name: 'Contact', link: '#contact', icon: <Mail size={20} /> },
  ];

  return (
    <main className="relative bg-white flex flex-col items-center overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      <FloatingNav navItems={navItemsWithIcons} />
      
      <Hero />
      
      <div className="max-w-7xl w-full px-5 sm:px-10">
        <About />
        <Projects />
      </div>
      
      <Skills />

      <div className="max-w-7xl w-full px-5 sm:px-10">
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
