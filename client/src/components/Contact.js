import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="contact-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.p
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaEnvelope />{" "}
          <a href="mailto:preksha.g504@gmail.com">preksha.g504@gmail.com</a>
        </motion.p>

        <motion.div className="social-links" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.7 }}>
          <motion.a
            href="https://www.linkedin.com/in/prekshagarg"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, color: "#0077b5" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/preksha3005"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, color: "#333" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
