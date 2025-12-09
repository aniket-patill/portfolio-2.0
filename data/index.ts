import { FaHome } from "react-icons/fa";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const socialMedia = [
  {
    id: 1,
    icon: "Github",
    link: "https://github.com/aniket-patill",
  },
  {
    id: 2,
    icon: "Linkedin",
    link: "https://linkedin.com/in/aniket-patil-861244257",
  },
  {
    id: 3,
    icon: "Email",
    link: "mailto:anikethp151@gmail.com",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "RAG Document Retrieval System",
    des: "AI-Powered Document Search Platform using Django, DRF, ChromaDB, and Google Gemini.",
    img: "/ragpdf.png",
    iconLists: ["React", "Tailwind", "TypeScript", "Python"],
    link: "https://pdf-rag-retrieval.vercel.app",
  },
  {
    id: 2,
    title: "CodeRev - AI-Assisted Code Editor",
    des: "Real-time collaborative code editor with live cursors and in-app communication.",
    img: "/coderev.png",
    iconLists: ["Next.js", "Tailwind", "TypeScript", "C"],
    link: "https://code-rev-ai-compiler.vercel.app",
  },
  {
    id: 3,
    title: "SecurePass - A Encrypted Password Manager",
    des: "A password manager that stores your passwords in an encrypted format using AES encryption.",
    img: "/securepass.png",
    iconLists: ["Next.js", "Tailwind", "TypeScript", "C"],
    link: "https://securepass-zeta.vercel.app/login",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Developer Intern",
    desc: "Boosted backend performance by 40% at Macbell Pvt. Solutions using Express.js and MongoDB.",
    className: "md:col-span-2",
    thumbnail: "/b1.jpeg",
  },
  // Add more if needed
];

export const skillsData = [
    { name: "Java", icon: "/java.svg" },
    { name: "JavaScript", icon: "/js.svg" },
    { name: "TypeScript", icon: "/ts.svg" },
    { name: "Python", icon: "/python.svg" },
    { name: "React.js", icon: "/re.svg" },
    { name: "Next.js", icon: "/next.svg" },
    { name: "Tailwind CSS", icon: "/tail.svg" },
    { name: "Node.js", icon: "/node.svg" },
    { name: "Express.js", icon: "/express.svg" },
];
