import React, { useEffect } from 'react';
import './Home.css';
import Header from './Header.tsx';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const tiles = document.querySelectorAll(".project");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const tile = entry.target as HTMLElement;
            tile.style.transitionDelay = `${index * 0.1}s`; // Adjust delay dynamically
            tile.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.05 } 
    );

    tiles.forEach((tile) => observer.observe(tile));

    return () => observer.disconnect();
  }, []);

  // Use useEffect to add event listeners once the component is mounted
  useEffect(() => {
    const tiles: NodeListOf<Element> = document.querySelectorAll('.about-me'); // Select all the project tiles

    // Options for the intersection observer
    const options: IntersectionObserverInit = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.05, // Trigger when 50% of the element is in view
    };


    // Callback function to add 'visible' class when tiles are in view
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add 'visible' class
          observer.unobserve(entry.target); // Stop observing once the tile is in view
        }
      });
    };

    // Create the observer with the specified options and callback
    const observer = new IntersectionObserver(callback, options);

    // Observe each tile
    tiles.forEach((tile: Element) => {
      observer.observe(tile);
    });

    // Cleanup observer when the component is unmounted
    return () => {
      tiles.forEach((tile: Element) => {
        observer.unobserve(tile);
      });
    };
  }, []); // Empty dependency array to only run this once on mount

   // Effect to scroll to the "About" section if it's in the URL
   useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="home">
    <Header />
    <div className='main-content'>
      <div className="intro">
        <h1>Hi, I'm Sean Cheema</h1>
        <h2>I am a pixel-perfect <b>UI/UX designer</b>, fascinated by how people interact with technology.</h2>
      </div>

      <div className='content' id='work'>
        <div className='project rq-project'>
            <img src="../assets/Requestify Graphic.png" alt="Requestify" onClick={() => window.location.href = "requestify"} />
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
            <img src="../assets/TAAS Graphic.png" alt="TAAS" onClick={() => window.location.href = "taas"}/>
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
            <img src="../assets/DM Website Graphic.png" alt="DM Website" onClick={() => window.open("https://floridadm.org/", "_blank")}/>
            <h3>Dance Marathon Website</h3>
            <i>2024 - Present</i>
            <hr/>
            <p>Contributing to the UI/UX of the Dance Marathon website to raise awareness about their cause of supporting UF Health Shands Children’s Hospital.</p>
            <div className='links dmweb-links'>
              <a href="https://floridadm.org/" target="_blank" rel="noopener noreferrer">
                Visit the Website
                <span className="arrow">➔</span>
              </a>
            </div>
        </div>

        <div className='project dmapp-project'>
            <img src="../assets/DM App Graphic.png" alt="DM App" onClick={() => window.open("https://apps.apple.com/us/app/dm-uf/id6480380095", "_blank")}/>
            <h3>Dance Marathon App</h3>
            <i>2024 - Present</i>
            <hr/>
            <p>Leading the UI redesign and supporting front-end development for an app for internal Dance Marathon members.</p>
            <div className='links dmapp-links'>
              <a href="https://apps.apple.com/us/app/dm-uf/id6480380095" target="_blank" rel="noopener noreferrer">
                Download the App
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
            <h3>Akoustis</h3>
            <i>2023 - 2024</i>
            <hr/>
            <b>Software Engineering Intern</b>
            <p>Developed full stack applications that reduced task times for engineers by up to 99% and managed thousands of data entries for modeling data.</p>
        </div>

        <div className='about-me' id='about'>
          <h3>About Me</h3>
          <p>I am a Master’s student at the University of Florida obtaining a degree in Computer Science with a focus in Human-Centered Computing seeking a <b>Summer 2025 internship</b> in the fields of <b>UI/UX development</b> and <b>Product Design</b>.</p>
          <p>What got me interested in this field was the user-facing aspect. I was never super into the hardcore data structures and algorithms concepts and found more excitement in talking to people to find out their needs. By completing projects where I got to see end users' joy while using a product tailored to them, I found my purpose in the field of Computer Science.</p>
          <p>Outside of my work, I have earned a black belt in Isshinryu Karate and I love cooking, finding new coffee spots, listening to music, working on my car, and spending time with family and friends.</p>
          <div className="socials">
            <div
                className="social"
                onClick={() => window.open("https://www.linkedin.com/in/sean-cheema/", "_blank")}
                style={{ cursor: "pointer" }}
            >
                <img src="../assets/linked in.png" alt="LinkedIn" />
                <p>LinkedIn</p>
            </div>

            <div
                className="social"
                onClick={() => window.open("/files/Sean Cheema Resume.pdf", "_blank")}
                style={{ cursor: "pointer" }}
            >
                <img src="../assets/Document Filled.png" alt="Resume" />
                <p>Resume</p>
            </div>
            
            <div
                className="social"
                onClick={() => window.open("https://github.com/seankcheema", "_blank")}
                style={{ cursor: "pointer" }}
            >
                <img src="../assets/Github.png" alt="GitHub" />
                <p>GitHub</p>
            </div>

            <div
                className="social"
                onClick={() => window.location.href = "mailto:seankcheema@gmail.com"}
                style={{ cursor: "pointer" }}
            >
                <img src="../assets/Email.png" alt="Email" />
                <p>Email</p>
            </div>
        </div>

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
    </div>
  );
};

export default Home;
