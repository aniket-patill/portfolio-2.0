import { workExperience } from "@/data";
import React from "react";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
           Work <span className="text-blue-500">Experience</span>
        </h1>

        <div className="w-full grid grid-cols-1 gap-10">
            {workExperience.map((card) => (
                <div
                    key={card.id}
                    className="group relative w-full flex flex-col md:flex-row items-center border border-gray-200 bg-white shadow-lg  hover:shadow-2xl transition-all duration-300 rounded-[1.5rem] md:rounded-[2.5rem] p-8 md:p-14 gap-8 md:gap-14 overflow-hidden"
                >
                    {/* Decorative gradient blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-blue-100/50 transition-colors" />

                    <div className="flex-shrink-0 relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-2xl md:rounded-3xl flex items-center justify-center border border-gray-100 p-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                          <img 
                              src={card.thumbnail} 
                              alt={card.title} 
                              className="w-full h-full object-contain"
                          />
                        </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left z-10">
                        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors">
                            {card.title}
                        </h2>
                        <p className="text-gray-500 font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed max-w-4xl">
                            {card.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
