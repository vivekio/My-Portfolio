"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="About" className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto gap-10 min-h-screen">
      {/* Left Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          I'm Vivek Pankhaniya, a passionate Full Stack Developer with a Bachelor’s degree in Information Technology from B H Gardi College of Engineering and Technology (2021-2025). I specialize in building dynamic, responsive web applications using the MERN stack, with expertise in React.js, Node.js, Express.js, and MySQL. My experience includes developing real-time features with Socket.IO, implementing secure authentication with JWT and OTP verification, and creating intuitive UI/UX with Bootstrap and modern JavaScript (ES6+).
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          Currently, I’m a Full Stack Development Intern at Hexagon Infosoft Solution Pvt. Ltd. (January 2025 - present), where I build and optimize web applications, integrate RESTful APIs, and enhance user dashboards. My projects, like TaxiTime (a taxi booking platform with real-time tracking) and Ekart (an e-commerce platform for electronics), showcase my ability to deliver scalable, user-focused solutions. I’m committed to writing clean, reusable code and thrive in collaborative environments.
        </p>
        <div className="pt-2">
          <a href="/Vivek Pankhaniya.pdf" download>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 text-sm rounded-md shadow-md">
              Download Resume
            </Button>
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative flex justify-center items-center lg:w-1/2">
        <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
          {/* Decorative Yellow Circle */}
          <div className="absolute inset-0 bg-yellow-400 rounded-full z-0 scale-110 shadow-lg"></div>

          {/* Profile Image with Creative Masking */}
          <div className="absolute inset-4 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-900 z-10">
            <Image
              src="/profile.png"
              alt="Vivek Pankhaniya Profile"
              fill
              className="object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}