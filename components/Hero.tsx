import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";


const Hero = () => {
  return (
    
    <div className="relative w-full h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 flex flex-col items-center justify-center overflow-hidden"
    >

      
      <div className="z-10 flex flex-col items-center justify-center">
        <h1 className="font-signature text-6xl md:text-8xl mb-10">
          <TextGenerateEffect words="Aniket patil" className="text-white" />
        </h1>
        

        <div className="absolute bottom-20 flex flex-col items-center" style={{ animation: "bounce 2s ease-in-out infinite" }}>
           <span className="text-white text-sm mb-2">Scroll Down</span>
           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white rounded-full" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
