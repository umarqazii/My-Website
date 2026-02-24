import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import whatsyapp_img from "../assets/icon.png";
import mymovies_img from "../assets/mymovies.png";
import myresale_img from "../assets/myresale.png";
import klaimr_img from "../assets/logo.webp";
import giftcollab_img from "../assets/giftcollab.png"
import securepass_img from "../assets/secure_pass.png"

const categories = ["All", "Mobile", "Web Fullstack"];

const projects = [
  {
    title: "Wareed Labs",
    category: "Mobile",
    description:
      "Wareed Labs is a patient-facing mobile application for a medical laboratory service that allows users to access lab services digitally. The app enables patients to view and book laboratory tests, manage appointments and services, and interact with lab offerings through a centralized mobile platform",
    tech: ["Flutter", "Firebase", "GetX", "Provider"],
    image: "https://i.ytimg.com/vi/OdIzQl6aWkU/maxresdefault.jpg",
    github: "#",
    demo:
      "https://play.google.com/store/apps/details?id=com.wareedlab&pcampaignid=web_share",
  },
  {
    title: "WhatsYapp",
    category: "Mobile",
    description:
      "A full-featured real-time messaging application built with Flutter, Firebase, and GetX. This app supports text messaging, image sharing, voice notes, and real-time voice and video calling.",
    tech: ["Flutter", "Firebase", "Cloudinary", "ZegoCloud", "GetX"],
    image: whatsyapp_img,
    github: "https://github.com/umarqazii/WhatsYapp-Flutter",
    demo:
      "https://drive.google.com/file/d/1ZWGEGD1n53-_38K6sPReVDaE5Ws9vwW3/view",
  },
  {
    title: "MyResale",
    category: "Web Fullstack",
    description:
      "MyResale is a web-based SaaS platform designed to solve the entire backend operational complexity for Indonesian social commerce sellers.",
    tech: ["React", "Node.js", "Vite", "TypeScript", "PostgreSQL", "Tailwind"],
    image: myresale_img,
    github: "#",
    demo: "https://demo.myresale.id/",
  },
  {
    title: "GiftCollab",
    category: "Mobile",
    description:
      'GiftCollab is a modern, cross-platform mobile application designed to revolutionize the way friends and family celebrate life’s milestones. Moving beyond the limitations of traditional, static gift registries, GiftCollab introduces a "crowdfunding" model to gifting, allowing multiple guests to contribute partial amounts toward high-ticket items',
    tech: ["Flutter", "Firebase", "Stripe", "Cloudinary" ,"GetX"],
    image: giftcollab_img,
    github: "https://github.com/umarqazii/GiftCollab.git",
    demo: "#",
  },
  {
    title: "SecurePass",
    category: "Mobile",
    description:
      'Secure Pass is a cross-platform, offline-first password manager built with Flutter and Firebase. It employs a Zero-Knowledge Architecture, ensuring that your sensitive data is encrypted locally on your device before it ever touches the cloud.',
    tech: ["Flutter" ,"GetX" ,"Firebase", "cryptography", "Flutter Secure Storage"],
    image: securepass_img,
    github: "https://github.com/umarqazii/Secure-Pass.git",
    demo: "#",
  },
  {
    title: "MyMovies",
    category: "Mobile",
    description:
      'MyMovie Tracker helps users browse trending titles, manage "Seen" and "Watchlist" collections, and maintain a custom offline movie library.',
    tech: ["Flutter", "Hive", "TMDB", "GetX"],
    image: mymovies_img,
    github: "https://github.com/umarqazii/MyMovies-Flutter",
    demo: "#",
  },
  {
    title: "Klaimr",
    category: "Web Fullstack",
    description:
      'Klaimr tracks TikTok Live claims in real time, replacing unreliable methods like notebooks or manual scrolling.',
    tech: ["React", "Node.js", "Vite", "TypeScript", "PostgreSQL", "Tailwind"],
    image: klaimr_img,
    github: "#",
    demo: "https://klaimr.srsdigital.co.id/",
  },
];

const isValidLink = (url: string) => url && url !== "#";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [canExpand, setCanExpand] = useState<Record<string, boolean>>({});

  const descRefs = useRef<Record<string, HTMLParagraphElement | null>>({});

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Measure clamping after render
  useEffect(() => {
    const results: Record<string, boolean> = {};

    filtered.forEach((project) => {
      const el = descRefs.current[project.title];
      if (!el) return;

      results[project.title] = el.scrollHeight > el.clientHeight;
    });

    setCanExpand(results);
  }, [filtered]);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Featured Projects
          </h2>

          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-surface text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="group bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="
                    absolute inset-0
                    bg-gradient-to-t from-black/80 via-black/40 to-transparent
                    flex items-end p-4
                    opacity-100 md:opacity-0
                    md:group-hover:opacity-100
                    transition-opacity
                  ">
                    <div className="flex gap-3">
                      {isValidLink(project.github) && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}

                      {isValidLink(project.demo) && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white rounded-full text-black hover:bg-primary hover:text-white"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p
                    ref={(el) => (descRefs.current[project.title] = el)}
                    className={`text-gray-400 text-sm mb-2 ${
                      expanded === project.title ? "" : "line-clamp-2"
                    }`}
                  >
                    {project.description}
                  </p>

                  {canExpand[project.title] && (
                    <button
                      onClick={() =>
                        setExpanded(
                          expanded === project.title ? null : project.title
                        )
                      }
                      className="text-xs text-primary font-semibold mb-4"
                    >
                      {expanded === project.title ? "See Less" : "See More"}
                    </button>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
