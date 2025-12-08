import React from "react";
import { socialMedia } from "@/data";
import { Github, Linkedin, Mail } from "lucide-react";

// Helper to get icon by name
const getIcon = (iconName: string) => {
    switch (iconName) {
        case "Github": return <Github className="w-5 h-5" />;
        case "Linkedin": return <Linkedin className="w-5 h-5" />;
        default: return <Mail className="w-5 h-5" />;
    }
};

const Footer = () => {
  return (
    <footer className="w-full pb-10 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-5 flex flex-col items-center">
        
        {/* Top Call to Action */}
        <div className="text-center mb-5">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                Let&apos;s collaborate!
            </h2>
            <p className="text-neutral-500 mb-8">
                It&apos;s time to get in touch & let&apos;s discuss over a coffee!!
            </p>
        </div>

        {/* Blue Banner Section */}
        <div className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden text-white min-h-[300px] flex flex-col justify-between">
            {/* Quote Section - Top Right */}
            <div className="self-end max-w-md text-right">
                <p className="italic font-light text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                    &quot;Success is not final, failure is not fatal: It is the courage to continue that counts.&quot;
                </p>
                <p className="mt-2 font-medium text-xs sm:text-sm text-white/80">
                    - Winston Churchill
                </p>
            </div>

            {/* Bottom Section - Name and Social Links */}
            <div className="flex flex-col md:flex-row items-end justify-between w-full mt-10 gap-6">
                
                {/* Large Name */}
                <h1 className="text-[13vw] md:text-[8vw] lg:text-[140px] leading-[0.8] font-bold tracking-tighter uppercase text-white/20 select-none">
                   <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                    ANIKET.
                   </span>
                </h1>
                
                {/* Social Icons - Bottom Right */}
                <div className="flex gap-4 mb-2 md:mb-4">
                    {socialMedia.map((item) => (
                        <a 
                            key={item.id} 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 bg-white/10 rounded-xl hover:bg-white/20 backdrop-blur-md transition-all duration-200 border border-white/10 text-white hover:scale-110"
                            aria-label={item.icon}
                        >
                            {getIcon(item.icon)}
                        </a>
                    ))}
                </div>
            </div>
        </div>

        {/* Bottom copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-neutral-500">
            <p>© 2025 Design & Developed by <span className="font-bold text-black">Aniket Patil</span> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
