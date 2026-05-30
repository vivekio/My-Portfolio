"use client";

import Navbar from "@/components/navbar";
import Main from "@/components/main";
import About from "@/components/aboutme";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import ServicesSection from "@/components/ServicesSection";
// import GithubStats from "@/components/GithubStats";
import AdditionalSections from "@/components/AdditionalSections";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="font-sans min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Main />
      <About />
      <ServicesSection />
      <Skills />
      <Experience />
      <Projects />
      {/* <GithubStats /> */}
      <AdditionalSections />
      <ContactUs />
      <Footer />
    </main>
  );
}
