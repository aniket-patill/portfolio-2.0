import React from "react";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiPython, SiGit, SiAmazon, SiMysql
} from "react-icons/si";

const skills = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPython, name: "Python" },
  { icon: SiMysql, name: "SQL" },
  { icon: SiGit, name: "Git" },
  { icon: SiAmazon, name: "AWS" },
];

const Skills = () => {
  return (
    <section className="py-20 bg-white bg-grid-black/[0.02] relative overflow-hidden" id="skills">
      <div className="w-full px-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold text-black mb-10 leading-tight">
                  Explore My Range of Abilities <br className="hidden md:block"/>
                  <span className="text-blue-400">for Building Solutions.</span>
                </h1>
                
                <div className="text-lg text-neutral-600 space-y-6 max-w-xl font-light">
                    <p>I specialize in design, management, creative direction, and development. Throughout my projects, I&apos;ve learned that efficient workflows, clear communication, and self-discipline are crucial for success.</p>
                </div>
            </div>

            {/* Skills Grid - Cube Layout */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="group flex flex-col items-center justify-center p-4 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md transition-all duration-300 hover:border-blue-100 aspect-square w-24 h-24 sm:w-28 sm:h-28">
                            <skill.icon className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" />
                            <span className="text-xs font-semibold text-neutral-500 mt-2 group-hover:text-black transition-colors">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
