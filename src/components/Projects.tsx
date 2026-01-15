import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { easeIn, easeOut } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import whatsyapp_img from '../assets/icon.png';
import mymovies_img from '../assets/mymovies.png';
import myresale_img from '../assets/myresale.png';
import klaimr_img from '../assets/logo.webp';

const categories = ['All', 'Mobile', 'Web Fullstack',];

const projects = [
  {
    title: 'Wareed Labs',
    category: 'Mobile',
    description: 'Wareed Labs is a patient-facing mobile application for a medical laboratory service that allows users to access lab services digitally. The app enables patients to view and book laboratory tests, manage appointments and services, and interact with lab offerings through a centralized mobile platform',
    tech: ['Flutter', 'Firebase', 'GetX', 'Provider'],
    image: 'https://i.ytimg.com/vi/OdIzQl6aWkU/maxresdefault.jpg',
    github: '#',
    demo: 'https://play.google.com/store/apps/details?id=com.wareedlab&pcampaignid=web_share'
  },
  {
    title: 'WhatsYapp',
    category: 'Mobile',
    description: 'A full-featured real-time messaging application built with Flutter, Firebase, and GetX. This app supports text messaging, image sharing, voice notes, and real-time voice calling.',
    tech: ['Flutter', 'Firebase', 'Cloudinary', 'ZegoCloud', 'GetX'],
    image: whatsyapp_img,
    github: 'https://github.com/umarqazii/WhatsYapp-Flutter',
    demo: 'https://drive.google.com/file/d/1ZWGEGD1n53-_38K6sPReVDaE5Ws9vwW3/view?usp=sharing'
  },
  {
    title: 'MyResale',
    category: 'Web Fullstack',
    description: 'MyResale is a web-based SaaS platform designed to solve the entire backend operational complexity for Indonesian social commerce sellers. It provides an integrated, mobile-first solution',
    tech: ['React', 'Node.js', 'Vite', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    image: myresale_img,
    github: '#',
    demo: 'https://demo.myresale.id/'
  },
  {
    title: 'MyMovies',
    category: 'Mobile',
    description: 'MyMovie Tracker is a comprehensive mobile application designed to seamlessly organize your cinematic journey, allowing users to browse trending titles from third-party services like TMDB, manage personal "Seen" and "Watchlist" collections, and maintain a custom library of movies with offline support.',
    tech: ['Flutter', 'Hive', 'TMDB', 'GetX'],
    image: mymovies_img,
    github: 'https://github.com/umarqazii/MyMovies-Flutter',
    demo: '#'
  },
  {
    title: 'Klaimr',
    category: 'Web Fullstack',
    description: 'Klaimr is a strategic tool built for Indonesian solopreneurs and small businesses who use TikTok Live to sell goods. It addresses the core challenge of tracking "who claimed what first" in a flood of comments, replacing unreliable methods like notebooks or manual scrolling',
    tech: ['React', 'Node.js', 'Vite', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    image: klaimr_img,
    github: '#',
    demo: 'https://klaimr.srsdigital.co.id/'
  }
];

const containerVariants = {
  show: { transition: { staggerChildren: 0.1 } },
  hide: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: easeOut } },
  exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3, ease: easeIn } }
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-indigo-500/25 scale-105' 
                    : 'bg-surface text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          variants={containerVariants}
          initial="hide"
          animate="show"
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="group relative bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all shadow-lg hover:shadow-2xl cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 transition-opacity duration-300"
                  >
                    <div className="flex gap-4">
                      <a href={project.github} className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.demo} className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <motion.div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300 font-medium hover:bg-primary hover:text-white transition-colors"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
