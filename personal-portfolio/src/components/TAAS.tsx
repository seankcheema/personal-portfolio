import React, {useState, useEffect} from 'react';
import './TAAS.css';
import Header from './Header.tsx';

const TAAS: React.FC = () => {
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
      
        const elementsToObserve = document.querySelectorAll('.taas-desc, .taas-desc-container img, .taas-desc-container i');
        elementsToObserve.forEach((el) => observer.observe(el));
      
        return () => observer.disconnect(); // Clean up the observer
      }, []);

  return <div className="home">
  <Header />
  <div className='taas-main-content'>
    <div className='taas-content'>
      <div className='taas-header'>
          <div className='taas-info'>
            <h3>TAAS Redesign</h3>
            <i>2024</i>
            <hr/>
            <p>Revamping the UI/UX of a subpar TA application website supplied by UF.</p>
            <div className='links'>
              <a href="https://github.com/seankcheema/TAAS-Redesign" target="_blank" rel="noopener noreferrer">
                View on GitHub
                <span className="arrow">➔</span>
              </a>
              <a href="https://docs.google.com/document/d/1IyyGLtXvPUNprJn4Hkfy0jWZQ1anTDtXLG8eUjKWIG0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                View Project Proposal
                <span className="arrow">➔</span>
              </a>
              <a href="https://docs.google.com/document/d/1cfrmdgNnOcgJrGj1SzLrK0bGW_UDHO_7SGfBNbmxlP0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                View Preliminary Report
                <span className="arrow">➔</span>
              </a>
              <a href="https://docs.google.com/document/d/1ySOz6Gh43SMrNebxB6fpJ6MU_vEq5n5QLY_tCmn0wdo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                View Final Report
                <span className="arrow">➔</span>
              </a>
            </div>
          </div>
          <img
              src="../assets/TAAS Graphic.png"
              alt="Requestify"
              onClick={() => openModal('../assets/TAAS Graphic.png')}
            />
      </div>
      <div className='taas-desc-container'>
        <div className='taas-wrap'>
        <div className='taas-desc small-taas-desc'>
          <h3>My Contribution</h3>
          <ul>
            <li>Designed the interfaces and interactions of the new TAAS</li>
            <li>Developed the system using React, Typescript, and CSS</li>
            <li>Conducted user interviews</li>
            <li>Conducted an analysis using the data collected from the evaluation</li>
          </ul>
        </div>  

        <div className='taas-desc small-taas-desc'>
          <h3>Problem Statement</h3>
          <p>The UF TA Assignment System suffers from usability issues, especially learnability and physical exertion, which cause confusion, frustration and frequent errors among manager, professor, and student users.</p>
        </div> 
        </div>
        <div className='taas-desc'>
          <h3>The Old System</h3>
          <p>The original TAAS was riddled with unlabeled menus, confusing interactions, overwhelming dashboards, outdated interfaces, and processes that required an unnecessary number of steps.</p>
        </div>
        <img
            src="../assets/Old TAAS Graphic.png"
            alt="Old System"
            className="old-system-graphic"
            onClick={() => openModal('../assets/Old TAAS Graphic.png')}
          />
          <i>Old System Interfaces</i>
        <div className='taas-desc'>
          <h3>Low Fidelity Prototypes</h3>
          <p>We began by creating low fidelity prototypes displaying very rough ideas of how we wanted the interface to be laid out.</p>
        </div> 
        <img
                src="../assets/Student lofi.png"
                alt="student lofi"
                className="student-lofi-graphic"
                onClick={() => openModal('../assets/Student lofi.png')}
              />
          <i>Student Interface Sketches</i>
          <img
                src="../assets/Prof lofi.png"
                alt="prof lofi"
                className="prof-lofi-graphic"
                onClick={() => openModal('../assets/Prof lofi.png')}
              />
          <i>Professor Interface Sketches</i>
          <img
                src="../assets/Manager lofi.png"
                alt="manager lofi"
                className="manager-lofi-graphic"
                onClick={() => openModal('../assets/Manager lofi.png')}
              />
          <i>Manager Interface Sketches</i>
        <div className='taas-wrap'>
          <div className='taas-desc small-taas-desc'>
            <h3>Preliminary Interviews</h3>
            <p>Following the ideals of formative evaluations, we began conducting preliminary interviews using these low fidelity prototypes with potential end users to gauge whether or not our mental models as designers matched those of these users. As a result, we found some interactions in the professor and manager interfaces that could be improved, but the overall consensus was that the new system was significantly better.</p>
          </div>

          <div className='taas-desc small-taas-desc'>
            <h3>Final Prototype</h3>
            <p>The final prototype for this system was built using React, Typescript, and CSS and was a product of the feedback from the low fidelity interfaces and informal interviews along the way. It should be noted that there was no high fidelity mockup for this project due to this being a course project with accelerated deadlines.</p>
          </div>
        </div>
        <img
                src="../assets/TAAS Student.png"
                alt="student"
                onClick={() => openModal('../assets/TAAS Student.png')}
              />
          <i>Student Interfaces</i>
          <img
                src="../assets/TAAS Professor.png"
                alt="prof"
                onClick={() => openModal('../assets/TAAS Professor.png')}
              />
          <i>Professor Interfaces</i>
          <img
                src="../assets/Manager TAAS.png"
                alt="manager 1"
                onClick={() => openModal('../assets/Manager TAAS.png')}
              />
          <i>Manager Interfaces</i>

        <div className='taas-desc'>
          <h3>Formal Evaluation</h3>
          <p>Following the creation of the final prototype, a formal evaluation was conducted to analyze how the new interface improved upon the old. To evaluate the redesigned TAAS, 12 undergraduate CISE students were recruited to simulate the roles of students, professors, and managers, performing tasks on both the old and new systems in a within-subjects design. Participants completed role-specific tasks, rated difficulty and effort on a Likert scale, and provided qualitative feedback while metrics such as time, error rates, and clicks were tracked to compare learnability and physical exertion between the systems. </p>
        </div>

        <div className='taas-desc'>
          <h3>Results</h3>
          <p>The following graphs detail the results of this study in terms of the metrics collected to analyze the learnability and physical exertion of the new and old systems.</p>
        </div>
        <img
            src="../assets/Graphs.png"
            alt="Graphs"
            className='graph-graphic'
            onClick={() => openModal('../assets/Graphs.png')}
          />
          <i>Evaluation Graphs</i>
        <div className='taas-desc'>
          <p>Overall, the evaluation demonstrated that the redesigned TAAS significantly improved learnability, reduced physical exertion, and eliminated errors across all three user types through streamlined workflows, simplified interfaces, and consolidated information. Participants completed tasks faster, with fewer clicks and zero errors, while survey ratings confirmed the redesign’s effectiveness in addressing usability issues such as unclear menus and overwhelming layouts in the old system. </p>
        </div>


      </div>
    </div>

    {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Modal Enlarged" />
            <div className="close-btn" onClick={closeModal}>
              Close
            </div>
          </div>
        </div>
      )}
      
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

export default TAAS;
