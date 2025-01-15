import React from 'react';
import './Requestify.css';

const Requestify: React.FC = () => {
  return <div className="home">
  <header>
    <img src="../assets/portfolio-icon-transparent.svg" alt="portfolio icon" className='portfolio-icon' onClick={() => window.location.href = '/'}/>

    <hr className="separator" />
    <a href="/#work">Work</a>
    <a href="/files/Sean Cheema Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
    <a href="mailto:seankcheema@gmail.com">Contact</a>
  </header>
  <div className='rq-main-content'>
    <div className='rq-content' id='work'>
      <div className='rq-header'>
          <div className='rq-info'>
            <h3>Requestify</h3>
            <i>2024</i>
            <hr/>
            <p>A music request web app providing a medium between DJs and venue patrons.</p>
            <div className='links'>
              <a href="https://github.com/seankcheema/Requestify" target="_blank" rel="noopener noreferrer">
                View on GitHub
                <span className="arrow">➔</span>
              </a>
              <a href="https://www.figma.com/design/sVdQLpxDp70WGc5TZEn5t9/Requestify?node-id=0-1&p=f&t=WBJN4z0R9NNsqo4O-0" target="_blank" rel="noopener noreferrer">
                View on Figma
                <span className="arrow">➔</span>
              </a>
              <a href="https://docs.google.com/document/d/1gau7JGKmvkzVfC_LzOMsG8qzgbq-dCv0AwAeFt3Hd3o/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                View Project Proposal
                <span className="arrow">➔</span>
              </a>
              <a href="https://docs.google.com/document/d/15-qBCwHXxUr7xmyXkdG3xYY8X8fnY58rEv2ccDhWsWE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                View Project Documentation
                <span className="arrow">➔</span>
              </a>
            </div>
          </div>
          <img src="../assets/Requestify Graphic.png" alt="Requestify" />
      </div>
      <div className='rq-desc-container'>
        <div className='rq-desc'>
          <h3>My Contribution</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In  this team of 4, I am the project manager and one of 2 front end developers. As project manager, I organized all team meetings, facilitated delegations of tasks with the help of Trello, and kept the team on track. As a front end developer, I designed both the mobile and desktop interfaces using Figma and developed the interfaces using React, Typescript, and CSS.</p>
        </div>
        <div className='rq-desc'>
          <h3>Problem Statement</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DJs often face challenges in managing song requests at live events, as traditional methods like verbal communication or handwritten notes can be disorganized, leading to misunderstandings and missed requests. With the growing demand for personalized music, a digital platform for song requests could streamline interactions, enhance the audience's experience, and support the success of DJs and venues by providing a structured, efficient solution. </p>
        </div>
        <div className='rq-desc'>
          <h3>Related Work</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Several existing applications, such as RequestNow, limeDJ, and QueueDJ, offer similar functionality but each has limitations. These limitations include having to download an app, requiring payment to request songs, and queues that aren’t interactive. These limitations discourage participation among users leaving room for Requestify to offer a more innovative and user-friendly alternative.</p>
        </div>
        <img src="../assets/Solution Graphic.png" alt="solution graphic" className='solution-graphic'/>
        <div className='rq-desc'>
          <h3>Solution</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Several existing applications, such as RequestNow, limeDJ, and QueueDJ, offer similar functionality but each has limitations. These limitations include having to download an app, requiring payment to request songs, and queues that aren’t interactive. These limitations discourage participation among users leaving room for Requestify to offer a more innovative and user-friendly alternative.</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This audience interactivity empowers individuals to interact with the song selection while providing a new revenue source for the DJ. These integral features are why Requestify is the solution to DJ-audience interaction.</p>
        </div>
        <div className='rq-desc'>
          <h3>Wireframe</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The wireframing for this application was done using Figma and underwent six potential end-user interviews during three sprints to refine it and iterate through designs. As a product of these interviews, the team introduced features such as the “Clear Queue” button, song history, and submission confirmation when requesting a song.</p>
        </div>
        <img src="../assets/Wireframe Graphic Mobile.png" alt="Wireframe mobile graphic" className='wireframe-graphic'/>
        <img src="../assets/Wireframe Graphic Desktop.png" alt="Wireframe desktop graphic" className='wireframe-graphic'/>
        <div className='rq-desc'>
          <h3>How It Works</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The following software architecture diagram, made in draw.io, serves to visualize how the system works and serves both user types in an safe, efficient way.</p>
        </div>
        <img src="../assets/SAD.png" alt="SAD graphic" className='wireframe-graphic'/>
        
        <div className='rq-desc'>
          <h3>Tech Stack</h3>
          <div className='table-container'>
            <div className="table">
              <div className="row">
                <div className="label">Front End:</div>
                <div className="value">React, TypeScript, CSS</div>
              </div>
              <hr className="divider" />
              <div className="row">
                <div className="label">Back End:</div>
                <div className="value">Python, MySQL</div>
              </div>
            </div>
          </div>
        </div>

        <div className='rq-desc'>
          <h3>Issues</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throughout this process, we had issues to overcome as the we had never created a full application before. Examples of these issues include connecting the Stripe API, figuring out how to support real-time queue updates, and getting the application deployment-ready. These issues were solved by working together and researching solutions in order to create a fully-working product.</p>
        </div>
        <div className='rq-desc'>
          <h3>Final Product</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The final product developed is a ready-to-deploy web application using the above tech stack and tested via demos and end-to-end testing. </p>
        </div>
        <img src="../assets/RQ Graphic Mobile.png" alt="Final mobile graphic" className='wireframe-graphic'/>
        <img src="../assets/RQ Graphic Desktop.png" alt="Final desktop graphic" className='wireframe-graphic'/>
      </div>
    </div>

    
      
  </div>
  <footer>
    <hr />
    <div className='footer-content'>
      <p>© {new Date().getFullYear()} Sean Cheema. All rights reserved.</p>
      <a href='https://www.figma.com/design/80hfYLnBW5X04TaBP7YxsE/Personal-Portfolio?node-id=0-1&t=DsKoGwff1gYkNICI-1' target="_blank" rel="noopener noreferrer">View Figma for this site</a>
    </div>
  </footer>
  </div>;
};

export default Requestify;
