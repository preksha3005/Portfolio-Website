import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="head">About Me</h2>
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Hi, I'm <strong>Preksha Garg</strong>, a passionate Full Stack
            Developer exploring the MERN stack, cloud, AI and data-driven
            technologies. I love building meaningful web applications, solving
            complex problems, and continuously learning to improve my craft.
          </p>

          <div className="achievements">
            <h3>Achievements</h3>
            <ul>
              <li>🏆 Winner, Geek of the Month Competition</li>
              <li>🎤 Speaker at 2 College Tech Events</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>
                  B.Tech in Computer Science - MIT ADT University, Pune (2022 –
                  2026)
                </h3>
                <p>9.14 CGPA</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>
                  Senior Secondary Education - SNBP School and Junior College
                  (2020 - 2022)
                </h3>
                <p>89.67%</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>
                  Secondary Education - The Bishop’s Co-Ed School,Kalyani Nagar
                  (2019 - 2020)
                </h3>
                <p>97.67%</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Position of Responsibility</h2>
          <ul className="por-list">
            <li>✨ Technical Team Lead – [GeeksForGeeks Student Chapter]</li>
            <li>✨ Technical Team Member – [GeeksForGeeks Student Chapter]</li>
            <li>✨ Technical Team Member – [CodeChef School of Computing]</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
