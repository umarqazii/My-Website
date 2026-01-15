import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaSalesforce } from 'react-icons/fa';
import {
  SiFlutter,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiJavascript,
} from 'react-icons/si';
import { IconType } from 'react-icons';

const skills: { name: string; icon: IconType }[] = [
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Typescript', icon: SiTypescript },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Javascript', icon: SiJavascript },
  { name: 'SQL/MySQL', icon: SiMysql },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Salesforce', icon: FaSalesforce },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical Arsenal
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const SkillIcon: React.FC<{ className?: string }> = skill.icon as any;
            return (
              <div
                key={skill.name}
                className="bg-background/50 border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors cursor-default"
              >
                <SkillIcon className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
