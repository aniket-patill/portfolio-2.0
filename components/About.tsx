import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";
import { Github, Linkedin, Twitter, LucideIcon } from 'lucide-react'; // Import necessary Lucide icons

// Define a mapping from string names to Lucide icon components
const iconMap: { [key: string]: LucideIcon } = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter, // Assuming Twitter might also be used in socialMedia
};

const About = () => {
  return (
    <section className="py-12 md:py-20 bg-white text-black px-5 md:px-10 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start gap-5 order-2 md:order-1">
          <div className="text-lg sm:text-xl md:text-2xl font-light flex items-center gap-2">
            Ciao <span className="text-2xl sm:text-3xl">👋</span>, I&apos;m
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-black leading-tight">
            Aniket Patil
          </h1>
          
          <div className="mt-6 md:mt-8 space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl font-light text-neutral-800">
            <p>
              An AI-focused full-stack developer skilled in building RAG systems, collaborative editors, and secure MERN/Next.js platforms with strong backend and cloud deployment foundations.
            </p>
            <p>
              I specialize in Java, JavaScript (ES6+), TypeScript, and Python, leveraging frameworks like React.js, Next.js, and Tailwind CSS for frontend, and Node.js, Express.js for backend.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 md:mt-10">
             <div className="flex gap-4">
               {socialMedia.map((item) => {
                  // Assuming item.icon is now a string name corresponding to a Lucide icon
                  const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                  if (!IconComponent) return null; // Handle cases where icon name is not found
                  
                  return (
                    <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer transition-colors">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 opacity-70" />
                    </a>
                  );
               })}
             </div>

             <div className="flex items-center">
               <a
                 href="/Aniket_Patil_Resume.pdf" // Assuming your resume is in the public folder
                 download="Aniket_Patil_Resume.pdf"
                 className="px-4 py-2 bg-gray-100 text-black rounded-full font-medium text-sm sm:text-base hover:bg-gray-300 transition-colors duration-200"
               >
                 Resume
               </a>
             </div>
             
             <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 rounded-full">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-medium">AVAILABLE FOR JOB</span>
             </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 w-full">
          <div className="relative w-full max-w-sm md:max-w-md aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl shadow-lg">
             <img 
               src="/Aniket.jpg" 
               alt="Aniket Patil" 
               className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-700 ease-in-out cursor-pointer transform hover:scale-105"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
