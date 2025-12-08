import React from "react";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiPython, SiGit, SiAmazon, SiMysql
} from "react-icons/si";

import Marquee from "react-fast-marquee";

const SkillItem = ({ icon: Icon, name }: { icon: any, name: string }) => (
  <div className="group flex flex-col items-center gap-2 mx-8 relative z-20">
      <div className="w-16 h-16 md:w-24 md:h-24 bg-white border border-gray-200 shadow-sm rounded-2xl flex items-center justify-center p-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 group-hover:border-blue-200">
        <Icon className="w-8 h-8 md:w-12 md:h-12 text-gray-600 group-hover:text-blue-600 transition-colors" />
      </div>
      <span className="text-sm font-semibold text-gray-600 group-hover:text-black transition-colors">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <section className="py-20 bg-gray-100  overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-5 mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-10 leading-tight">
          Explore My Range of Skills <br className="hidden md:block"/>
          <span className="text-blue-500">for Building Solutions.</span>
        </h1>
        
        <div className="text-lg text-neutral-800 space-y-6 max-w-4xl font-normal">
            <p>I specialize in <span className="text-blue-500">building full-stack GenAI web applications.</span> Throughout my projects, I&apos;ve learned that efficient workflows, clear communication, and self-discipline are crucial for success.</p>
        </div>
      </div>

      <div className="w-full mt-10 overflow-hidden">
          <Marquee 
            gradient={true} 
            gradientColor="rgba(249, 250, 251, 0.58)" 
            speed={50}
            pauseOnHover={true}
            autoFill={true}
            className="py-10 !overflow-hidden"
          >
             <SkillItem icon={SiJavascript} name="JavaScript" />
             <SkillItem icon={SiTypescript} name="TypeScript" />
             <SkillItem icon={SiReact} name="React" />
             <SkillItem icon={SiNextdotjs} name="Next.js" />
             <SkillItem icon={SiTailwindcss} name="Tailwind" />
             <SkillItem icon={SiNodedotjs} name="Node.js" />
             <SkillItem icon={SiExpress} name="Express" />
             <SkillItem icon={SiMongodb} name="MongoDB" />
             <SkillItem icon={SiPython} name="Python" />
             <SkillItem icon={SiMysql} name="SQL" />
             <SkillItem icon={SiGit} name="Git" />
             <SkillItem icon={SiAmazon} name="AWS" />
          </Marquee>
      </div>
    </section>
  );
};

export default Skills;
