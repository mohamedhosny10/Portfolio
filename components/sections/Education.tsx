"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section
      id="education"
      className="py-20 bg-slate-50 border-t border-slate-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-md bg-slate-100 ring-1 ring-slate-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-slate-400" />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.institution}
                  </h3>
                  <p className="text-purple-600 font-semibold">
                    {item.program}
                  </p>
                  <p className="text-slate-500 text-sm">{item.period}</p>
                </div>
                <button
                  onClick={() =>
                    setExpandedId(expandedId === item.id ? null : item.id)
                  }
                  className="ml-auto text-slate-400 hover:text-slate-600"
                >
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${expandedId === item.id ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {expandedId === item.id && (
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <ul className="space-y-2">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="text-slate-700 flex">
                        <span className="mr-2 text-purple-600">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
