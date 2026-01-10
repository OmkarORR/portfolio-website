import {  motion, transform } from 'motion/react'
import Contact from './Contact';
import './App.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { useState, useEffect } from 'react';

function App() {

  const roles = ["Frontend Developer","Web Developer"];

        const [text, setText] = useState("");
        const [roleIndex, setRoleIndex] = useState(0);
        const [charIndex, setCharIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);

        useEffect(() => {
          const currentRole = roles[roleIndex];
          let timer;

          if (!isDeleting) {
            // typing
            timer = setTimeout(() => {
              setText(currentRole.slice(0, charIndex + 1));
              setCharIndex(charIndex + 1);

              if (charIndex + 1 === currentRole.length) {
                setTimeout(() => setIsDeleting(true), 1000);
              }
            }, 120);
          } else {
            // deleting
            timer = setTimeout(() => {
              setText(currentRole.slice(0, charIndex - 1));
              setCharIndex(charIndex - 1);

              if (charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((roleIndex + 1) % roles.length);
              }
            }, 80);
          }

          return () => clearTimeout(timer);
        }, [charIndex, isDeleting, roleIndex]);

  return (
    <>
      <header className="header">
        <div className="logo">
          <motion.h1 className="logo-txt" whileHover={{scale:1.2}}>Port<span className='logo-span'>folio</span></motion.h1>
        </div>

        <nav>
          <ul className="nav-links-main">
            <li><motion.a whileHover={{scale:1.15, transition:{duration:1.1}}} className="nav-link" href="#home">Home</motion.a></li>
            <li><motion.a whileHover={{scale:1.15}} className="nav-link" href="#about">About</motion.a></li>
            <li><motion.a whileHover={{scale:1.15}} className="nav-link" href="#skills">Skills</motion.a></li>
            <li><motion.a whileHover={{scale:1.15}} className="nav-link" href="#projects">Projects</motion.a></li>
            <li><motion.a whileHover={{scale:1.15}} className="nav-link" href="#contact">Contact</motion.a></li>
            <motion.button whileHover={{scale:1.15}} className='btn-submit'>Download</motion.button>
          </ul>
        </nav>
      </header>

      <section className="home">

      <div className='home-cont'>
            <p className='home-txt-1'>Hi, I'm</p>
            <p className='home-txt-2'>Omkar Ranjane</p>
            <p className='home-txt-3'>And I'm a <span className='home-txt-3-span'>{text}</span> </p>
            {/* <h2 className='home-txt-1'>About Me</h2> */}
            <p className='home-txt-4'>
              I am a passionate software developer with strong interest in
              frontend technologies and building user-friendly web applications...
            </p>
                <div className='sociallinks'>
                   <a href='https://linkedin.com/in/omkarranjane' target='_blank' className=''>
                       <FaLinkedin color='white' size={30}/>
                   </a>
                   <a href='https://github.com/OmkarORR' target='_blank' className=''>
                       <FaGithubSquare color='white' size={30} />
                   </a>
                   <a href='https://www.instagram.com/_o_m_k_a_r_007_?igsh=b3kxNm4xZHl6bjUy' target='_blank' className=''>
                        <FaInstagramSquare color='white' size={30} />
                   </a>
                   <a href='https://wa.me/919076477156' target='_blank' className=''>
                        <FaWhatsappSquare color='white' size={30} />
                   </a>
                </div>
                
      </div>
      <div className='home-main2'>
        <motion.img animate={{rotate:360}} src='/img1.png' alt='Notavailable' className='img1'></motion.img>
      </div>
  
      </section>
      
      <section id='skills' className="skills">
        <h2 className='skill-header'>Skills</h2>
        <ul className='skills-main'>
          <li className='skill'>HTML</li>
          <li className='skill'>CSS</li>
          <li className='skill'>JavaScript</li>
          <li className='skill'>React</li>
          <li className='skill'>Java</li>
          <li className='skill'>Git & GitHub</li>
        </ul>   
      </section>

      <section id='projects' className="projects">
        <h2 className='proj-header'>Projects</h2>

      <div className='container-proj'>

          <div className='proj-cont-1'>

            <motion.article whileHover={{scale:1.1}} className='proj-main-1'>
             <h3>UserAuthentication System</h3>
              <p>Java, Servlets, JDBC, ReactJS, MySQL</p>
              <p class="proj-desc">
                Designed and developed a full-stack authentication system with user
                registration and login. Built backend APIs using Java Servlets and JDBC with
                MySQL database integration. Implemented server-side validation and used
                Prepared Statements to prevent SQL Injection. Deployed the application on
                Apache Tomcat and followed MVC architecture. Integrated ReactJS frontend forms
                with backend APIs.
              </p>

                <a href='https://user-authentication-frontend-seven.vercel.app/' >Live Preview</a>
              </motion.article>

              <motion.article whileHover={{scale:1.1}} className='proj-main-2'>
                <h3 className="proj-title">Nike Store – Frontend E-Commerce UI</h3>

                <p className="tech">
                  ReactJS, JavaScript, HTML, CSS
                </p>

                <p className="proj-desc">
                  Developed a responsive Nike Store frontend with modern UI and reusable React
                  components. Implemented product listing, product details, and add-to-cart UI
                  functionality. Used React state management for cart and product interactions.
                  Ensured mobile-first design and cross-browser compatibility.
                </p>
                <a href='https://nike-shoes-frontend-ui.vercel.app/' >Live Preview</a>
              </motion.article>
          </div>


          <div className='proj-cont-2'>

            <motion.article whileHover={{scale:1.1}} className='proj-main-3'>
                <h3>Todo List Application</h3>
                <p>ReactJS, JavaScript, HTML, CSS</p>
                <p>
                  Built a Todo List application to add, edit, delete, and mark tasks as completed.
                  Used React useState for managing task state and conditional rendering.
                  Implemented clean UI with real-time updates on user actions.
                  Focused on component reusability and basic user experience best practices.
                </p>
              </motion.article>

              <motion.article whileHover={{scale:1.1}} className='proj-main-4'>
                <h3>Add New</h3>
              </motion.article>
          </div>
      </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>Phone: 9076477156</p>
        <p>Email: oranjane010@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>

      <footer>
        <p>© 2026 Omkar. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
