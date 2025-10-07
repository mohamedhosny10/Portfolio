'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Section = 'home' | 'about' | 'projects' | 'skills' | 'certificates' | 'contact' | 'experience';

type SectionContextValue = {
  activeSection: Section;
  setActiveSection: (s: Section) => void;
};

const SectionContext = createContext<SectionContextValue | null>(null);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>('home');

  useEffect(() => {
    const sectionIds: Section[] = ['home', 'about', 'projects', 'skills', 'certificates', 'contact', 'experience'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id as Section;
          if (id && id !== activeSection) setActiveSection(id);
        }
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: [0.2, 0.5, 0.8] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const value = useMemo(() => ({ activeSection, setActiveSection }), [activeSection]);

  return <SectionContext.Provider value={value}>{children}</SectionContext.Provider>;
}

export function useSection() {
  const ctx = useContext(SectionContext);
  if (!ctx) throw new Error('useSection must be used within ThemeProvider');
  return ctx;
}


