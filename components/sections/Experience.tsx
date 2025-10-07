'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { experience } from '@/lib/data';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experience.map((job) => (
            <div key={job.id} className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                  <p className="text-purple-600 font-semibold">{job.company}</p>
                  <p className="text-slate-500 text-sm">{job.period}</p>
                </div>
                <button
                  onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <ChevronDown className={`w-6 h-6 transition-transform ${expandedId === job.id ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {expandedId === job.id && (
                <div className="mt-4">
                  <ul className="space-y-2">
                    {job.description.map((desc, idx) => (
                      <li key={idx} className="text-slate-700 flex">
                        <span className="mr-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




