import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <a href="#hero" onClick={closeMenu}>LM</a>
      </div>

      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#about" className="nav-link" onClick={closeMenu}><span>01.</span>A propos</a>
        <a href="#projects" className="nav-link" onClick={closeMenu}><span>02.</span>Projets</a>
        <a href="#contact" className="nav-link" onClick={closeMenu}><span>03.</span>Contact</a>

        <div className="nav-btn">
          <a href="/CV_2025-04-06_Lina_Madani.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            CV / Resume
          </a>
        </div>
      </div>
      
      {/* Overlay to close menu when clicking outside */}
      {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
