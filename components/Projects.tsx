import { projects } from "@/data";
import React from "react";
import { ArrowUpRight, Atom, Wind, FileCode, AppWindow, Cpu, Code } from "lucide-react";

const getIcon = (name: string) => {
  switch (name) {
    case "React": return <Atom size={16} className="text-blue-400" />;
    case "Tailwind": return <Wind size={16} className="text-teal-400" />;
    case "TypeScript": return <FileCode size={16} className="text-blue-600" />;
    case "Python": return <Code size={16} className="text-yellow-400" />;
    case "Next.js": return <AppWindow size={16} className="text-gray-800" />;
    case "C": return <Cpu size={16} className="text-gray-600" />;
    default: return <Code size={16} className="text-gray-400" />;
  }
};

const Projects = () => {
  return (
    <div className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="font-bold text-4xl md:text-5xl text-black mb-16">
          <span className="text-black">Projects</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div key={id} className="group relative flex flex-col gap-4">
              {/* Image Container */}
              <div className="w-full h-64 bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 group-hover:shadow-2xl transition-all duration-500 relative">
                 <img src={img} alt={title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                 
                 {/* External Link Overlay */}
                 <a href={link} target="_blank" rel="noreferrer" className="absolute inset-0 z-20" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                 <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-black group-hover:text-blue-600 transition-colors">
                        {title}
                    </h2>
                    <a href={link} target="_blank" rel="noreferrer" className="p-2 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all transform group-hover:rotate-45">
                        <ArrowUpRight size={20} className="text-gray-500 group-hover:text-gray-100" />
                    </a>
                 </div>
                 
                 <p className="text-gray-500 line-clamp-2 text-sm leading-relaxed">
                    {des}
                 </p>

                 {/* Tech Stack Icons
                 <div className="flex gap-2 mt-2">
                    {iconLists.map((icon, idx) => (
                        <div key={idx} className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center" title={icon}>
                           {getIcon(icon)}
                        </div>
                    ))}
                 </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
