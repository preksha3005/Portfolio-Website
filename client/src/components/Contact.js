import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="contact-cards"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Email Card */}
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="card-icon" />
          <a href="mailto:preksha.g504@gmail.com">preksha.g504@gmail.com</a>
        </motion.div>

        {/* LinkedIn Card */}
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="card-icon" />
          <a
            href="https://www.linkedin.com/in/prekshagarg"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaGithub className="card-icon" />
          <a
            href="https://github.com/preksha3005"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
