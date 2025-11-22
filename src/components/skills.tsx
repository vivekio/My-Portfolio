// 'use client'
// import { useEffect, useRef, useState } from 'react';
// import { CircularProgress } from '@mui/material';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import Image from 'next/image';

// type Skill = {
//   name: string;
//   value: number;
//   color: 'success' | 'warning' | 'primary' | 'error' | 'info' | 'inherit';
//   logo: string; // New: path to logo
// };

// const skills: Skill[] = [
//   {
//     name: 'JavaScript',
//     value: 95,
//     color: 'warning', // Yellow for JS
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
//   },
//   {
//     name: 'React.js',
//     value: 92,
//     color: 'primary', // Blue for React
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
//   },
//   {
//     name: 'Next.js',
//     value: 90,
//     color: 'inherit', // Black/white logo - keep neutral
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
//   },
//   {
//     name: 'Node.js',
//     value: 95,
//     color: 'success', // Green for Node
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
//   },
//   {
//     name: 'Express.js',
//     value: 95,
//     color: 'inherit', // Black logo - neutral
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
//   },
//   {
//     name: 'MySQL',
//     value: 94,
//     color: 'info', // Blue tones for MySQL
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
//   },
//   {
//     name: 'MongoDB',
//     value: 90,
//     color: 'success', // Green for MongoDB
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
//   },
//   {
//     name: 'Git & GitHub',
//     value: 90,
//     color: 'error', // Orange/red for Git
//     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
//   },
// ];

// export default function SkillProgress() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(sectionRef, { once: true });
//   const controls = useAnimation();
//   const [progressValues, setProgressValues] = useState<number[]>(skills.map(() => 0));

//   // Animate progress bar values when in view
//   useEffect(() => {
//     if (isInView) {
//       const animate = () => {
//         setProgressValues(prev =>
//           prev.map((val, i) =>
//             val < skills[i].value ? Math.min(val + 1, skills[i].value) : val
//           )
//         );
//         if (progressValues.some((val, i) => val < skills[i].value)) {
//           requestAnimationFrame(animate);
//         }
//       };
//       requestAnimationFrame(animate);
//       controls.start('visible');
//     }
//   }, [isInView]);

//   // Motion Variants
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 50 },
//     visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="skills"
//       className="py-20 px-4 bg-gradient-to-br from-white to-gray-50 text-center"
//     >
//       <h2 className="text-4xl font-bold mb-4 text-gray-800">My Skills</h2>
//       <p className="text-gray-500 max-w-2xl mx-auto mb-12">
//         My technical skill set and current proficiency levels.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
//         {skills.map((skill, idx) => (
//           <motion.div
//             key={idx}
//             className="bg-white rounded-2xl shadow-md p-6"
//             initial="hidden"
//             animate={controls}
//             variants={cardVariants}
//             whileHover={{ scale: 1.05 }}
//           >
//             <div className="relative inline-flex justify-center items-center mb-4">
//               <CircularProgress
//                 variant="determinate"
//                 value={progressValues[idx]}
//                 color={skill.color}
//                 size={100}
//                 thickness={5}
//               />
//               <div className="absolute w-10 h-10">
//                 <Image
//                   src={skill.logo}
//                   alt={skill.name}
//                   width={40}
//                   height={40}
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//             <h4 className="text-lg font-semibold text-gray-700">{skill.name}</h4>
//             {/* <p className="text-sm text-gray-500 mt-1">Proficiency in {skill.name}</p> */}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

type Skill = {
  name: string;
  logo: string;
  level: number; // 1–5
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Tools & Others"
    | "DevOps & Deployment";
};

const skills: Skill[] = [
  // Frontend
  {
    name: "JavaScript (ES6+)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 5,
    category: "Frontend",
  },
  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 5,
    category: "Frontend",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: 5,
    category: "Frontend",
  },

  // Backend
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 5,
    category: "Backend",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: 4,
    category: "Backend",
  },
  {
    name: "Socket.io",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    level: 4,
    category: "Backend",
  },

  // Database
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 4,
    category: "Database",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: 4,
    category: "Database",
  },

  // Tools & Others
  {
    name: "Git & GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: 5,
    category: "Tools & Others",
  },
  {
    name: "Postman / Thunder Client",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    level: 5,
    category: "Tools & Others",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    level: 5,
    category: "Tools & Others",
  },
  {
    name: "Windows Server",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    level: 4,
    category: "DevOps & Deployment",
  },
  {
    name: "Nginx",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    level: 4,
    category: "DevOps & Deployment",
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    level: 3,
    category: "DevOps & Deployment",
  },
  // {
  //   name: "PM2",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pm2/pm2-original.svg",
  //   level: 4,
  //   category: "DevOps & Deployment",
  // },
];

const categories: Array<Skill["category"]> = [
  "Frontend",
  "Backend",
  "Database",
  "DevOps & Deployment",
  "Tools & Others",
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function SkillProgress() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-gray-900 text-center">
          Skills &amp; Expertise
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-center">
          A snapshot of my core MERN-stack skills, tools, and technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === category
            );

            if (!categorySkills.length) return null;

            return (
              <motion.div
                key={category}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
                }}
                className="bg-white/90 border border-gray-100 rounded-3xl p-6 shadow-sm backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {category}
                </h3>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={26}
                            height={26}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-slate-800">
                          {skill.name}
                        </span>
                      </div>

                      {/* Level dots like reference image */}
                      <div className="flex gap-1.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`h-2 w-2 rounded-full ${
                              i < skill.level ? "bg-orange-500" : "bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
