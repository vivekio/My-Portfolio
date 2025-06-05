'use client'
import Navbar from '@/components/navbar';
import Hero from '@/components/main';
import Projects from '@/components/projects';
import Footer from '@/components/footer';
import Experience from '@/components/experience';
import SkillProgress from '@/components/skills';
import About from '@/components/aboutme';
import Contact from '@/components/contactus';


export default function Home() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <Experience />
      <SkillProgress />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
