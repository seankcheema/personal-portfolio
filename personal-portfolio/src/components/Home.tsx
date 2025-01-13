import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
    <header>
      <img src="../assets/portfolio-icon-transparent.svg" alt="portfolio icon" className='portfolio-icon'/>

      <hr className="separator" />
      <a href="#work">Work</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact</a>
    </header>
    <div className='main-content'>
      <div className="intro">
        <h1>Hi, I'm Sean Cheema</h1>
        <h2>I am a pixel-perfect <b>UI/UX engineer</b>, fascinated by how people interact with technology.</h2>
      </div>

      <div className='work'>
        <div className='project rq-project'>
            <img src="../assets/Requestify Graphic.png" alt="Requestify" />
            <h3>Requestify</h3>
            <i>2024</i>
            <hr/>
            <p>A music request web app providing a medium between DJs and venue patrons.</p>
            <div className='links rq-links'>
              <a href="requestify">
                View Project
                <span className="arrow">➔</span>
              </a>
            </div>
        </div>

        <div className='project taas-project'>
            <img src="../assets/TAAS Graphic.png" alt="TAAS" />
            <h3>TAAS Redesign</h3>
            <i>2024</i>
            <hr/>
            <p>Revamping the UI/UX of a subpar TA application website supplied by UF.</p>
            <div className='links taas-links'>
              <a href="taas">
                View Project
                <span className="arrow">➔</span>
              </a>
            </div>
        </div>

        <div className='project dmweb-project'>
            <img src="../assets/DM Website Graphic.png" alt="DM Website" />
            <h3>Dance Marathon Website</h3>
            <i>2024 - Present</i>
            <hr/>
            <p>Contributing to the UI/UX of the Dance Marathon website to raise awareness about their cause of supporting UF Health Shands Children’s Hospital.</p>
            <div className='links dmweb-links'>
              <a href="https://floridadm.org/">
                Visit the Website
                <span className="arrow">➔</span>
              </a>
            </div>
        </div>

        <div className='project dmapp-project'>
            <img src="../assets/DM App Graphic.png" alt="DM App" />
            <h3>Dance Marathon App</h3>
            <i>2024 - Present</i>
            <hr/>
            <p>Leading the UI redesign and supporting front-end development for an app for internal Dance Marathon members.</p>
            <div className='links dmapp-links'>
              <a href="https://apps.apple.com/us/app/dm-uf/id6480380095">
                Dowload the App
                <span className="arrow">➔</span>
              </a>
            </div>
        </div>

        <div className='project internship-project'>
            <h3>Northrop Grumman</h3>
            <i>2024</i>
            <hr/>
            <b>Software Engineering Intern</b>
            <p>Created multiple user-centered full stack applications to automate the workflow of process engineers, utilizing strategies such as user interviews, prototyping, and formative evaluations.</p>
        </div>

        <div className='project internship-project'>
            <h3>Akoustis Technologies</h3>
            <i>2023 - 2024</i>
            <hr/>
            <b>Software Engineering Intern</b>
            <p>Developed full stack applications that reduced task times for engineers by up to 99% and managed thousands of data entries for modeling data.</p>
        </div>
      </div>

      <div className='about-me'>
          <h3>About Me</h3>
          <p>I am a Master’s student at the University of Florida obtaining a degree in Computer Science with a focus in Human-Centered Computing seeking a Summer 2025 internship in the fields of UI/UX development and Product Design.

Outside of my work, I have earned a black belt in Isshinryu Karate and I love cooking, listening to music, working on my car, and spending time with family and friends.
</p>
      </div>
        
    </div>
    
    </div>
  );
};

export default Home;
