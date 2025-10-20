'use client';

import Image from 'next/image';
import { Github } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white" suppressHydrationWarning>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => {
            const name = project.name.toLowerCase();
            const isBanking = name.includes('banking');
            const thumbSrc = name.includes('smart')
              ? '/Grad Project.png'
              : name.includes('rwafi')
                ? '/Rwafi_Website Thumbnail.jpg'
                : name.includes('eva')
                  ? '/Eva Digital Factory Thumbnail.png'
                  : null;
            return (
              <div key={project.id} className="bg-slate-50 rounded-lg p-6 hover:shadow-xl transition-shadow hover:scale-[1.02] duration-300">
                {!isBanking && thumbSrc && (
                  <div className="mb-4">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <Image src={thumbSrc} alt={`${project.name} thumbnail`} fill className="object-cover rounded" />
                    </div>
                  </div>
                )}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.name}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              
              <ul className="space-y-1 mb-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-slate-700 text-sm flex">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>

                {('liveUrl' in project && project.liveUrl) && (
                  <a
                    href={project.liveUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 font-semibold px-3 py-1.5 rounded"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




