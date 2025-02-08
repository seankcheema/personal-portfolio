import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <hr />
            <div className='footer-content'>
                <p>© {new Date().getFullYear()} Sean Cheema</p>
                <div className='footer-right'>
                <a href='https://www.figma.com/design/80hfYLnBW5X04TaBP7YxsE/Personal-Portfolio?node-id=0-1&t=DsKoGwff1gYkNICI-1' target="_blank" rel="noopener noreferrer">
                <p>Designed with</p>
                <img src="../assets/figma-line.svg" className='footer-icon' alt='figma icon'/>
                </a>
                <p>, Built with</p>
                <img src='../assets/reactjs-line.svg' className='footer-icon' alt='react icon'/>
                <img src='../assets/typescript.svg' className='footer-icon' alt='ts icon'/>
                <img src='../assets/css3-fill.svg' className='footer-icon' alt='css icon'/>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;