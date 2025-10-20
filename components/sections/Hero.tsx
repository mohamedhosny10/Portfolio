"use client";

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, Instagram } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { useEffect, useState } from 'react';

export default function Hero() {
  const roles = ['Developer', 'Programmer', 'Designer'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, [roles.length]);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mt-24 md:mt-8 mb-8 flex justify-center">
            <div className="p-1 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500">
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl shadow-purple-900/30">
                <Image
                  src="/Grad Photo.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold text-white mb-4"
          >
            {personalInfo.title}
          </motion.h2>

          <div className="text-2xl md:text-5xl text-white/90 mb-8 min-h-[5rem] md:min-h-[6rem] flex items-center justify-center leading-[1.25] pb-1 md:pb-2">
            <span className="mr-2">I&apos;m a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="inline-block py-1 font-extrabold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Specialized in React, Next.js & Modern Frontend Architecture
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ArrowDown className="w-5 h-5" />
            </button>
            <a
              href="/Mohamed Hosny CV.pdf"
              download
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border border-white/20"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-4 justify-center mb-8"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black transition-colors rounded-full p-3 hover:bg-gray-100"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] text-white transition-colors rounded-full p-3 hover:brightness-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white transition-all duration-300 rounded-full p-3 hover:from-pink-400 hover:to-purple-400 hover:scale-105"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href={`https://wa.me/${personalInfo.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white transition-all duration-300 rounded-full p-3 hover:bg-[#20BA5A] hover:scale-105"
            >
              <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={24} height={24} className="filter brightness-0 invert" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
