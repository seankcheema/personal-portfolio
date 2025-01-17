import React, { useState, useEffect } from "react";
import "./BackToTop.css";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 400); // Show when scrolled down 300px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <p>Back to top ↑</p>
    </div>
  );
};

export default BackToTop;
