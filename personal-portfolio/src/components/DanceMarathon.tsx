import React, {useState, useEffect} from 'react';
import './DanceMarathon.css';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

const DanceMarathon: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    if (window.innerWidth > 768) {
      // Only allow modal to open on non-mobile screens
      setModalImage(imageSrc);
    }
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      {
        threshold: 0, // Trigger when the element is viewable
      }
    );
  
    const elementsToObserve = document.querySelectorAll('.dm-desc, .dm-desc-container img, .dm-desc-container i');
    elementsToObserve.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect(); // Clean up the observer
  }, []);
  

  return <div className="home">
  <Header />
  <div className='dm-main-content'>
    <div className='dm-content'>
      <div className='dm-header'>
          <div className='dm-info'>
            <h3>Dance Marathon App</h3>
            <i>2024 - 2025</i>
            <hr/>
            <p>Leading the UI redesign and supporting front-end development for an app for over 400 internal Dance Marathon members using Figma, React Native, JavaScript, and CSS.</p>
            <div className='links'>
              <a href="https://apps.apple.com/us/app/dm-uf/id6480380095" target="_blank" rel="noopener noreferrer">
                View on App Store
                <span className="arrow">➔</span>
              </a>
            </div>
          </div>
          <img
            src="../assets/DM App Graphic.png"
            alt="DM App"
            onClick={() => openModal('../assets/DM App Graphic.png')}
          />
      </div>
      <div className='dm-header' style={{marginTop:0, background:"linear-gradient(to right, #1E2025, #24211E)"}}>
          <div className='dm-info' >
            <img src="../assets/MissionDM.svg" alt="Mission DM" className='MissionDM-logo'/>
            <i>2025</i>
            <hr/>
            <p>Designing and deploying the interfaces for a senior assassin-type game using Figma for designing, React Native, JavaScript, and CSS for front end development, Python for back end functionality, and Firebase for data management.</p>
          </div>
          <img
            src="../assets/MissionDM Graphic.png"
            alt="DM App"
            onClick={() => openModal('../assets/MissionDM Graphic.png')}
          />
      </div>
      <div className='dm-header' style={{marginTop:0, backgroundColor:"#24211E"}}>
          <div className='dm-info'>
            <h3 style={{color:"#F48320"}}>Dance Marathon Website</h3>
            <i>2024 - 2025</i>
            <hr/>
            <p>Contributing to the front end development of the Dance Marathon website to raise awareness about their cause of supporting UF Health Shands Children’s Hospital using React, JavaScript, MaterialUI, and CSS.</p>
            <div className='links' >
              <a href="https://floridadm.org/" target="_blank" rel="noopener noreferrer" style={{color:"#F48320"}}>
                Visit Website
                <span className="arrow">➔</span>
              </a>
            </div>
          </div>
          <img
            src="../assets/DM Website Graphic.png"
            alt="DM Website"
            onClick={() => openModal('../assets/DM Website Graphic.png')}
          />
      </div>
      <div className='dm-desc-container'>
        
        <div className='dm-desc'>
          <h3>What is Dance Marathon?</h3>
          <p>Dance Marathon at the University of Florida is a philanthropic organization where money is raised for UF Health Shands Children’s Hospital with the goal of aiding and preventing childhood illness.</p>
        </div>
        <div className='dm-desc'>
          <h3>My Role</h3>
          <p>I served as a Digital Marketing captain in my time with Dance Marathon at UF. What this means is that I supported the development of their app and website. More specifically, I brought User Experience Design and front end development expertise to the table.</p>
          <p>From a philanthropic perspective, I had the utmost pleasure of supporting UF Health Shands Children’s Hospital by raising over $2700 over the course of the year contributing to our organization total of 1.35 million dollars!</p>
          <p>My year spent with DM at UF was a fantastic experience where I got to use my technical expertise to support such a great cause and I wouldn’t trade it for anything.Below are some pictures taken throughout the year I participated.</p>
          <p>Below are some pictures taken throughout the year I participated.</p>
        </div>
        <img
          src="../assets/DM Collage.png"
          alt="DM Collage"
          className="medium-graphic"
          onClick={() => openModal('../assets/DM Collage.png')}
        />

      </div>
    </div>

    
    {modalImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={modalImage} alt="Enlarged" />
              <div className="close-btn" onClick={closeModal}>
                Close
              </div>
            </div>
          </div>
        )}
  </div>
  <Footer/>
  </div>;
};

export default DanceMarathon;
