import React from "react";
import '../styles/home.css'
import {motion} from 'framer-motion'
import resumePdf from '../assets/Resume_1.pdf'

const Hero = () => {
  return (

    <section id="home" className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Preksha Garg!
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I'm a Full Stack Developer. I craft dynamic web experiences using
            React and MERN stack while constantly exploring new technologies.
          </motion.p>

          <motion.a
            href={resumePdf} 
            download
            className="resume-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.5 }}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Download Resume
          </motion.a>
        </div>
      </section>
  )
    {/*<section class="home" id="home">
      <div class="home-content">
        <h1>
          Hi, It's <span>Preksha!</span>
        </h1>
        <h3 class="text-animation">
          I'm a <span>Full Stack Web Developer</span>
        </h3>
        <p>
          I'm a 3rd year student pursuing B.Tech in Computer Science from MIT
          ADT University, Pune. Enthusiastic about technology, I have built a
          foundation in CPP, DSA and programming. I also have knowledge about
          HTML, CSS, JS, React JS and currently learning about MERN stack. I am
          always eager to learn from experienced professionals as well as
          collaborate with like-minded peers. Looking forward to connecting and
          exploring new opportunities to grow and work!
        </p>

        <div class="social-icons">
          <a href="https://www.linkedin.com/in/prekshagarg" target="_blank">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/preksha3005?tab=repositories"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <div class="btn-group">
          <a
            href="https://drive.google.com/file/d/1cbmkUWJ4xeZ1DSSUcXF_6jTSFYfjW48M/view?usp=sharing"
            class="btn"
            target="_blank"
          >
            Download Resume
          </a>
          <a href="#contact" class="btn">
            Contact
          </a>
        </div>
      </div>
      <div class="home-img">
        <img src="image1.jpg" alt="" />
      </div>
    </section> */}

};

export default Hero;
