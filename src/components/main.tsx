"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Typography from "@mui/material/Typography";
import { Download } from "lucide-react";

export default function Main() {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto min-h-px relative " style={{minHeight:"80vh"}}>
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 z-10 mt-10 lg:mt-0">
        <Typography
          variant="subtitle2"
          sx={{
            pl: 2,
            borderLeft: "4px solid #FACC15",
            color: "#FACC15",
            fontWeight: 600,
            marginBottom: "20px",
            fontSize: "20px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Full Stack Developer
        </Typography>

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
            lineHeight: 1.2,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Hello, My Name Is <br />
          <span className="text-yellow-500">Vivek Pankhaniya</span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            maxWidth: 480,
            margin: "10px 0 10px 0 ",
          }}
        >
          👨‍💻 Full Stack Developer crafting seamless web experiences from
          front to back.
        </Typography>

        <div className="flex justify-center lg:justify-start pt-4">
          <a href="/Vivek Pankhaniya.pdf" download>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 text-base flex items-center gap-2">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </a>
        </div>
      </div>

      {/* Right Image with Organic Shape */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center z-0">
        {/* Blob Background Shape */}
        <div className="absolute w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] bg-yellow-400 rounded-[60%] blur-2xl opacity-80 -z-10 animate-pulse"></div>

        {/* Profile Image with Circle */}
        <div className="rounded-full overflow-hidden shadow-2xl border-4 border-white w-[180px] sm:w-[240px] md:w-[300px] lg:w-[320px] h-[180px] sm:h-[240px] md:h-[300px] lg:h-[320px]">
          <Image
            src="/profile.png"
            alt="Profile"
            width={320}
            height={320}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </main>
  );
}
