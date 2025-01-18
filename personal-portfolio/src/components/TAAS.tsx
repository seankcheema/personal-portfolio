import React, {useState} from 'react';
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
        <div className='taas-desc'>
          <h3>My Contribution</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For this project, I was a leader in the interface and interaction design of the new TAAS system, developed the system using React, Typescript, and CSS, conducted the user interviews, and conducted an analysis on the data collected from the interviews.</p>
        </div>  

        <div className='taas-desc'>
          <h3>Problem Statement</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The UF CISE TA Assignment System (TAAS) requires a redesign to address usability issues, such as ambiguous navigation, inconsistent labeling, and unnecessarily complex workflows, which hinder students, professors, and managers in completing their tasks efficiently. By simplifying interfaces, improving role-specific design, and reducing the steps needed for key actions, the redesign aims to enhance learnability, decrease physical effort, and minimize user frustration, particularly given the system’s infrequent use each semester. The updated system will enable students to apply and track TA positions confidently, professors to review applications seamlessly, and managers to oversee operations without confusion.</p>
        </div> 

        <div className='taas-desc'>
          <h3>Low Fidelity Prototypes</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We began by creating low fidelity prototypes displaying very rough ideas of how we wanted the interface to be laid out. The following mockups were drawn by my teammate Adam.</p>
          <img
                src="../assets/Student lofi.png"
                alt="student lofi"
                className="student-lofi-graphic"
                onClick={() => openModal('../assets/Student lofi.png')}
              />
          <p>These images show the mockups for the student application process with new features such as dropdown menus and the option to import a previous application.</p>
          <img
                src="../assets/Prof lofi.png"
                alt="prof lofi"
                className="prof-lofi-graphic"
                onClick={() => openModal('../assets/Prof lofi.png')}
              />
          <p>These images show a proposed solution to the professor interfaces where they must view their courses and submit their student preferences.</p>
          <img
                src="../assets/Manager lofi.png"
                alt="manager lofi"
                className="manager-lofi-graphic"
                onClick={() => openModal('../assets/Manager lofi.png')}
              />
          <p>These images show some proposed interactions for the manager pages which is significantly more condensed than the old system.</p>
        </div> 
        
        <div className='taas-desc'>
          <h3>Preliminary Interviews</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following the ideals of formative evaluations, we began conducting preliminary interviews using these low fidelity prototypes with potential end users to gauge whether or not our mental models as designers matched those of these users. Through these interviews, we learned how we could improve the interfaces. Improvements for the student interfaces included condensing the student application page into one page, adding drop down menus for course preference selection. For professors, users expressed interest in allowing the viewing of all student applications on one page so they could select preferences easier. Lastly, managers requested to have a way to see how many students they had left while completing tasks.</p>
        </div>

        <div className='taas-desc prototype-taas-desc'>
          <h3>Final Prototype</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typically, the next step in this process would be to create a high fidelity prototype showcasing the interface in a more refined manner before moving on to development. However, due to this being a class project with required deliverables this was not possible. Below are images of the final prototype built with React, Typescript, and CSS. These interfaces are a product of feedback from the low fidelity interfaces and informal interviews along the way.</p>
          <img
                src="../assets/Student 1.png"
                alt="student 1"
                onClick={() => openModal('../assets/Student 1.png')}
              />
          <img
                src="../assets/Student 2.png"
                alt="student 2"
                onClick={() => openModal('../assets/Student 2.png')}
              />
          <p>The student final student interfaces showcase dropdown menus throughout and an option to import the latest application as mentioned before.</p>
          <img
                src="../assets/Prof 1.png"
                alt="prof 1"
                onClick={() => openModal('../assets/Prof 1.png')}
              />
          <img
                src="../assets/Prof 2.png"
                alt="prof 2"
                onClick={() => openModal('../assets/Prof 2.png')}
              />
          <p>The professor interfaces provide a simplified way to view one’s courses as well as an improvement to the application review section. This improvement is a product of the preliminary interviews and allows users to view all student applications at once and sort by important metrics such as class standing and GPA.</p>
          <img
                src="../assets/Manager 1.png"
                alt="manager 1"
                onClick={() => openModal('../assets/Manager 1.png')}
              />
          <img
            src="../assets/Manager 2.png"
            alt="manager 2"
            onClick={() => openModal('../assets/Manager 2.png')}
          />
          <img
            src="../assets/Manager 3.png"
            alt="manager 3"
            onClick={() => openModal('../assets/Manager 3.png')}
          />
          <p>The manager pages allow users to manage TA and course assignments in a simplified manner. The home page shows two tiles for each of these tasks with high priority cases displayed. The application management page resembles the one shown in the low fidelity prototype with the added change of a applications list so users may see how many students they have left. This change is a product of the preliminary interviews and resembles the familiar interface of Canvas Speedgrader.</p>
        </div>

        <div className='taas-desc'>
          <h3>Formal Evaluation</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following the creation of the final prototype, a formal evaluation was conducted to analyze how the new interface improved upon the old. To evaluate the redesigned TAAS, 12 undergraduate CISE students were recruited to simulate the roles of students, professors, and managers, performing tasks on both the old and new systems in a within-subjects design. Participants completed role-specific tasks, rated difficulty and effort on a Likert scale, and provided qualitative feedback, while metrics such as time, error rates, and clicks were tracked to compare learnability and physical exertion between the systems. Counterbalancing minimized learning effects, and pre-configured system states ensured task feasibility, allowing the study to assess whether the redesign effectively improved usability, efficiency, and user confidence for all roles.</p>
        </div>

        <div className='taas-desc'>
          <h3>Results</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The following graphs detail the results of this study in terms of the metrics collected to analyze the learnability and physical exertion of the new and old systems.</p>
          
          <img
            src="../assets/Graphs.png"
            alt="Graphs"
            className='graph-graphic'
            onClick={() => openModal('../assets/Graphs.png')}
          />
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overall, the evaluation demonstrated that the redesigned TAAS significantly improved learnability, reduced physical exertion, and eliminated errors across all three user types through streamlined workflows, simplified interfaces, and consolidated information. Participants completed tasks faster, with fewer clicks and zero errors, while survey ratings confirmed the redesign’s effectiveness in addressing usability issues such as unclear menus and overwhelming layouts in the old system. </p>
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
