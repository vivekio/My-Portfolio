'use client';

import { Briefcase, Code, Folder, User, Mail, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 w-full bg-gradient-to-r from-gray-50 to-yellow-50 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        Vivek Pankhaniya
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 font-medium items-center">
        <Link href="#experience" className="nav-link flex items-center space-x-2 hover:text-yellow-500 transition-colors">
          <Briefcase size={18} />
          <span>Experience</span>
        </Link>
        <Link href="#skills" className="nav-link flex items-center space-x-2 hover:text-yellow-500 transition-colors">
          <Code size={18} />
          <span>Skills</span>
        </Link>
        <Link href="#projects" className="nav-link flex items-center space-x-2 hover:text-yellow-500 transition-colors">
          <Folder size={18} />
          <span>Projects</span>
        </Link>
        <Link href="#About" className="nav-link flex items-center space-x-2 hover:text-yellow-500 transition-colors">
          <User size={18} />
          <span>About me</span>
        </Link>
        <Link href="#contact" className="nav-link flex items-center space-x-2 hover:text-yellow-500 transition-colors">
          <Mail size={18} />
          <span>Contacts</span>
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-900 dark:text-white focus:outline-none">
          {isOpen ? <X size={24} /> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-900 dark:text-white focus:outline-none">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 p-6 font-medium">
          <Link href="#experience" className="nav-link flex items-center space-x-2 hover:text-yellow-500 transition-colors" onClick={toggleMenu}>
            <Briefcase size={18} />
            <span>Experience</span>
          </Link>
          <Link href="#skills" className="nav-link flex items-center space-x-2 hover:text-yellow-500 transition-colors" onClick={toggleMenu}>
            <Code size={18} />
            <span>Skills</span>
          </Link>
          <Link href="#projects" className="nav-link flex items-center space-x-2 hover:text-yellow-500 transition-colors" onClick={toggleMenu}>
            <Folder size={18} />
            <span>Projects</span>
          </Link>
          <Link href="#About" className="nav-link flex items-center space-x-2 hover:text-yellow-500 transition-colors" onClick={toggleMenu}>
            <User size={18} />
            <span>About me</span>
          </Link>
          <Link href="#contact" className="nav-link flex items-center space-x-2 hover:text-yellow-500 transition-colors" onClick={toggleMenu}>
            <Mail size={18} />
            <span>Contacts</span>
          </Link>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}