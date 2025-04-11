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
        <h2>I am a pixel-perfect <b>UI/UX engineer</b>, fascinated by how people interact with technology.</h2>
      </div>

      <div className='content' id='work'>
      <TiltedCard
          color= "#251F1F"
          rotateAmplitude={12}
          scaleOnHover={1.02}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className='project fr-project'>
                <img src="../assets/FrontRunner Graphic.png" alt="FrontRunner"/>
                <h3>FrontRunner</h3>
                <i>2025</i>
                <hr/>
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
          color= "#1F2220"
          rotateAmplitude={12}
          scaleOnHover={1.02}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className='project rq-project'>
                <img src="../assets/Requestify Graphic.png" alt="Requestify"/>
                <h3>Requestify</h3>
                <i>2024</i>
                <hr/>
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
        color= "#231F25"
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
            <hr/>
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
        color= "#1E2025"
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
              <hr/>
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
          <p>I am a Master’s student at the University of Florida obtaining a degree in Computer Science with a focus in Human-Centered Computing seeking a full-time position in the fields of <b>UI/UX Design</b>, <b>Product Design</b>, and <b>Front End Development</b>.</p>
          <p>What got me interested in this field was the user-facing aspect. I was never super into the hardcore data structures and algorithms concepts and found more excitement in talking to people to find out their needs. By completing projects where I got to see end users' joy while using a product tailored to them, I found my purpose in the field of Computer Science.</p>
          <p>Outside of my work, I have earned a black belt in Isshinryu Karate and I love cooking, finding new coffee spots, listening to music, cars, and spending time with family and friends.</p>
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
    <Footer />
    </div>
  );
};

export default Home;
