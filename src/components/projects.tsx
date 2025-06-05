'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Chip } from '@mui/material';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Modern responsive portfolio built with Next.js and Tailwind CSS.',
    stack: ['Next.js', 'Tailwind CSS', 'MUI'],
    image: '/portfolio.png',
  },
  {
    id: 2,
    title: 'Taxitime',
    description: 'Full-stack taxi booking platform with real-time tracking and user management.',
    stack: ['React', 'Node.js', 'Express', 'mySQL'],
    image: '/taxitime.png',
  },
  {
    id: 3,
    title: 'H cart',
    description: 'Real-time chat app with group chat, auth, and Socket.IO.',
    stack: ['Next.js', 'Node.js', 'MySQL'],
    image: '/Hcart.png',
  },
  {
    id: 4,
    title: 'E Kart',
    description: 'E-commerce platform with real-time chat, auth, and payment integration.',
    stack: ['React.js', 'Bootstrap', 'Firebase'],
    image: '/ekart.png',
  },
    {
    id: 5,
    title: 'Taxitime Admin Panel',
    description: 'Admin dashboard for managing taxi bookings, drivers, and users.',
    stack: ['React', 'Node.js', 'Express', 'mySQL'],
    image: '/taxitimeadminpanel.png',
  },
  {
    id: 6,
    title: 'H cart  Admin Panel',
    description: 'Admin dashboard for managing chat groups, users, and messages.',
    stack: [ 'Node.js', 'Ejs','MySQL'],
    image: '/hcartadminpenal.png',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-center mb-14 text-gray-800"
      >
        🚀 My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map(({ id, title, description, stack, image }) => (
          <motion.div
            key={id}
            whileHover={{  scale: 1.05  }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
      
            className="bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 transition-all overflow-hidden flex flex-col group"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={image}
                alt={`${title} Thumbnail`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-yellow-500 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">{description}</p>

              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {stack.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    size="small"
                    className="bg-blue-100 text-blue-800 font-medium"
                    variant="outlined"
                  />
                ))}
              </div>

           
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
