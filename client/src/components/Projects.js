import React from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";
import recipeImg from "../assets/recipe-app.png";
import notesImg from "../assets/notes-app.png";
import travelImg from "../assets/travel-ap.png";

export default function Projects() {
  // Static project data
  const projects = [
    {
      title: "Recipe Website",
      description:
        "From your kitchen to the world! Explore, share, and savor recipes with this full-stack Recipe Sharing platform.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/preksha3005/RecipeWebsite.git",
      liveLink: "https://recipefrontend-vgrt.onrender.com",
      image: recipeImg,
    },
    {
      title: "Travel Blog",
      description:
        "Discover, share, and relive journeys! A full-stack Travel Blogging platform connecting explorers through stories and snapshots.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/preksha3005/Travel-Blog.git",
      liveLink: "https://travel-blog-frontend-28g5.onrender.com",
      image: travelImg,
    },
    {
      title: "Notes App",
      description:
        "Organize your ideas, anytime, anywhere! A MERN Notes app that keeps your notes safe and accessible.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/preksha3005/NotesApp.git",
      liveLink: "https://notesapp-frontend-jeyj.onrender.com",
      image: notesImg,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {project.image && (
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul className="tech-list">
              {project.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            <div className="links">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              )}

              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live Demo →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
