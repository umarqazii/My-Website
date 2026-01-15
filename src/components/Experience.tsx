import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Flutter Developer',
    company: 'Veroke',
    period: 'Aug 2025 - Present',
    description: 'Specializing in cross-platform mobile applications using Flutter',
    tech: ['Flutter', 'Firebase', 'APIs', 'State Management']
  },
  {
    role: 'Full Stack Web Dev (Part Time)',
    company: 'SRS Digital',
    period: 'Jun 2025 - Present',
    description: 'Specializing in cross-platform mobile applications using Flutter',
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL']
  },
  {
    role: 'Salesforce Developer',
    company: 'Veroke',
    period: 'Feb 2025 - Jul 2025',
    description: 'Developed and customized enterprise-grade solutions using Apex, Lightning Web Components (LWC), and platform integrations.',
    tech: ['Apex', 'LWC', 'Salesforce Cloud', 'Integrations']
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-transparent -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Spacer for left/right */}
              <div className="flex-1 w-full md:w-1/2" />

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-primary shadow-lg -translate-x-1/2 flex items-center justify-center z-10 animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>

              {/* Card */}
              <div className={`flex-1 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                  className="bg-surface p-6 rounded-xl border border-white/10 transition-all group cursor-default"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm md:text-base text-accent font-medium px-3 py-1 bg-accent/10 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg md:text-xl text-gray-300 mb-4 font-medium flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" /> {exp.company}
                  </h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs md:text-sm font-medium px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded-md border border-white/10 transition-all hover:scale-105 hover:brightness-110"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
