"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section
      id="About"
      className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto gap-10 min-h-screen"
    >
      {/* Left Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          I’m{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Vivek Pankhaniya
          </span>
          , a dedicated{" "}
          <span className="font-semibold text-yellow-500">
            Full Stack Developer
          </span>{" "}
          pursuing a Bachelor’s degree in{" "}
          <span className="font-semibold">Information Technology</span> from
          B.H. Gardi College of Engineering &amp; Technology (2021–2025). I
          specialize in building
          <span className="font-semibold text-yellow-500">
            {" "}
            dynamic and scalable web applications
          </span>{" "}
          using the <span className="font-semibold">MERN stack</span>, with
          strong proficiency in
          <span className="font-semibold">
            {" "}
            React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL
          </span>
          . My skills extend to{" "}
          <span className="font-semibold">
            real-time features with Socket.IO
          </span>
          , secure authentication using{" "}
          <span className="font-semibold">JWT &amp; OTP</span>, automation
          workflows, and advanced{" "}
          <span className="font-semibold">API integrations</span>. I focus on
          writing
          <span className="font-semibold text-yellow-600">
            {" "}
            clean, efficient code
          </span>{" "}
          and crafting responsive, user-friendly interfaces.
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          I’m currently working at
          <span className="font-semibold text-yellow-500">
            {" "}
            Actowiz Solutions
          </span>
          , where I develop and maintain
          <span className="font-semibold"> API Management Systems</span>,
          automation tools, and
          <span className="font-semibold"> API hub solutions</span> similar to
          BriteData. My responsibilities include
          <span className="font-semibold"> backend architecture</span>,
          third-party API integration, dashboard creation, and improving{" "}
          <span className="font-semibold">data delivery performance</span>. I
          also have experience with{" "}
          <span className="font-semibold">deployment workflows</span> including
          <span className="font-semibold">
            {" "}
            Nginx reverse proxy, Windows Server hosting, DNS configuration
          </span>
          , and cloud deployment on{" "}
          <span className="font-semibold">AWS, Vercel, and Render</span>. I’m
          passionate about solving real-world problems and building{" "}
          <span className="font-semibold text-yellow-600">
            scalable, reliable systems
          </span>
          that enhance user experience and business productivity.
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
