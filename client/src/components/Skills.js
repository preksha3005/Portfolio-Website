import React from "react";
import { motion } from "framer-motion";
import "../styles/skills.css";

// Import icons (you can replace these with actual icon imports from react-icons)
import { SiCplusplus, SiMongodb, SiReact, SiHtml5, SiCss3, SiExpress, SiNodedotjs, SiMysql } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "DSA", icon: <FaDatabase /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "React", icon: <SiReact /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Node", icon: <SiNodedotjs /> },
    { name: "SQL", icon: <SiMysql /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
