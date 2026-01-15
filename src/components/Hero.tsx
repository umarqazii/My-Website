import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm"
          >
            Software Developer & Full Stack Engineer
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
          >
            Building digital experiences that matter.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I specialize in Flutter for mobile and the MERN stack for web. 
            Turning complex problems into elegant, scalable solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="projects" smooth={true} duration={500} offset={-70} className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 cursor-pointer">
              View My Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-70} className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all cursor-pointer backdrop-blur-sm">
              Contact Me
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex justify-center gap-6"
          >
            <SocialLink href="https://github.com/umarqazii" icon={<Github />} />
            <SocialLink href="https://www.linkedin.com/in/umar-qazi-61b62a24a/" icon={<Linkedin />} />
            <SocialLink href="mailto:umarqazii983@gmail.com" icon={<Mail />} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20"
  >
    {icon}
  </a>
);

export default Hero;
