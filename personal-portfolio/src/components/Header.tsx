import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 450);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // Function to handle smooth scrolling
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();

    if (location.pathname === "/") {
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offset = 100;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    } else {
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  // Scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        setTimeout(() => {
          const offset = 100;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <header>
      {location.pathname !== "/" && (
        <a href="/" >
          <svg width="20" height="20" viewBox="0 0 372 406" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav-logo">
          <g filter="url(#filter0_d_181_141)">
          <path d="M236.432 6.21398C244.473 -0.244846 255.656 -1.10252 264.588 4.05445L324.656 38.7346C339.88 47.5246 341.517 68.8675 327.811 79.8764L104.783 259.017C96.7417 265.475 85.5595 266.333 76.6273 261.176L16.5595 226.496C1.33485 217.706 -0.302152 196.363 13.4039 185.354L236.432 6.21398Z" fill="url(#paint0_linear_181_141)"/>
          <path d="M267.144 139.237C275.185 132.779 286.367 131.921 295.3 137.078L355.367 171.758C370.592 180.548 372.229 201.891 358.523 212.9L135.495 392.04C127.453 398.499 116.271 399.357 107.339 394.2L47.2712 359.519C32.0466 350.729 30.4096 329.387 44.1156 318.378L267.144 139.237Z" fill="url(#paint1_linear_181_141)"/>
          </g>
          <defs>
          <filter id="filter0_d_181_141" x="0.0583496" y="0.704956" width="371.81" height="404.844" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_181_141"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_181_141" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_181_141" x1="39.125" y1="114.35" x2="322.837" y2="278.151" gradientUnits="userSpaceOnUse">
          <stop offset="0.15" stop-color="#636CB5"/>
          <stop offset="1" stop-color="#B46B4B"/>
          </linearGradient>
          <linearGradient id="paint1_linear_181_141" x1="39.125" y1="114.35" x2="322.837" y2="278.151" gradientUnits="userSpaceOnUse">
          <stop offset="0.15" stop-color="#636CB5"/>
          <stop offset="1" stop-color="#B46B4B"/>
          </linearGradient>
          </defs>
          </svg>
        </a>
      )}
      <a href="/#work" onClick={(e) => handleScroll(e, "#work")}>
        Work
      </a>
      <a href="/#about" onClick={(e) => handleScroll(e, "#about")}>
        About
      </a>
      <a href="/files/Sean Cheema Resume.pdf" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
      <a href="mailto:seankcheema@gmail.com">Contact</a>
    </header>
  );
};

export default Header;
