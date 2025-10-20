import { personalInfo } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 mb-6">
            I'm a passionate Frontend Developer specializing in building modern, responsive web applications using React and Next.js.
          </p>
          <p className="text-lg text-slate-700 mb-6">
            With experience in developing full-stack solutions, integrating CMS platforms, and optimizing web 
            performance, I focus on creating user-friendly interfaces that deliver exceptional user experiences.
          </p>
          <p className="text-lg text-slate-700">
            I'm proficient in modern frontend technologies and passionate about writing clean, maintainable code 
            while following best practices and agile methodologies.
          </p>
        </div>
      </div>
    </section>
  );
}




