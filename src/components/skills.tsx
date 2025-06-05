'use client'
import { useEffect, useRef, useState } from 'react';
import { CircularProgress } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

type Skill = {
  name: string;
  value: number;
  color: 'success' | 'warning' | 'primary' | 'error' | 'info' | 'inherit';
  logo: string; // New: path to logo
};

const skills: Skill[] = [
  {
    name: 'JavaScript',
    value: 95,
    color: 'warning', // Yellow for JS
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React.js',
    value: 92,
    color: 'primary', // Blue for React
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    value: 90,
    color: 'inherit', // Black/white logo - keep neutral
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Node.js',
    value: 95,
    color: 'success', // Green for Node
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express.js',
    value: 95,
    color: 'inherit', // Black logo - neutral
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  },
  {
    name: 'MySQL',
    value: 94,
    color: 'info', // Blue tones for MySQL
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    name: 'MongoDB',
    value: 90,
    color: 'success', // Green for MongoDB
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Git & GitHub',
    value: 90,
    color: 'error', // Orange/red for Git
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
];



export default function SkillProgress() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });
  const controls = useAnimation();
  const [progressValues, setProgressValues] = useState<number[]>(skills.map(() => 0));

  // Animate progress bar values when in view
  useEffect(() => {
    if (isInView) {
      const animate = () => {
        setProgressValues(prev =>
          prev.map((val, i) =>
            val < skills[i].value ? Math.min(val + 1, skills[i].value) : val
          )
        );
        if (progressValues.some((val, i) => val < skills[i].value)) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
      controls.start('visible');
    }
  }, [isInView]);

  // Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-white to-gray-50 text-center"
    >
      <h2 className="text-4xl font-bold mb-4 text-gray-800">My Skills</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12">
        My technical skill set and current proficiency levels.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative inline-flex justify-center items-center mb-4">
              <CircularProgress
                variant="determinate"
                value={progressValues[idx]}
                color={skill.color}
                size={100}
                thickness={5}
              />
              <div className="absolute w-10 h-10">
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-700">{skill.name}</h4>
            {/* <p className="text-sm text-gray-500 mt-1">Proficiency in {skill.name}</p> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
