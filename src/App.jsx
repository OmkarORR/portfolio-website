import {  easeInOut, motion} from 'motion/react'
import Contact from './Contact';
import './App.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  const [open, setopen] = useState(false);

  const [content, setcontent] = useState(false); 

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
    <BrowserRouter>
      <Routes>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    
      <motion.header className="header">
        <div className="logo">
          <motion.h1 className="logo-txt" whileHover={{scale:1.2}}>Port<span className='logo-span'>folio</span></motion.h1>
          <div className='toggle-menu' onClick={() => setopen(prev => !prev)}><CiMenuFries /></div>
        </div>
        

        <nav id='home'>
        <ul className={`nav-links-main ${open ? "active" : ""}`}  >
                <li>
                  <motion.a onClick={()=>{setopen(false)}} whileHover={{ scale: 1.15 }} className="nav-link" href="#home">
                    Home
                  </motion.a>
                </li>

                <li>
                  <motion.a onClick={()=>{setopen(false)}} whileHover={{ scale: 1.15 }} className="nav-link" href="#projects">
                    Project
                  </motion.a>
                </li>

                <li>
                  <motion.a onClick={()=>{setopen(false)}} whileHover={{ scale: 1.15 }} className="nav-link" href="#skills">
                    Skills
                  </motion.a>
                </li>

                <li>
                  <motion.div onClick={()=>{setopen(false)}} whileHover={{ scale: 1.15 }}>
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </motion.div>
                </li>

                <motion.a href='/OmkarRanjane Frontend 2.pdf' onClick={()=>{setopen(false)}}  whileHover={{ scale: 1.15 }} target='_blank' className="btn-submit">
                  Download
                </motion.a>
              </ul>

        </nav>
      </motion.header>

      <motion.section className="home">
      <div className='home-cont'>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.0, ease: "easeOut"}} className='home-txt-1'>Hi, I'm</motion.p>
            <motion.p  initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.0, ease: "easeOut"}} className='home-txt-2'>Omkar Ranjane</motion.p>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.0, ease: "easeOut"}} className='home-txt-3'>And I'm a <span className='home-txt-3-span'>{text}</span> </motion.p>
            {/* <h2 className='home-txt-1'>About Me</h2> */}
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.0, ease: "easeOut"}} className='home-txt-4'>
              I am a passionate software developer with strong interest in
              frontend technologies and building user-friendly web applications...
            </motion.p>
                <motion.div className='sociallinks' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.0, ease: "easeOut"}}>
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
                </motion.div>
                
      </div>
      <div className='home-main2'>
        <motion.img initial={{opacity:0, y:30}} whileInView={{opacity:1}} transition={{duration:1, ease:easeInOut}} src='/img1.png' alt='Notavailable' className='img1'></motion.img>
      </div>
  
      </motion.section>
      
      <section id='skills' className="skills">
        <h2 className='skill-header'>Skills</h2>
        <ul className='skills-main'>
          <img className='skills-logo-img' src='/html-5.png' alt='error'></img>
          <img className='skills-logo-img' src='/css-5.png' alt='error'></img>
          <img className='skills-logo-img' src='/java-script.png' alt='error'></img>
          <img className='skills-logo-img' src='/physics.png' alt='error'></img>
          <img className='skills-logo-img' src='/java.png' alt='error'></img>
          <img className='skills-logo-img' src='/git.png' alt='error'></img>
          <img className='skills-logo-img' src='/github.png' alt='error'></img>
          {/* <li className='skill'>HTML</li>
          <li className='skill'>CSS</li>
          <li className='skill'>JavaScript</li>
          <li className='skill'>React</li>
          <li className='skill'>Java</li>
          <li className='skill'>Git</li> */}
          {/* <li className='skill'>GitHub</li> */}
        </ul>   
      </section>

      <motion.section id='projects' className="projects" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1, ease:easeInOut}}>
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

                <a href='https://user-authentication-frontend-seven.vercel.app/' target='_blank' >Live Preview</a>
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
                <a href='https://nike-shoes-frontend-ui.vercel.app/' target='_blank' >Live Preview</a>
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

              <motion.article whileHover={{scale:1.1}} className='proj-main-4'  >
                <h3>Add New</h3>
              </motion.article>
          </div>
      </div>
      </motion.section>
      </BrowserRouter> 

      <section className="contact">
        <h2>Contact Me</h2>
        <p>Phone: 9076477156</p>
        <p>Email: oranjane010@gmail.com</p>
        <p>LinkedIn: https://linkedin.com/in/omkarranjane</p>
      </section>

      <footer>
        <p>© 2026 Omkar. All rights reserved.</p>
      </footer> 
    </>
  )
}

export default App
