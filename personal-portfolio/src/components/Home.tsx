import React, { useEffect } from 'react';
import './Home.css';
import Header from './Header.tsx';
import TiltedCard from './TiltedCard.tsx';
import { useLocation } from 'react-router-dom';
import Footer from './Footer.tsx';

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
          <h1>Hi, I'm Sean</h1>
          <h2>I am a pixel-perfect <b>UI/UX developer</b>, fascinated by how people interact with technology.</h2>
        </div>

        <div className='content' id='work'>
          <TiltedCard
            color="#251F1F"
            rotateAmplitude={12}
            scaleOnHover={1.02}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className='project fr-project'>
                <img src="../assets/FrontRunner Graphic.png" alt="FrontRunner" />
                <h3>FrontRunner</h3>
                <i>2025</i>
                <hr />
                <p>Creating a unified business platform for small artisan businesses.</p>
                <div className='links fr-links'>
                  <a href="frontrunner">
                    View Project
                    <span className="home-arrow">➔</span>
                  </a>
                </div>
              </div>
            }
            onClick={() => window.location.href = "frontrunner"}
          />

          <TiltedCard
            color="#1F2220"
            rotateAmplitude={12}
            scaleOnHover={1.02}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className='project rq-project'>
                <img src="../assets/Requestify Graphic.png" alt="Requestify" />
                <h3>Requestify</h3>
                <i>2024</i>
                <hr />
                <p>Streamlining the way DJs and venue patrons interact.</p>
                <div className='links rq-links'>
                  <a href="requestify">
                    View Project
                    <span className="home-arrow">➔</span>
                  </a>
                </div>
              </div>
            }
            onClick={() => window.location.href = "requestify"}
          />
          <TiltedCard
            color="#231F25"
            rotateAmplitude={12}
            scaleOnHover={1.02}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className='project taas-project'>
                <img src="../assets/TAAS Graphic.png" alt="TAAS" />
                <h3>TAAS Redesign</h3>
                <i>2024</i>
                <hr />
                <p>Revamping the UI/UX of a subpar application system.</p>
                <div className='links taas-links'>
                  <a href="taas">
                    View Project
                    <span className="home-arrow">➔</span>
                  </a>
                </div>
              </div>
            }
            onClick={() => window.location.href = "taas"}
          />

          <TiltedCard
            color="#1E2025"
            rotateAmplitude={12}
            scaleOnHover={1.02}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className='project dmapp-project'>
                <img src="../assets/DM App Graphic.png" alt="DM App" />
                <h3>Dance Marathon</h3>
                <i>2024 - 2025</i>
                <hr />
                <p>Design and development for an organization that supports children’s health.</p>
                <div className='links dmapp-links'>
                  <a href="dance-marathon">
                    View More
                    <span className="home-arrow">➔</span>
                  </a>
                </div>
              </div>
            }
            onClick={() => window.location.href = "dance-marathon"}
          />

          <div className='about-me' id='previous-experience' style={{ marginBottom: '0' }}>
            <h3>Experience</h3>
            <div className='experience' style={{ marginBlockStart: '1em' }}>
              <img src="../assets/Fid Logo.jpeg" alt="Fidelity Logo" />
              <div className='exp-text'>
                <h4>Associate Software Engineer</h4>
                <p>Fidelity Investments</p>
              </div>
              <i>2026 - Present</i>
            </div>
            <div className='experience' style={{ marginBlockStart: '1em' }}>
              <img src="../assets/Fid Logo.jpeg" alt="Fidelity Logo" />
              <div className='exp-text'>
                <h4>Software Engineer Intern</h4>
                <p>Fidelity Investments</p>
              </div>
              <i>2025</i>
            </div>

            <div className='experience'>
              <img src="../assets/NG Logo.jpeg" alt="Northrop Grumman Logo" />
              <div className='exp-text'>
                <h4>Software Engineer Intern</h4>
                <p>Northrop Grumman</p>
              </div>
              <i>2024</i>
            </div>

            <div className='experience'>
              <img src="../assets/AKTS Logo.svg" alt="AKTS Logo" />
              <div className='exp-text'>
                <h4>Software Engineer Intern</h4>
                <p>Akoustis (SpaceX)</p>
              </div>
              <i>2023 - 2024</i>
            </div>
          </div>

            <div className='about-me' id='about'>
              <h3>About Me</h3>
              <p>I am a Master’s student at the University of Florida obtaining a degree in Computer Science with a focus in Human-Centered Computing seeking a full-time position in the fields of <b>UI/UX Development</b> and <b>Front End Development</b>.</p>
              <p>My goal as a computer scientist is to bridge the gap between traditional design and development roles by my applying skills as a developer with my passion for User Experience Design. What got me interested in this field was the user-facing aspect, as I have always been intrigued by how humans interact with technology. By leveraging my development skills, I have been successful in completing projects where I got to see end users' joy while using a product tailored to them.</p>
              <p>Outside of my work, I have earned a black belt in Isshinryu Karate and I love cooking, finding new coffee spots, listening to music, cars, and spending time with family and friends.</p>
              <div className="socials">
                <a
                  className="social"
                  href="https://www.linkedin.com/in/sean-cheema/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ cursor: "pointer" }}
                >
                  <img src="../assets/linked in.png" alt="LinkedIn" />
                  <p>LinkedIn</p>
                </a>

                <a
                  className="social"
                  href="/files/Sean Cheema Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ cursor: "pointer" }}
                >
                  <img src="../assets/Document Filled.png" alt="Resume" />
                  <p>Resume</p>
                </a>

                <a
                  className="social"
                  href="https://github.com/seankcheema"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ cursor: "pointer" }}
                >
                  <img src="../assets/Github.png" alt="GitHub" />
                  <p>GitHub</p>
                </a>
              </div>

            </div>
          </div>



        </div>
        <Footer />
      </div>
      );
};

      export default Home;
