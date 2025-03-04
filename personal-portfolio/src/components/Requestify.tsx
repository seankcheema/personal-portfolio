import React, {useState, useEffect} from 'react';
import './Requestify.css';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

const Requestify: React.FC = () => {
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
  
    const elementsToObserve = document.querySelectorAll('.rq-desc, .rq-desc-container img, .rq-desc-container i');
    elementsToObserve.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect(); // Clean up the observer
  }, []);
  

  return <div className="home">
  <Header />
  <div className='rq-main-content'>
    <div className='rq-content'>
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
          <img
            src="../assets/Requestify Graphic.png"
            alt="Requestify"
            onClick={() => openModal('../assets/Requestify Graphic.png')}
          />
      </div>
      <div className='rq-desc-container'>
        <div className= 'rq-wrap'>
        <div className='rq-desc small-rq-desc'>
          <h3>My Contribution</h3>
          <ul>
            <li>Project manager on a team of 4</li>
            <li>Designed the application with Figma</li>
            <li>Developed the front end using React, TypeScript, and CSS</li>
          </ul>
        </div>
        <div className='rq-desc small-rq-desc'>
          <h3>Problem Statement</h3>
          <p>Interactions between DJs and venue patrons are often disorganized and inefficient. So as the demand for personalized music rises, so does the need for a platform to streamline these interactions.</p>
        </div>
        <div className='rq-desc small-rq-desc'>
          <h3>But wait... doesn't this already exist?</h3>
          <p>Well yes, existing applications such as RequestNow, limeDJ, and QueueDJ, offer similar functionality but have their limitations:</p>
          <p><b>Downloading an app:</b> If I’m out with my friends I’m not going to want to wait forever for an app to install!</p>
          <p><b>Payment to request songs:</b> I’m already paying for my drinks, why should I have to pay to request a song?</p>
          <p><b>Non-interactive queues:</b> No one’s going to want to hear that overplayed song from 2012...</p>
        </div>
        <img
          src="../assets/Solution Graphic.png"
          alt="Solution Graphic"
          className="solution-graphic"
          onClick={() => openModal('../assets/Solution Graphic.png')}
        />
        </div>

        <div className='rq-desc'>
          <h3>The Solution</h3>
          <p>Requestify is a web application designed to simplify the song request process. Users at a venue can send song requests directly to the DJ, vote on songs in the queue, and send tips anonymously to DJs. The DJ can view these polls and add songs to their playlist based on the user feedback. This audience interactivity empowers individuals to interact with the song selection while providing a new revenue source for the DJ.</p>
        </div>
        <div className='rq-desc'>
          <h3>Prototyping</h3>
          <p>The prototyping for this application was done using Figma and underwent six potential end-user interviews during three sprints to refine it and iterate through designs.</p>
        </div>
        <img
          src="../assets/Wireframe graphic Mobile.png"
          alt="Wireframe Mobile Graphic"
          className="wireframe-graphic"
          onClick={() => openModal('../assets/Wireframe graphic Mobile.png')}
        />
        <i>Mobile Prototyping</i>
        <img
          src="../assets/Wireframe graphic Desktop.png"
          alt="Wireframe Desktop Graphic"
          className="wireframe-graphic"
          onClick={() => openModal('../assets/Wireframe graphic Desktop.png')}
        />
        <i>Desktop Prototyping</i>
        <div className='rq-desc'>
          <h3>How It Works</h3>
          <p>The following software architecture diagram, made in draw.io, serves to visualize how the system works and serves both user types in an safe, efficient way.</p>
        </div>
        <img
          src="../assets/SAD.png"
          alt="SAD Graphic"
          className="wireframe-graphic"
          onClick={() => openModal('../assets/SAD.png')}
        />
        <i>Software Architecture Diagram</i>
        <div className='rq-wrap'>
        <div className='rq-desc small-rq-desc'>
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

        <div className='rq-desc small-rq-desc'>
          <h3>What went wrong?</h3>
          <p>Some issues included connecting the Stripe API, figuring out how to support real-time queue updates, and getting the application deployment-ready. These issues stemmed from this project being a learning experience, but were solved by working together and researching solutions in order to create a fully-functioning product.
          </p>
        </div>
        </div>
        <div className='rq-desc'>
          <h3>Final Product</h3>
          <p>The final product developed is a ready-to-deploy web application using the above tech stack and tested via demos and end-to-end testing.</p>
        </div>
        <img
          src="../assets/RQ Graphic Mobile.png"
          alt="Final Mobile Graphic"
          className="wireframe-graphic"
          onClick={() => openModal('../assets/RQ Graphic Mobile.png')}
        />
        <i>Mobile Interfaces</i>
        <img
          src="../assets/Dashboard.png"
          alt="Final Desktop Graphic"
          className="wireframe-graphic"
          onClick={() => openModal('../assets/Dashboard.png')}
        />
        <i>Desktop Dashboard</i>
        <img
          src="../assets/Message.png"
          alt="Final Desktop Graphic"
          className="wireframe-graphic"
          onClick={() => openModal('../assets/Message.png')}
        />
        <i>Desktop Message Popup</i>
        <img
          src="../assets/QR.png"
          alt="Final Desktop Graphic"
          className="wireframe-graphic"
          onClick={() => openModal('../assets/QR.png')}
        />
        <i>Desktop QR Code Popup</i>
        <img
          src="../assets/Profile.png"
          alt="Final Desktop Graphic"
          className="wireframe-graphic"
          onClick={() => openModal('../assets/Profile.png')}
        />
        <i>Desktop Profile Popup</i>
        <img
          src="../assets/History.png"
          alt="Final Desktop Graphic"
          className="wireframe-graphic"
          onClick={() => openModal('../assets/History.png')}
        />
        <i>Desktop History Popup</i>
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

export default Requestify;
