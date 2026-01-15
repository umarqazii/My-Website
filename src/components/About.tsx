import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            About Me
          </h2>
          
          <div className="bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I am a software developer with a strong focus on <span className="text-white font-semibold">Flutter</span> for building clean, high-performance cross-platform mobile applications, backed by solid experience in web development and full-stack engineering.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I have worked extensively with modern JavaScript frameworks and the <span className="text-white font-semibold">MERN stack</span> (React, Node.js, Express, MongoDB), alongside SQL databases such as PostgreSQL. I am comfortable designing APIs, managing application state, and building scalable backend services.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              My experience includes integrating third-party APIs, working with <span className="text-white font-semibold">Firebase</span>, implementing authentication, handling real-time data, and building responsive, user-friendly interfaces with tools like Tailwind CSS.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Beyond coding, I care deeply about product thinking: translating real-world problems into practical software solutions. I also have professional experience as a <span className="text-white font-semibold">Salesforce Developer</span>, working with Apex and LWC, which has strengthened my understanding of the Salesforce ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
