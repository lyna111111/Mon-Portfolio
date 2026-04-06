import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="#hero">LM</a>
      </div>

      <div className="nav-links">
        <a href="#about" className="nav-link"><span>01.</span>A propos</a>
        <a href="#projects" className="nav-link"><span>02.</span>Projets</a>
        <a href="#contact" className="nav-link"><span>03.</span>Contact</a>

        <div className="nav-btn">
          <a href="/CV_2025-04-06_Lina_Madani.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">
            CV / Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
