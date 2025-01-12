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

      {/* <div className='projects'>
        <div className='project'>
          <img src="../assets/placeholder.png" alt="project" />
          <h3>Project 1</h3>
          <p>Project Description</p>
        </div>
      </div> */}

        
    </div>
    
    </div>
  );
};

export default Home;
