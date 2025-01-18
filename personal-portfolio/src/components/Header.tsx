import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 450);
          if (window.innerWidth > 450) {
            setSidebarOpen(false); // Ensure sidebar is closed when switching to desktop view
          }
        };
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
        <header>
          <img src="../assets/portfolio-icon-transparent.png" alt="portfolio icon" className='portfolio-icon' onClick={() => window.location.href = '/'}/>

          {isMobile ? (
          <>
            {/* Menu button for mobile */}
            <FontAwesomeIcon icon={faBars} size="lg" onClick={toggleSidebar} className='menu-button'/>

            {/* Sidebar */}
            <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
              <a href="/#work" onClick={toggleSidebar}>
            Work
              </a>
              <a href="/#about" onClick={toggleSidebar}>
            About
              </a>
              <a
            href="/files/Sean Cheema Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleSidebar}
              >
            Resume
              </a>
              <a href="mailto:seankcheema@gmail.com" onClick={toggleSidebar}>
            Contact
              </a>
            </nav>
          </>
            
        ) : (
          // Desktop links
          <>
            <hr className="separator" />
            <a href="/#work">Work</a>
            <a href="/#about">About</a>
            <a href="/files/Sean Cheema Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a href="mailto:seankcheema@gmail.com">Contact</a>
          </>
        )}

        </header>
    );
};

export default Header;