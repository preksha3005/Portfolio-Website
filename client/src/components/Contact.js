import React from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";
import axios from "axios";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
  axios.defaults.withCredentials = true;
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = React.useState("");

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Pending");

    try {
      const result = await axios.post("/sendmessage", formData);
      console.log(result);
      setStatus(result.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-info">
        <p>
          <FaEnvelope /> preksha.g504@gmail.com
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/prekshagarg"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/preksha3005"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
          required
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
          required
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
}
